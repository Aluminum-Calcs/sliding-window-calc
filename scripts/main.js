import { sel } from "./util/index.js";
import display from "./display.js";
import calculateCasement from "./casement.js";
import calculateFrameless from "./frameless.js";
import calculateSliding from "./sliding.js";

let inputWidth = sel('#width__input');
let inputHeight = sel('#height__input');

export function checkForErrors(windowType = null, sashes = null) {
  if (windowType == null) {
    sel("form fieldset.windowType").classList.add('error');
    return;
  }else sel("form fieldset.windowType").classList.remove('error');
  
  if (windowType != "sliding" && typeof sashes != "number") {
    sel("form fieldset.sash-field").classList.add('error');
    return;
  } sel("form fieldset.sash-field").classList.remove('error');
  console.log("error removed");


  if (!inputWidth.value) {
    inputWidth.closest('.field').classList.add('error');
    if (inputHeight.value) calculate("height", windowType, sashes);
  } else if (!inputHeight.value) {
    inputHeight.closest('.field').classList.add('error');
    if (inputWidth.value) calculate("width", windowType, sashes);
  } else {
    inputWidth.closest('.field').classList.remove('error');
    inputHeight.closest('.field').classList.remove('error');
    calculate("all", windowType, sashes);
  }
}

function calculate(input = "all", windowType, sashes) {
  console.log(input, windowType);
  if (windowType == "sliding") calculateSliding(input);

  if (windowType == "casement") calculateCasement(input, sashes);

  if (windowType == "frameless") calculateFrameless(input, sashes);
}


setInterval(()=>{
  error();
}, 100);


function error() {
  let width__field = inputWidth.closest('.field');
  let height__field = inputHeight.closest('.field');
  let w_err = document.querySelector('.widthError');
  let h_err = document.querySelector('.heightError');

  inputWidth.addEventListener('keyup', ()=>{
    if (!inputWidth.value) {
      width__field.classList.add('error');
      w_err.textContent = 'Empty?'
    } else {
      if (inputWidth.value.length < 3) {
        width__field.classList.add('error');
        w_err.textContent = 'Is\'nt this too small?';
      } else if(inputWidth.value > 16000) {
        width__field.classList.add('error');
        w_err.textContent = 'That\'s way large than what we have (16,000 mm)';
      } else {
        width__field.classList.remove('error');
        w_err.textContent = '';
      }
    }
  })
  inputHeight.addEventListener('keyup', ()=>{
    if (!inputHeight.value) {
      height__field.classList.add('error');
      h_err.textContent = 'Empty?'
    } else {
      if (inputHeight.value.length < 3) {
        height__field.classList.add('error');
        h_err.textContent = 'Is\'nt this too small?';
      } else if(inputHeight.value > 16000) {
        height__field.classList.add('error');
        h_err.textContent = 'That\'s way large than what we have (16,000 mm)';
      } else {
        height__field.classList.remove('error');
        h_err.textContent = '';
      }
    }
  })
}
