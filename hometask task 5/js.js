let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');
img1.hidden = true;
img2.hidden = false;
setInterval(() => {
  if ((img1.hidden = true)) {
    img1.hidden = false;
  } else img1.hidden = false;
  if ((img2.hidden = true)) {
    img2.hidden = false;
  } else img2.hidden = false;
}, 3000);

console.log(document.querySelector('hr:nth-child(1)'));
