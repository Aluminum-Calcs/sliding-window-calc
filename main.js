let btn = document.querySelector('#compute');
let width = document.querySelector('#width__input');
let height = document.querySelector('#height__input');

var track = null;
var jamb = null;
var lobster = null;
var topWidth = null;
btn.addEventListener('click', ()=> {
  console.log('clicked')
  if (!width.value) {
    width.classList.add('error');
  } else if (!height.value) {
    height.classList.add('error');
  } else {
    width.classList.remove('error');
    height.classList.remove('error');
    calculate();
  }
})

function calculate() {
  track = width.value;
  jamb = height.value - 23;
  lobster = jamb - 27;
  topWidth = (track - 166) / 2;
  glassWidth = topWidth + 18;
  glassHeight = lobster - 80;
  display();
}

function display() {
  document.querySelector('.answers').classList.add('show');
  document.querySelector('.track-output').textContent = track;
  document.querySelector('.jamb-output').textContent = jamb;
  document.querySelector('.lobster-output').textContent = lobster;
  document.querySelector('.top-output').textContent = topWidth;
  document.querySelector('.glass-width-output').textContent = glassWidth;
  document.querySelector('.glass-height-output').textContent = glassHeight;
  
}

let w_err = document.querySelector('.widthError');
let h_err = document.querySelector('.heightError');
setInterval(()=>{
  error();
}, 100);


function error() {
  width.addEventListener('keyup', ()=>{
    if (!width.value) {
      width.classList.add('error');
      w_err.textContent = 'Empty?'
    } else {
      if (width.value.length < 3) {
        width.classList.add('error');
        w_err.textContent = 'Is\'nt this too small?';
      } else if(width.value > 16000) {
        width.classList.add('error');
        w_err.textContent = 'That\'s way large than what we have (16,000 mm)';
      } else {
        width.classList.remove('error');
        w_err.textContent = '';
      }
    }
  })
  height.addEventListener('keyup', ()=>{
    if (!height.value) {
      height.classList.add('error');
      h_err.textContent = 'Empty?'
    } else {
      if (height.value.length < 3) {
        height.classList.add('error');
        h_err.textContent = 'Is\'nt this too small?';
      } else if(height.value > 16000) {
        height.classList.add('error');
        h_err.textContent = 'That\'s way large than what we have (16,000 mm)';
      } else {
        height.classList.remove('error');
        h_err.textContent = '';
      }
    }
  })
}
