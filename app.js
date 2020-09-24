const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;

// set first image opacity 
imgs[0].style.opacity = opacity


imgs.forEach((img) => img.addEventListener('click', imgClick));

function imgClick(e) {
  // reset opacity of images every time this function runs
  imgs.forEach((img) => {
    img.style.opacity = 1;
  });

  current.src = e.target.src; // change src of image to src of clicked image
  current.classList.add('fade-in'); // add fade in class
  e.target.style.opacity = opacity; // change opacity to opacity var
  setTimeout(() => {
    current.classList.remove('fade-in');
  }, 500);
}
