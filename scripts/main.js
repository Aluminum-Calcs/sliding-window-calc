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
    if (height.value) calculate("height");
  } else if (!height.value) {
    height.classList.add('error');
    if (width.value) calculate("width");
  } else {
    width.classList.remove('error');
    height.classList.remove('error');
    calculate();
  }
})

function calculate(type = "all") {
  if (type == "all") {
    track = width.value;
    jamb = height.value - 23;
    lobster = jamb - 27;
    topWidth = (track - 166) / 2;
    glassWidth = topWidth + 18;
    glassHeight = lobster - 80;
    display();
  } else if (type == "width") {
    track = width.value;
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
