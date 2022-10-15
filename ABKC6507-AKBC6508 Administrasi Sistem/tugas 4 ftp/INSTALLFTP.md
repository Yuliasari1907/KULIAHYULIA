#TUGAS 3 INSTALL FTP

####Langkah-langkah dan Konfigurasi Remote Server
By : Yulia Sari

- Pertama buka virtul box lalu buka debian yang sudah kita install

![langkah1](langkah1.png)

- Lalu ketikakkn terminal agar masuk kedalam terminal linux

![langkah2](langkah2.png)


- Lalu ketikkan su pada linux agar masuk ke root
![langkah3](langkah3.png)

- lalu instal ftp terlebih dahulu dengan **apt-get install Proftpd**

  ![langkah4](langkah4.png)


-  Setelah itu ketikkan **nano /etc/proftpd/proftpd.conf** setelah itu pada bagian **default server on dan showsymlink on kita hapus hastag atau #** dan hastag port 21 jika hastagnya belum terhapus lalu simpan dan ingat jika nanti port 21 yang akan kita masukakan kedalam port **di filezilla**

![langkah5](langkah5.png)



- Lalu ketikkan **systemctl restart proftpd.service**
![langkah6](langkah6.png)
![langkah6](langkah7.png)



- Lalu ketikkan **systemctl restart proftpd.service**

   ![langkah8](langkah8.png)



- Ketikkan **nano nama file.txt misalkan nano YULIA.txt**
setelah itu masukkan konten didalamnya dan simpan

![langkah9](langkah9.png)
![langkah10](langkah10.png)


- Setelah tersimpan kita ketikkan **ls** untuk menampilkan file yang kita buat apakah ada filenya atau tidak
![langkah11](langkah11.png)

- Lalu buka **Filezilla** ketikkan pada **host** itu adalah ip kita misalkan 192.168.1.10 dan **username** adalah username pada root home yaitu jika punya saya adalah yuliautsadmsistem dan isi passwordnya yaitu passsword linux kita dan isi **port** yaitu 21

![langkah12](langkah12.png)
![langkah13](langkah13.png)

- lalu klik **Quickconnect** lalu jika status sukses berarti sukses untuk mengoneksikannya
![langkah14](langkah14.png)

- Pada Filezilla kita lihat terlebih dahulu pada bagian server apakah file yang kita buat pada linux terdapat disana dimana tadi kita membuat file yaitu Yulia.txt
![langkah9](langkah9.png)
![langkah15](langkah15.png)
![langkah16](langkah16.png)

- Jika sudah ada kita coba drag and drop memindahkan file kita ke linux dengan cara mendrag dari bagian kanan ke kiri,atau pada langkah sebelumnya terdapat nama file **YULIA.txt** jadi kita memindahkannya dari client ke  server yang terdapat file YULIA.txt.Jika berhasil maka akan muncul pop up Transfer Finished
######![Langkah17](langkah17.png)
![Langkah17](langkah18.png)
![Langkah](langkahppt.png)


-Lalu kita cek apakah sudah terdapat filenya pada linux kita dengan mengetikkan **ls**
![Langkahakhir](langkahakhir.png)

