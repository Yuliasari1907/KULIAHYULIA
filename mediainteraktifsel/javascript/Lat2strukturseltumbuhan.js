	//cek jawaban isian
	function cekJawaban(){
        let isi1 = document.getElementById("isian1").value.toLowerCase();
        let jawaban1 = new RegExp('prokariotik');
        let result1 = jawaban1.test(isi1);
    //isian 1
        if(result1 == true){
            
            document.getElementById("cekIsian1").style.color = "green";
            document.getElementById("isian1").style.border = "2px solid green";
            document.getElementById("isian1").style.backgroundColor = "green";
            document.getElementById("isian1").style.color ="black";
        } else{
            
            document.getElementById("cekIsian1").style.color = "red";
            document.getElementById("isian1").style.border = "2px solid red";
            document.getElementById("isian1").style.background = "red";
            document.getElementById("isian1").style.color ="white";
        }
    //isian 2
        let isi2 = document.getElementById("isian2").value.toLowerCase();
        let jawaban2 = new RegExp('dinding sel');
        let result2 = jawaban2.test(isi2);
    
        if(result2 == true){
            
            document.getElementById("cekIsian2").style.color = "green";
            document.getElementById("isian2").style.border = "2px solid green";
            document.getElementById("isian2").style.background = "green";
            document.getElementById("isian2").style.color ="white";
        } else{
            
            document.getElementById("cekIsian2").style.color = "red";
            document.getElementById("isian2").style.border = "2px solid red";
            document.getElementById("isian2").style.background = "red";
            document.getElementById("isian2").style.color ="white";
        }
    //isian 3
        let isi3 = document.getElementById("isian3").value.toLowerCase();
        let jawaban3 = new RegExp('mikron ');
        let result3 = jawaban3.test(isi3);
    
        if(result3 == true){
            
            document.getElementById("cekIsian3").style.color = "green";
            document.getElementById("isian3").style.border = "2px solid green"
            document.getElementById("isian3").style.background = "green";
            document.getElementById("isian3").style.color ="black";
        } else{
            
            document.getElementById("cekIsian3").style.color = "red";
            document.getElementById("isian3").style.border = "2px solid red";
            document.getElementById("isian3").style.background = "red";
            document.getElementById("isian3").style.color ="white";
         
          
        }
    //isian 4
        let isi4 = document.getElementById("isian4").value.toLowerCase();
        let jawaban4 = new RegExp('amiloplas');
        let result4 = jawaban4.test(isi4);
    
        if(result4 == true){
            
            document.getElementById("cekIsian4").style.color = "green";
            document.getElementById("isian4").style.border = "2px solid green";
            document.getElementById("isian4").style.background = "green";
            document.getElementById("isian4").style.color ="black";
        } else{
            
            document.getElementById("cekIsian4").style.color = "red";
            document.getElementById("isian4").style.border = "2px solid red";
            document.getElementById("isian4").style.background = "red";
            document.getElementById("isian4").style.color ="white";
        }
    
        let isi5 = document.getElementById("isian5").value.toLowerCase();
        let jawaban5 = new RegExp('kromoplas');
        let result5 = jawaban5.test(isi5);
    
        if(result5 == true){
            
            document.getElementById("cekIsian5").style.color = "green";
            document.getElementById("isian5").style.border = "2px solid green";
            document.getElementById("isian5").style.backgroundColor = "green";
            document.getElementById("isian5").style.color ="black";
        } else{
            
            document.getElementById("cekIsian5").style.color = "red";
            document.getElementById("isian5").style.border = "2px solid red";
            document.getElementById("isian5").style.backgroundColor = "red";
            document.getElementById("isian5").style.color ="white";
        }
      }
      function reset(){
        // document.getElementsByClassName('ini')[0].value = "";
        document.getElementById("isian1").value = "";
        document.getElementById("isian2").value = "";
        document.getElementById("isian3").value = "";
        document.getElementById("isian4").value = "";
        document.getElementById("isian5").value = "";
        document.getElementById("isian1").style="border: 0,5 solid";
        document.getElementById("isian2").style="border: 0,5 solid";
        document.getElementById("isian3").style="border: 0,5 solid";
        document.getElementById("isian4").style="border: 0,5 solid";
        document.getElementById("isian5").style="border: 0,5 solid";
      }