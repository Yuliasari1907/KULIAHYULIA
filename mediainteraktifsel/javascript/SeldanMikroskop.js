<script>
            document.getElementById("cek_jawaban").addEventListener("click", function(){
                    var jawaban = document.querySelector('input[name="Soal1"]:checked').value;
                    var jawaban2 = document.getElementById("Soal2").value;
                    var skor = 0;
                    if(jawaban == "a"){
                        skor = skor + 50;
                    }
                    if (jawaban2.toLowerCase() == "hardware"){
                        skor = skor + 50;
                    }

                    alert ("skor anda adalah : " + skor);

                });

            </script>