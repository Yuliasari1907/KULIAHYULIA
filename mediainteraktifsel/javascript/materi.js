
  /** java script klik tujuan*/
  function petunjukpengerjaan(petunjukpengerjaan) {
    var x = document.getElementById(petunjukpengerjaan);
  
    if (x.className.indexOf("hilang") == -1) {
      x.className += " hilang";
    } else {
      x.className = x.className.replace("hilang", "");
    }
  }
  