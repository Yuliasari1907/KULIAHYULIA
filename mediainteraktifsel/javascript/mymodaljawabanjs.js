//HTML UNTUK JS DIBAWAH ATAU SOAL
// <center><h2 style="font-family:lucida sans; font-size:18px; color:black;" >Tabel Pengamatan</h2></center>
// <div style="overflow-x: auto">
//   <table class="table" border="3px" >
//     <thead class="thead" style=" background-color:#d48166; color:#000;">
//       <tr style=" color:#000;">
//         <th scope="col" style="font-family: lucida sans; font-size: 15px;">Percobaan</th>
//         <th scope="col" style="font-family: lucida sans; font-size: 15px;">Kawat Penghantar</th>
//         <th scope="col" style="font-family: lucida sans; font-size: 15px;">kompas Menyimpang ke arah</th> 

//       </tr>
//     </thead>
// <tbody>
// <tr style="background-color:#ffdead; color:#000">
//   <th scope="row" style="font-family: lucida sans; font-size: 15px;">1</th>
//   <td style="font-family: lucida sans; font-size: 15px;">Kawat Tegak lurus tanpa di aliri arus listrik</td>
//   <td style="font-family: lucida sans; font-size: 15px; align-items: center;"><select class="form-select w-65" id="K1">
//     <option value="">--pilih jawaban--</option>
//     <option value="TidakMenyimpang">Tidak Menyimpang</option>
//     <option value="Kanan">Kanan</option>
//     <option value="Kiri">Kiri</option>
//   </select>   </td>
// </tr> 
    
// <tr style="background-color:#ffdead; color:#000">
//   <th scope="row" style="font-family: lucida sans; font-size: 15px;">2</th>
//   <td style="font-family: lucida sans; font-size: 15px;">Kawat Tegak Lurus dialiri arus listrik dengan arah positif baterai sejajar dengan kutub utara kompas</td>
//   <td style="font-family: lucida sans; font-size: 15px; align-items: center;"><select class="form-select w-65" id="K2">
//     <option value="">--pilih jawaban--</option>
//     <option value="TidakMenyimpang">Tidak Menyimpang</option>
//     <option value="Kanan">Kanan</option>
//     <option value="Kiri">Kiri</option>
//   </select>   </td>

// </tr>
// <tr style="background-color:#ffdead; color:#000">
//   <th scope="row" style="font-family: lucida sans; font-size: 15px;">3</th>
//   <td style="font-family: lucida sans; font-size: 15px;">kawat tegak lurus dialiri arus listrik dengan arah positif baterai sejajar dengan kutub selatan kompas</td>
//   <td style="font-family: lucida sans; font-size: 15px; align-items: center;"><select class="form-select w-65" id="K3">
//     <option value="">--pilih jawaban--</option>
//     <option value="TidakMenyimpang">Tidak Menyimpang</option>
//     <option value="Kanan">Kanan</option>
//     <option value="Kiri">Kiri</option>
//   </select>   </td>

// </tr>
// </tbody>
// </table>
// <button  onclick="cekJawaban()" class="tombolnya">Cek Jawaban</button>
// <button onclick="reset()" class="tombolnyares">Coba Lagi</button>
// <br>
// <h2 style="font-family:lucida sans; font-size:16px; color:black;">Setelah selesai menjawab tabel pengamatan di atas, kemudian kamu diminta untuk memberikan kesimpulan, berikan kesimpulanmu pada kolom kosong dibawah ini !</h2>
// <center><h2 style="font-family:lucida sans; font-size:18px; color:black;" >Kesimpulan</h2></center>
// <textarea id="content2" cols="60" rows="8" name="isi" style="width: 100%; border:solid 3px black;"></textarea>







var video = document.getElementById("vidrf");
video.onended = function () {
  document.getElementById("penje").style.display = "inline-block";
  document.querySelector(".penjelasanku").className = document.querySelector(".penjelasanku").className.replace(" hilang", "");
  document.querySelector(".containerP").className = document.querySelector(".containerP").className.replace(" hilang", "");
};


function cekJawaban() {
  let a = document.getElementById("K1").value;
  let b = document.getElementById("K2").value;
  let c = document.getElementById("K3").value;

  if (a == "TidakMenyimpang") {
    document.getElementById("K1").style.color = "black";
    document.getElementById("K1").style.border = "3px solid green";
  } else {
    document.getElementById("K1").style.color = "red";
    document.getElementById("K1").style.border = "3px solid red";
  }

  if (b == "Kanan") {
    document.getElementById("K2").style.color = "black";
    document.getElementById("K2").style.border = "3px solid green";
  } else {
    document.getElementById("K2").style.color = "red";
    document.getElementById("K2").style.border = "3px solid red";
  }

  if (c == "Kiri") {
    document.getElementById("K3").style.color = "black";
    document.getElementById("K3").style.border = "3px solid green";
  } else {
    document.getElementById("K3").style.color = "red";
    document.getElementById("K3").style.border = "3px solid red";
  }
}

function reset() {
  document.getElementById("K1").value = "";
  document.getElementById("K2").value = "";
  document.getElementById("K3").value = "";
  document.getElementById("K1").style = "border: 0,5 solid";
  document.getElementById("K2").style = "border: 0,5 solid";
  document.getElementById("K3").style = "border: 0,5 solid";
}