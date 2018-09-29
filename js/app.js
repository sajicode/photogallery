let buttons = document.querySelectorAll('.open')
let close = document.getElementById('close');
let modal = document.getElementById('modal');
let images = document.querySelectorAll('.image');
let modalImg = document.getElementById('modal-img')


// button.addEventListener('click', function (e) {
//   e.preventDefault();
//   modal.style.display = 'block';
// });

// figures.forEach(figure => {
//   figure.addEventListener('click', (e) => {
//     e.preventDefault();
//   })
// })

images.forEach(button => {
  if (button.classList.contains('image')) {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      let currentImg = e.target.getAttribute("src");
      // images.forEach(image => {
      //   let x = image.getAttribute("src");
      //   console.log(x);
      // })
      modalImg.setAttribute("src", currentImg);
      modal.style.display = 'block';
    });
  }
});

close.addEventListener('click', function (e) {
  e.preventDefault();
  modal.style.display = 'none';
});