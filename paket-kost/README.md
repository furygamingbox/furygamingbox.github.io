# FURY GAMING BOX — Landing Page

Landing page statis HTML/CSS/JS untuk rental PS4 portable. **Belum memakai database maupun sistem booking otomatis.** Booking melalui WhatsApp.

## Menjalankan secara lokal

Buka `index.html` di browser, atau dari root project jalankan:

```bash
python3 -m http.server 8000
```

Lalu buka `http://localhost:8000/?src=kost`.

## Publish di GitHub Pages

1. Buat repository GitHub baru (misalnya `fury-gaming-box`).
2. Unggah semua isi folder ini ke root repository, termasuk `index.html`.
3. Di repository buka **Settings → Pages → Build and deployment → Deploy from a branch**.
4. Pilih **main** dan **/(root)**, lalu **Save**.
5. Tunggu proses deploy dan catat URL **yang benar-benar diberikan GitHub**.
6. Gunakan URL itu dengan `?src=kost` untuk QR khusus penghuni kost, misalnya `https://USERNAME.github.io/fury-gaming-box/?src=kost` (contoh, bukan URL aktif).

## Membuat satu QR Code (setelah alamat website benar-benar aktif)

```bash
python3 -m pip install qrcode[pil]
python3 scripts/generate_qr.py 'https://USERNAME.github.io/fury-gaming-box/?src=kost'
```

QR disimpan sebagai `qr/qr-kost.png`. **Jangan cetak QR sebelum URL final diverifikasi dengan HP.**

## Tracking

`?src=kost` terbaca di `assets/js/main.js` dan disertakan dalam pesan WhatsApp sebagai `Sumber: QR kost`. Ini **bukan** analytics jumlah scan; untuk menghitung pengunjung yang tidak mengirim chat diperlukan integrasi layanan analitik terpisah. Tidak ada data pengunjung yang direkam oleh project ini.

## Harga

- Penghuni kost promo Rp75.000 / 24 jam, maksimal 3 penyewaan pertama per orang.
- Penghuni kost reguler Rp85.000 / 24 jam (mulai sewa ke-4).
- Pelanggan umum Rp95.000 / 24 jam.

Batas promo diverifikasi manual oleh admin saat chat WhatsApp. Jangan mempublikasikan nama/nomor kamar penghuni di situs publik.

## Gambar

- `assets/images/fury-logo.png`: logo unggahan pengguna, diubah background menjadi transparan.
- `assets/images/favicon.png`: crop dinosaurus dari logo.
- `assets/images/ps4-slim-white.png`: gambar PlayStation putih yang diunggah pengguna, sebagai referensi produk.
- `assets/images/fury-playbox-model.png`: visualisasi promosi model memegang box FURY GAMING dari gambar yang dibuat sebelumnya; bukan dokumentasi unit rental aktual.
- Saat tersedia, gantikan referensi/visualisasi dengan foto unit rental yang sebenarnya.

Font Google digunakan online; jika offline browser akan memakai font fallback.
