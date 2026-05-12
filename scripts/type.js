import { sel } from "./util/index.js";
import { checkForErrors } from "./main.js";

document.addEventListener('DOMContentLoaded', () => getType())

let windowType = null;
let sashes = 2;

function getType() {
  // Listen for type selection
  let inputs = sel("fieldset.windowType .types label input", true);
  inputs.forEach(input => {
    input.checked? windowType = input.id: null;
    input.addEventListener('click', e => {
      // Store type
      windowType = e.target.id;
      if (windowType == 'casement' || windowType == 'frameless') {
        sel(".sash-field").classList.add("show");
      } else {
        sel(".sash-field").classList.remove("show");
      }
    })
  });
  
  //listen for sash selection
  let sashInputs = sel("fieldset.sash-field .types label input", true);
  sashInputs.forEach(input => {
    input.checked? sashes = parseInt(input.id.slice(-1,input.length)): null;
    input.addEventListener('click', e => {
      // Store sash number
      sashes = parseInt(e.target.id.slice(-1,e.target.id.length));
      console.log(sashes);
    })
  });
  

  // listen for calculate to be clicked
  sel("form #compute").addEventListener('click', (e) => {
    e.preventDefault();
    checkForErrors(windowType, sashes);
  })
}