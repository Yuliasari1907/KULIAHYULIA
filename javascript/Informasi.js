function profil(profil) {
  var x = document.getElementById(profil);

  if (x.className.indexOf("hilang") == -1) {
    x.className += " hilang";
  } else {
    x.className = x.className.replace("hilang", "");
  }
}
function petunjuk(petunjuk) {
  var x = document.getElementById(petunjuk);

  if (x.className.indexOf("sembunyi") == -1) {
    x.className += " sembunyi";
  } else {
    x.className = x.className.replace("sembunyi", "");
  }
}
function dapus(dapus) {
  var x = document.getElementById(dapus);

  if (x.className.indexOf("pergi") == -1) {
    x.className += "pergi";
  } else {
    x.className = x.className.replace("pergi", "");
  }
}

