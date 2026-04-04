let btn = document.querySelector('#compute');
let width = document.querySelector('#width__input');
let height = document.querySelector('#height__input');

var track = null;
var jamb = null;
var lobster = null;
var topWidth = null;
btn.addEventListener('click', (e) => {
  e.preventDefault();
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
  let temp = document.querySelector('#table');
  temp = temp.content;
  let clone = document.importNode(temp, true);

  clone.querySelector('.track').textContent = track;
  clone.querySelector('.side-jamb').textContent = jamb;
  clone.querySelector('.lock-stile').textContent = lobster;
  clone.querySelector('.interlock').textContent = lobster;
  clone.querySelector('.top').textContent = topWidth;
  clone.querySelector('.g-width').textContent = glassWidth;
  clone.querySelector('.g-height').textContent = glassHeight;
  
  let results = document.querySelector('.results');
  results.appendChild(clone);
  results.classList.add('show');
}

setInterval(()=>{
  error();
}, 100);


function error() {
  let width__field = width.closest('.field');
  let height__field = height.closest('.field');
  let w_err = document.querySelector('.widthError');
  let h_err = document.querySelector('.heightError');

  width.addEventListener('keyup', ()=>{
    if (!width.value) {
      width__field.classList.add('error');
      w_err.textContent = 'Empty?'
    } else {
      if (width.value.length < 3) {
        width__field.classList.add('error');
        w_err.textContent = 'Is\'nt this too small?';
      } else if(width.value > 16000) {
        width__field.classList.add('error');
        w_err.textContent = 'That\'s way large than what we have (16,000 mm)';
      } else {
        width__field.classList.remove('error');
        w_err.textContent = '';
      }
    }
  })
  height.addEventListener('keyup', ()=>{
    if (!height.value) {
      height__field.classList.add('error');
      h_err.textContent = 'Empty?'
    } else {
      if (height.value.length < 3) {
        height__field.classList.add('error');
        h_err.textContent = 'Is\'nt this too small?';
      } else if(height.value > 16000) {
        height__field.classList.add('error');
        h_err.textContent = 'That\'s way large than what we have (16,000 mm)';
      } else {
        height__field.classList.remove('error');
        h_err.textContent = '';
      }
    }
  })
}
