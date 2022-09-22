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

- Lalu ketikan nano /etc/network/interfaces

The primary network interface
allow-hotplug enp0s3
iface enp0s3 inet dhcp

- lalu ketikakan # The primary network interface
allow-hotplug enp0s3
iface enp0s3 inet dhcp
iface enp0s3 inet static
     address 192.168.1.2/24
     netmask 255.255.255.0
     gateway 192.157.1.1
- Lalu ganti netmask dengan gateway # The primary network interface
allow-hotplug enp0s3
iface enp0s3 inet dhcp
iface enp0s3 inet static
     address 192.168.1.2/24
     gateway 192.157.1.1


- lalu ketikkan nano/etc/network/interfaces lalu enter dan ketikkan sudo systeml restart networking.services


-Lalu ketikkan Pr
##Nomor 2
#####(1) Client-Server pada 2 PC/Laptop menggunakan kabel LAN.

- Lalu buka control panel 
- pilih network dan internet lalau change adapter