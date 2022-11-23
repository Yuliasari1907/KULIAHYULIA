# Clien dan Server

1. Pertama, jalankan mesin virtual Debian 11 Linux terlebih dahulu. Caranya klik mesin virtual Debian 11 kemudian klik tombol Mulai.
![1](https://user-images.githubusercontent.com/112459285/197338096-d2dad838-dd93-4ab7-9165-790d07384ef5.png)

2. Kedua Sebelumnya kita mengecek ip addresnya terlebih dahulu dengan mengetikan "ip addr" ![ip addr](https://user-images.githubusercontent.com/112459285/197338298-d3adc2c0-f9c4-4896-9970-bc701caf49a4.png) , lalu setelah itu untuk melakukan konfigurasi kita harus login sebagai root.(sudo su). Karena di dalam sistem linux, root adalah hak akses yang paling tinggi (Super User). Jika kita login sebagai user biasa, kita tidak akan bisa melakukan konfigurasi. Caranya pada bagian user ketikkan root (sudo su) lalu tekan Enter, kemudian pada bagian password ketikkan password root yang kita buat pada saat instalasi..
![sudo su](https://user-images.githubusercontent.com/112459285/197338169-fd98950d-68de-42e2-aa3b-ee537c9fed00.png)

3 Ketiga ketik perintah terminal : nano /etc/network/interfaces lalu tekan Enter. ![nano etc network interfaces](https://user-images.githubusercontent.com/112459285/197338379-3f859d03-8d79-413b-bec6-8e4ed1758ecb.png)

4. Keempat langkah selanjutnya kita akan ke file interface. Edit file dengan menambahkan konfigurasi IP Address server, sebagai contohnya IP Address Server pada eth0 adalah 192.168.50.1 Setelah selesai, tekan ctrl+s lalu Enter untuk menyimpan yang kita buat tadi, kemudian ctrl+x untuk keluar dari editor.![nano etc network interfaces2](https://user-images.githubusercontent.com/112459285/197338583-8639edbc-7749-434b-aa17-2dedc2425340.png)

5. Kelima setelah selesai melakukan konfigurasi IP Address, kemudian restart service dari networking pada komputer server kita. Caranya ketikkan perintah /etc/init.d/networking restart lalu tekan Enter. ![restart]![restart](https://user-images.githubusercontent.com/112459285/197338879-4885980b-c9c0-49cc-a30e-73db14ec2c50.png)

6. Keenam langkah selanjutnya kita harus memastikan dulu apakah IP Address kita berhasil atau tidak. Caranya dengan mengetikkan perintah ifconfig atau ip a , ip addr lalu Enter ![ip addr](https://user-images.githubusercontent.com/112459285/197338867-a72dab93-fef2-422a-9e16-71e6fef68f9c.png)

7. Ketujuh langkah selanjutnya klik Control Panel  - Network and Internet ![control panel1](https://user-images.githubusercontent.com/112459285/197339231-3af3f497-9cc7-42e7-8b20-abd6dee93cf0.png) - Network and Sharing Center ![control panel2](https://user-images.githubusercontent.com/112459285/197339237-6a484b5a-a4bf-4d9a-bb2b-f2c0d70eb018.png) - Change Adapter setting ![control panel3](https://user-images.githubusercontent.com/112459285/197339245-86f352cb-871c-498f-8beb-350dd7ddb49f.png)- Ethernet 3 ![control panel4](https://user-images.githubusercontent.com/112459285/197339258-b80a81b1-d980-4650-bff7-93eb56f6a2e8.png) - Properties - IP Version 4 (TCP/IPv4) ![control panel5](https://user-images.githubusercontent.com/112459285/197339268-203accc5-213b-4ec7-89b6-90f5e1fd39c2.png) - akan muncull ip addres, submask, gateway ![Uploading control panel5.png…]() . Kemudian Klik OK.

8. Terakhir setelah itu tekan Ok. Setelah selesai buka cmd dan ping ip address ![ping](https://user-images.githubusercontent.com/112459285/197339347-93592222-8897-4faf-ab67-ed4b32d51f7e.png)

