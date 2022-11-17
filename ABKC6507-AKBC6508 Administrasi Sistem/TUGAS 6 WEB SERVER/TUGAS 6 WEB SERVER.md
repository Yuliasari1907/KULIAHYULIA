- Pertama buka terminal pada linux debian dan ketikkan su atau sudo lalau masukkan password
![langkah1](https://user-images.githubusercontent.com/103896829/202406725-ac235a33-72fd-4d15-870b-2075e97e1bc6.png)


- Langkah Kedua instal terlebih dahulu web server dengan **command apt-get install apache2**
![langkah2](https://user-images.githubusercontent.com/103896829/202406781-04b5b189-f3ca-4fb3-af88-d8a6edab6a07.png)


- Langkah ketiga lalu instaall bahasa pemograman php yaitu  php 8.1 dengan command **apt-get install php8.1** dan jikaa tidak berhasil coba ketikkan command **sudo apt -y install php8.1**
![langkah3](https://user-images.githubusercontent.com/103896829/202406808-ddf5f02f-c04b-419e-9059-f61b9c4169fa.png)



- Langkah keempat yaitu konfigurasi dengan ketikkan **ip a ** untuk mengecek ip server 

![langkah4](https://user-images.githubusercontent.com/103896829/202407006-db757357-736e-493a-b730-0bf3c05fb861.png)

- Selanjutnya Pada saat menginstall web server dengan apache sebenarnya kita sudah bisa melihat hasilnya dengan mengunjungi web browser dan mengetikkan alamat IP server kalian 127.0.0.1 Maka akan muncul seperti gambar dibawah ini.

![langkah5](https://user-images.githubusercontent.com/103896829/202407025-25a07e0c-4a19-4840-9a28-28511a52b854.png)

- langkah selanjutnya adalah dengan mengetikkan **nano /var/www/html/test/php** atau jika gagal ketikkan **nano /var/www/test.php** dan ketikkan script **<?php ?>** 
![langkah6](https://user-images.githubusercontent.com/103896829/202407115-19aace1b-e0a9-440b-b36a-e832ca0d66ee.png)


- Lalu save lalu ketikan paa firefox yaitu 127.0.0.1/test.php

![ss](https://user-images.githubusercontent.com/103896829/202407182-8c544156-53fd-4a31-a3bc-35524a0bfeee.png)
