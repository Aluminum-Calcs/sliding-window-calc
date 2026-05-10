import { sel } from "./util/index.js";

let inputWidth = sel('#width__input');
let inputHeight = sel('#height__input');

let sliding = {
  track: 0,
  jamb: 0,
  lobster: 0,
  top: 0,
  gw: 0,
  gh: 0
}
let casement = {
  width: 0,
  height: 0,
  in_w: 0,
  in_h: 0
}
let frameless = {
  width: 0,
  height: 0,
  in_w: 0,
  in_h: 0
}

export function checkForErrors(windowType = null) {
  if (windowType == null) {
    sel("form fieldset").classList.add('error');
    return;
  }else sel("form fieldset").classList.remove('error');


  if (!inputWidth.value) {
    width.classList.add('error');
    if (height.value) calculate("height", windowType);
  } else if (!height.value) {
    height.classList.add('error');
    if (inputWidth.value) calculate("width", windowType);
  } else {
    width.classList.remove('error');
    height.classList.remove('error');
    calculate("all", windowType);
  }
}

function calculate(type = "all") {
  if (type == "all") {
    track = inputWidth.value;
    jamb = height.value - 23;
    lobster = jamb - 27;
    topWidth = (track - 166) / 2;
    glassWidth = topWidth + 18;
    glassHeight = lobster - 80;
    display();
  } else if (type == "width") {
    track = inputWidth.value;
    topWidth = (track - 166) / 2;
    glassWidth = topWidth + 18;
    display(type);
  } else if (type == "height") {
    jamb = height.value - 23;
    lobster = jamb - 27;
    glassHeight = lobster - 80;
    display(type)
  }
}

function display(type = "all") {
  let temp = document.querySelector('template#table');
  temp = temp.content;
  let clone = document.importNode(temp, true);
  if (type == "all") {
    clone.querySelector('tbody').innerHTML = `
      <tr>
        <td>Track</td>
        <td class="track">${track}</td>
        <td class="track-price">5000</td>
      </tr>
      <tr>
        <td>Side Jamb</td>
        <td class="side-jamb">${jamb}</td>
        <td class="side-jamb-price">5000</td>
      </tr>
      <tr>
        <td>Top</td>
        <td class="top">${topWidth}</td>
        <td class="top-price">5000</td>
      </tr>
      <tr>
        <td>Lock-stile</td>
        <td class="lock-stile">${lobster}</td>
        <td class="lock-stile-price">5000</td>
      </tr>
      <tr>
        <td>Interlock</td>
        <td class="interlock">${lobster}</td>
        <td class="interlock-price">5000</td>
      </tr>
      <tr>
        <td>Glass Width</td>
        <td class="g-width">${glassWidth}</td>
        <td class="g-width-price">5000</td>
      </tr>
      <tr>
        <td>Glass Height</td>
        <td class="g-height">${glassHeight}</td>
        <td class="g-height-price">5000</td>
      </tr>
    `;
  } else if (type == "width") {
    clone.querySelector('tbody').innerHTML = `
    <tr>
      <td>Track</td>
      <td class="track">${track}</td>
      <td class="track-price">5000</td>
    </tr>
    <tr>
      <td>Top</td>
      <td class="top">${topWidth}</td>
      <td class="top-price">5000</td>
    </tr>
    <tr>
    <tr>
      <td>Glass Width</td>
      <td class="g-width">${glassWidth}</td>
      <td class="g-width-price">5000</td>
    </tr>
    `;
    
  } else if (type == "height") {
    clone.querySelector('tbody').innerHTML = `
      <tr>
        <td>Side Jamb</td>
        <td class="side-jamb">${jamb}</td>
        <td class="side-jamb-price">5000</td>
      </tr>
      <tr>
        <td>Lock-stile</td>
        <td class="lock-stile">${lobster}</td>
        <td class="lock-stile-price">5000</td>
      </tr>
      <tr>
        <td>Interlock</td>
        <td class="interlock">${lobster}</td>
        <td class="interlock-price">5000</td>
      </tr>
      <tr>
        <td>Glass Height</td>
        <td class="g-height">${glassHeight}</td>
        <td class="g-height-price">5000</td>
      </tr>
    `;
    
  }
  
  let results = document.querySelector('.results');
  results.innerHTML = '';
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
