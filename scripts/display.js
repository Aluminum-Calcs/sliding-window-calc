import { sel } from "./util/index.js";

export default function display(html) {
  let temp = document.querySelector('template#table');
  temp = temp.content;
  let clone = document.importNode(temp, true);
  if (html != null) {
    clone.querySelector('tbody').innerHTML = html;
  }
  
  let results = document.querySelector('.results');
  results.innerHTML = '';
  results.appendChild(clone);
  results.classList.add('show');
}