var hamburger = document.querySelector(".fa-bars");
  var sidebar = document.querySelector('.sidebar');
  var header = document.querySelector('#headerkiri');
  hamburger.addEventListener("click", function () {
  sidebar.classList.toggle('close');
  header.classList.toggle('close');
  });
  