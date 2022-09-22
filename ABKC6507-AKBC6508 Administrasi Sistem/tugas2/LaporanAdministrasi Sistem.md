#**TUGAS 2**

Silahkan membuat kelompok yang terdiri dari 3 orang.
Buatlah simulasi Client-Server 
(1) Client Server pada Linux Virtual Box dengan Windows serta 
(2) Client-Server pada 2 PC/Laptop menggunakan kabel LAN.
Buatlah laporannya pada Akun Github Masing2 dengan mark down.

- Tulis langkah2nya dengan detail dilengkapi dengan screenshoot pengerjaan kalian.
- Pembagian tugas akan terlihat pada setiap tambahan/update pada github kalian.
- Jangan lupa tambahkan akun pak novan (novanabs) dan pak harja (harjasp) pada Folder Utama Administrasi Sistem kalian.
- Batas waktu hari kamis, 22 September 2022 Jam 12.00 WITA


##Nomor 1
#####(1) Client Server pada Linux Virtual Box dengan Windows 
- Pertama Buka Virtual Box dimana sudah terinstal Linux debiannya lalu ketikakkan Su
![langkah1](https://user-images.githubusercontent.com/103896829/191675408-34913444-490a-49e1-8d52-5f13a6754491.png)

- Lalu ketikan nano /etc/network/interfaces
The primary network interface
allow-hotplug enp0s3
iface enp0s3 inet dhcp
![langkah3](https://user-images.githubusercontent.com/103896829/191675538-ae1a663c-7eb5-45a9-8ba7-fc5aa21e3e9c.png)



- lalu ketikakan # The primary network interface
allow-hotplug enp0s3
iface enp0s3 inet dhcp
iface enp0s3 inet static
     address 192.168.1.2/24
     netmask 255.255.255.0
     ![langkah5](https://user-images.githubusercontent.com/103896829/191675708-049dd2aa-0ed3-49b2-8c61-85758b22f00a.png)

- Lalu ganti netmask dengan gateway # The primary network interface
allow-hotplug enp0s3
iface enp0s3 inet dhcp
iface enp0s3 inet static
     address 192.168.1.2/24
     gateway 192.157.1.1

![Langkah6 (2)](https://user-images.githubusercontent.com/103896829/191675740-9609fe66-d241-4156-acc2-8b3bd0f9b79e.png)

- lalu ketikkan nano/etc/network/interfaces lalu enter dan ketikkan sudo systeml restart networking.services

![langkah12](https://user-images.githubusercontent.com/103896829/191675951-fa6312ed-a193-4ffc-a0a9-2ff667c2f29f.png)


-Lalu ketikkan masuk ke control panel dan pilih network dan internet lalu pilih network dan sharing center lalu sebelah kiri pilih change adapter setiing lalu pilih virtual box
![langkah14controlpanelbuka](https://user-images.githubusercontent.com/103896829/191676461-6588273b-201c-41e1-be2b-a8be950c7679.png)
![langkah15pilihnetwork and internet](https://user-images.githubusercontent.com/103896829/191676473-cf11b4bd-0dc5-4e2a-9608-4e7adad461ad.png)
![langkah16pilih adapter cahneg virtualbox](https://user-images.githubusercontent.com/103896829/191676479-176a7f05-e71f-453b-b2c3-84b5e86d4b3d.png)

-lalu klik kanan dan pilih propertinya dan pilihh IP dan ganti IP jangan sama dengan settingan awal 
![langkah17](https://user-images.githubusercontent.com/103896829/191676592-98567342-9578-4729-a175-d349bbba77e4.png)
![langkah18](https://user-images.githubusercontent.com/103896829/191676595-97240f19-6402-498c-9d6c-644595655382.png)
![langkah19](https://user-images.githubusercontent.com/103896829/191676599-ad0c1db8-0408-409d-9330-35bac8269363.png)

- masuk cmd ketikkan ping dengan IP tadi jika datanya keluar maka selesai.
![langkah20atauping](https://user-images.githubusercontent.com/103896829/191676793-27af6c50-852e-45af-a7fd-449efb3434f4.png)

##Nomor 2
#####(1) Client-Server pada 2 PC/Laptop menggunakan kabel LAN.

- Lalu buka control panel 
- pilih network dan internet lalau change adapter
