#TUGAS 3 INSTALL FTP


####Langkah-langkah dan Konfigurasi Remote Server
By : Yulia Sari

- Pertama buka virtul box lalu buka debian yang sudah kita install
![langkah1](https://user-images.githubusercontent.com/103896829/202408894-86638ff1-16a4-47b6-963f-7ab81333fd1d.png)


- Lalu ketikakkn terminal agar masuk kedalam terminal linux

![langkah2](https://user-images.githubusercontent.com/103896829/202408933-eb5e3e49-63ad-4400-9074-fe45fe46188a.png)



- Lalu ketikkan su pada linux agar masuk ke root

![langkah3](https://user-images.githubusercontent.com/103896829/202409013-66afd231-e3bb-4d46-ac92-40c5c4995ff0.png)

- lalu instal ftp terlebih dahulu dengan **apt-get install Proftpd**

 ![langkah4](https://user-images.githubusercontent.com/103896829/202409044-768d5b7b-670c-4ec4-9021-8d4aaf650253.png)



-  Setelah itu ketikkan **nano /etc/proftpd/proftpd.conf** setelah itu pada bagian **default server on dan showsymlink on kita hapus hastag atau #** dan hastag port 21 jika hastagnya belum terhapus lalu simpan dan ingat jika nanti port 21 yang akan kita masukakan kedalam port **di filezilla**


![langkah5](https://user-images.githubusercontent.com/103896829/202409088-716c7ffc-0f09-4f34-9857-2b455ca19104.png)



- Lalu ketikkan **systemctl restart proftpd.service**


![langkah6](https://user-images.githubusercontent.com/103896829/202409141-120c31dc-ea24-49a8-9e00-59453b4d8af9.png)
![langkah7](https://user-images.githubusercontent.com/103896829/202409151-e500749b-f190-4243-bf5b-9071b814c0bd.png)


- Lalu ketikkan **systemctl restart proftpd.service**

  ![langkah8](https://user-images.githubusercontent.com/103896829/202409198-f5b20256-5328-45e3-b552-d3212f63b355.png)




- Ketikkan **nano nama file.txt misalkan nano YULIA.txt**
setelah itu masukkan konten didalamnya dan simpan


![langkah9](https://user-images.githubusercontent.com/103896829/202409244-8f68df84-c592-493c-b50d-b91f4e4bbd86.png)
![langkah10](https://user-images.githubusercontent.com/103896829/202409250-a4224426-38f1-41db-812f-b596f28a2db5.png)

- Setelah tersimpan kita ketikkan **ls** untuk menampilkan file yang kita buat apakah ada filenya atau tidak
![langkah11](https://user-images.githubusercontent.com/103896829/202409292-11b944ee-de8d-4e62-9147-e8edbd261504.png)


- Lalu buka **Filezilla** ketikkan pada **host** itu adalah ip kita misalkan 192.168.1.10 dan **username** adalah username pada root home yaitu jika punya saya adalah yuliautsadmsistem dan isi passwordnya yaitu passsword linux kita dan isi **port** yaitu 21

![langkah12](https://user-images.githubusercontent.com/103896829/202409436-12452d81-ad00-4947-ae46-be0bdb5134cc.png)
![langkah13](https://user-images.githubusercontent.com/103896829/202409442-e94ca53e-bfae-4320-9236-13e52d5f3e37.png)


- lalu klik **Quickconnect** lalu jika status sukses berarti sukses untuk mengoneksikannya

![langkah14](https://user-images.githubusercontent.com/103896829/202409628-392c23ca-88ea-4622-81d5-1242111c2946.png)

- Pada Filezilla kita lihat terlebih dahulu pada bagian server apakah file yang kita buat pada linux terdapat disana dimana tadi kita membuat file yaitu Yulia.txt
![langkah9](https://user-images.githubusercontent.com/103896829/202409826-1afea327-a7fa-457f-86cb-12b947c1af40.png)

![langkah15](https://user-images.githubusercontent.com/103896829/202409903-79100ecd-5319-4047-94d4-90b6f8816c57.png)
![langkah16](https://user-images.githubusercontent.com/103896829/202409912-5c2c6562-6c9b-4fa8-bb44-caf37d6f1673.png)


- Jika sudah ada kita coba drag and drop memindahkan file kita ke linux dengan cara mendrag dari bagian kanan ke kiri,atau pada langkah sebelumnya terdapat nama file **YULIA.txt** jadi kita memindahkannya dari client ke  server yang terdapat file YULIA.txt.Jika berhasil maka akan muncul pop up Transfer Finished

![langkah17](https://user-images.githubusercontent.com/103896829/202409987-444944b3-1b14-4b63-9740-b8d61372491d.png)
![langkah18](https://user-images.githubusercontent.com/103896829/202409996-a8418419-725a-4095-b6d0-cb9![langkahppt](https://user-images.githubusercontent.com/103896829/202410011-a5b5619f-6a05-4c9d-827d-e5b527028062.png)
7efa578ca.png)

-Lalu kita cek apakah sudah terdapat filenya pada linux kita dengan mengetikkan **ls**


![langkahakhir](https://user-images.githubusercontent.com/103896829/202410054-aaf6f858-a400-4e11-95c5-54376d8b618f.png)
