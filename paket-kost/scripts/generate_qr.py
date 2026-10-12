from pathlib import Path
import sys
try:
 import qrcode
except ImportError:
 sys.exit('Install dulu: python3 -m pip install qrcode[pil]')
if len(sys.argv)!=2 or not sys.argv[1].startswith('https://'):
 sys.exit('Usage: python scripts/generate_qr.py https://ALAMAT-GITHUB-PAGES/?src=kost')
url=sys.argv[1]
if 'USERNAME' in url or 'example' in url.lower():
 sys.exit('Ganti URL contoh dengan alamat website yang sudah aktif.')
qr=qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_H,box_size=15,border=4)
qr.add_data(url);qr.make(fit=True)
path=Path(__file__).resolve().parent.parent/'qr/qr-kost.png';qr.make_image(fill_color='black',back_color='white').save(path)
print(f'QR tersimpan: {path}\nTarget: {url}')
