import { sel } from "./util/index.js";
import { checkForErrors } from "./main.js";

document.addEventListener('DOMContentLoaded', () => getType())

let windowType = null;

function getType() {
  // Listen for type selection
  let inputs = sel("form .types label input", true);
  inputs.forEach(input => {
    input.addEventListener('click', e => {
      // Store type
      windowType = e.target.id;
    })
  });

  // listen for calculate to be clicked
  sel("form #compute").addEventListener('click', (e) => {
    e.preventDefault();
    checkForErrors(windowType);
  })
}