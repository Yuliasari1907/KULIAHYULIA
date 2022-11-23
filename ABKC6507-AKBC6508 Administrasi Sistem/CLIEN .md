# Cara Menghubungkan client-server dengan Windows

1. -  Pertama, jalankan mesin virtual Debian 11 Linux terlebih dahulu. Caranya klik mesin virtual Debian 11 kemudian klik tombol Mulai. ![Screenshot (69)](https://user-images.githubusercontent.com/112459285/193221486-0022bf4c-42ca-49da-acdb-6af7b7536574.png)

2. - Kedua setelah itu untuk melakukan konfigurasi kita harus login sebagai **root**.(*su*). Karena di dalam sistem linux, root adalah hak akses yang paling tinggi (Super User). Jika kita login sebagai user biasa, kita tidak akan bisa melakukan konfigurasi. Caranya pada bagian user ketikkan root (su) lalu tekan Enter, kemudian pada bagian password ketikkan password root yang kita buat pada saat instalasi Debian Linux. ![1](https://user-images.githubusercontent.com/112459285/193221709-99d12904-5bf6-43f0-bc17-e721899014b7.png)


3. - Ketiga ketik perintah terminal : nano /etc/network/interfaces lalu tekan Enter. ![zz](https://user-images.githubusercontent.com/112459285/193059834-bac84af1-ac3f-43a9-814b-5dccfda0102a.png)

4. - Keempat langkah selanjutnya kita akan ke file interface. Edit file dengan menambahkan konfigurasi IP Address server, sebagai contohnya IP Address Server pada eth0 adalah 192.168.243.2 Setelah selesai, tekan ctrl+s lalu Enter untuk menyimpan yang kita buat tadi, kemudian ctrl+x untuk keluar dari editor. ![yy](https://user-images.githubusercontent.com/112459285/193061242-c7e69e9e-2a95-4026-a930-b747db1ec07e.png)

5. - Kelima setelah selesai melakukan konfigurasi IP Address, kemudian restart service dari networking pada komputer server kita. Caranya ketikkan perintah /etc/init.d/networking restart lalu tekan Enter.![Screenshot (9)](https://user-images.githubusercontent.com/112459285/193062874-f30ff642-99d3-4e73-9b51-64b4ab8e6eaa.png)

6. - Keenam langkah selanjutnya kita harus memastikan dulu apakah IP Address kita berhasil atau tidak. Caranya dengan mengetikkan perintah **ifconfig** atau **ip a** lalu Enter![Screenshot (11)](https://user-images.githubusercontent.com/112459285/193063067-17537add-c643-4903-be9c-78454f4f688a.png)

8. - Ketujuh langkah selanjutnya klik kanan pada Local Area Connections lalu pilih Properties. Klik pada Internet Protocol (TCP/IP) kemudian klik Properties, akan muncul Jendela Internet Protocol (TCP/IP) Properties. Kemudian Klik OK.![Screenshot (66)](https://user-images.githubusercontent.com/112459285/193063418-e2e0c432-093e-4b85-9508-aed118baab3c.png)

9. - Terakhir pada Internet Protocol (TCP/IP) Properties pilih Use the following IP address, kemudian masukkan IP Address pada network yang sama. Sebagai contoh IP Address untuk komputer client tidak bolah sama dengan yang sebelumnya 192.168.243.1, kemudian pada bagian Subnet mask biasanya akan terisi 255.255.255.0 secara otomatis. Setelah itu tekan Ok. Setelah selesai *buka cmd dan ping ip address*![Screenshot (67)](https://user-images.githubusercontent.com/112459285/193063828-87d18000-3a7d-458e-9dcc-110313d9cf6b.png)

