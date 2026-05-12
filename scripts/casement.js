import { sel } from "./util/index.js";
import display from "./display.js";

export default function calculateCasement(input, sash) {
  let w = sel('#width__input');
  w = w? w.value: 0;
  let h = sel('#height__input');
  h = h? h.value: 0;
  let in_w = 0;
  let in_h = 0;
  let gw = 0;
  let gh = 0;
  let html = null;
  
  if (input == "width") {
    sash == 1? in_w = w - 70: in_w = (w - 110) / 2;
    gw = in_w - 130;
    html = `
      <tr>
        <td>Width</td>
        <td>${w}</td>
        <td>--</td>
      </tr>
      <tr>
        <td>Inner Width</td>
        <td>${in_w}</td>
        <td>--</td>
      </tr>
      <tr>
        <td>Glass Width</td>
        <td>${gw}</td>
        <td>--</td>
      </tr>
    `;
    sash == 2 ? html += `
      <tr>
        <td>Molium Placement</td>
        <td>${(w - 42) / 2}</td>
        <td>--</td>
      </tr>
    `: null;
  } else if (input == "height") {
    in_h = h - 70;
    gh = in_h - 130;
    html = `
      <tr>
        <td>Height</td>
        <td>${h}</td>
        <td>...</td>
      </tr>
      <tr>
        <td>Inner Height</td>
        <td>${in_h}</td>
        <td>--</td>
      </tr>
      <tr>
        <td>Glass Height</td>
        <td>${gh}</td>
        <td>--</td>
      </tr>
    `;
    sash == 2 ? html += `
      <tr>
        <td>Molium height</td>
        <td>${h - 60}</td>
        <td>--</td>
      </tr>
    `: null;
  } else {
    in_h = h - 70;
    sash == 1? in_w = w - 70: in_w = (w - 110) / 2;
    gh = in_h - 130;
    gw = in_w - 130;
    html = `
      <tr>
        <td>Width</td>
        <td>${w}</td>
        <td>--</td>
      </tr>
      <tr>
        <td>Inner Width</td>
        <td>${in_w}</td>
        <td>--</td>
      </tr>
      <tr>
        <td>Glass Width</td>
        <td>${gw}</td>
        <td>--</td>
      </tr>
      <tr>
        <td>Height</td>
        <td>${h}</td>
        <td>...</td>
      </tr>
      <tr>
        <td>Inner Height</td>
        <td>${in_h}</td>
        <td>--</td>
      </tr>
      <tr>
        <td>Glass Height</td>
        <td>${gh}</td>
        <td>--</td>
      </tr>
    `;
    sash == 2 ? html += `
      <tr>
        <td>Molium height</td>
        <td>${h - 60}</td>
        <td>--</td>
      </tr>
      <tr>
        <td>Molium Placement</td>
        <td>${(w - 42) / 2}</td>
        <td>--</td>
      </tr>
    `: null;
  }
  display(html);
}