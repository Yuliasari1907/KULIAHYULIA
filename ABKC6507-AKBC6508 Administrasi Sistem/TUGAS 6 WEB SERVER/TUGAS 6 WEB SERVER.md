- Pertama buka terminal pada linux debian dan ketikkan su atau sudo lalau masukkan password
![langkah1](langkah1.png)

- Langkah Kedua instal terlebih dahulu web server dengan **command apt-get install apache2**
![langkah2](langkah2.png)

- Langkah ketiga lalu instaall bahasa pemograman php yaitu  php 8.1 dengan command **apt-get install php8.1** dan jikaa tidak berhasil coba ketikkan command **sudo apt -y install php8.1**

![langkah3](langkah3.png)


- Langkah kelima yaitu konfigurasi dengan ketikkan **ip a ** untuk mengecek ip server 
![langkah4](langkah4.png)

- Selanjutnya Pada saat menginstall web server dengan apache sebenarnya kita sudah bisa melihat hasilnya dengan mengunjungi web browser dan mengetikkan alamat IP server kalian 127.0.0.1 Maka akan muncul seperti gambar dibawah ini.

![langkah5](langkah5.png)

- langkah ke enam adalah dengan mengetikkan **nano /var/www/html/test/php** atau jika gagal ketikkan **nano /var/www/test.php** dan ketikkan script **<?php ?>** 
![langkah6](langkah6.png)

- 
![langkah7]()