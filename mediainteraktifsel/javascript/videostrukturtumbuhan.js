
//video bawang
const video1 = document.querySelector(".video1");
var video1_3 = document.getElementById("video1_3");

function setCurTime1_3(X){
    if(X == 1){
        video1_3.currentTime = 0;
    }else if(X == 2){
        video1_3.currentTime = 8;
    }else if(X == 3){
        video1_3.currentTime = 17;
    }else if (X == 4) {
    video1_3.currentTime = 47;
  }
}
