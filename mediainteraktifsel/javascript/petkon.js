function petkon() {
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("petkon");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("X")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  };

  // When the user clicks on <script> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };
}


function petkon2() {
  var modal = document.getElementById("myModal2");

  // Get the button that opens the modal
  var btn = document.getElementById("petkon2");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close2")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  };

  // When the user clicks on <script> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };
}