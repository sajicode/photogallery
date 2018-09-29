let button = document.querySelectorAll('.open');
let close = document.getElementById('close');
let modal = document.getElementById('modal');

button.addEventListener('click', function (e) {
  e.preventDefault();
  modal.style.display = 'block';
});

close.addEventListener('click', function (e) {
  e.preventDefault();
  modal.style.display = 'none';
});