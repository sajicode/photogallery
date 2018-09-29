let buttons = document.querySelectorAll('.open')
let close = document.getElementById('close');
let modal = document.getElementById('modal');
let images = document.querySelectorAll('.image');
let modalImg = document.getElementById('modal-img');
let time = document.getElementById("time");

// enlarge image - open modal
images.forEach(image => {
  if (image.classList.contains('image')) {
    image.addEventListener('click', function (e) {
      e.preventDefault();
      let currentImg = e.target.getAttribute("src");
      modalImg.setAttribute("src", currentImg);
      modal.style.display = 'block';
    });
  }
});

// close modal
close.addEventListener('click', function (e) {
  e.preventDefault();
  modal.style.display = 'none';
});

// get current year
let today = new Date().getFullYear();
time.innerHTML = `Copyright &copy; ${today}`