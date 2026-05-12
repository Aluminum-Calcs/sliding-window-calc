import { sel } from "./util/index.js";
import display from "./display.js";

export default function calculateFrameless(input, sash = 1, matterTransom = false) {
  let w = sel('#width__input');
  w = w? (w.value - 50): 0;
  let h = sel('#height__input');
  h = h? (h.value - 30): 0;
  let th;// The transom variable for non mattered height
  let in_w = 0;
  let in_h = 0;
  let gw = 0;
  let gh = 0;
  let html = null;
  
  if (input == "width") {
    sash == 1? in_w = w - 40: in_w = (w - 60) / 2;
    gw = in_w - 20;
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
        <td>${(w - 55) / 2}</td>
        <td>--</td>
      </tr>
    `: null;
  } else if (input == "height") {
    th = matterTransom? h - (55*2): h;
    in_h = th - 85;
    gh = in_h - 15;
    html = `
      <tr>
        <td>Height</td>
        <td>${th}</td>
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
        <td>${th - 110}</td>
        <td>--</td>
      </tr>
    `: null;
  } else {
    th = matterTransom? h - (55*2): h;
    in_h = th - 85;
    sash == 1? in_w = w - 40: in_w = (w - 60) / 2;
    gh = in_h - 15;
    gw = in_w - 20;
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
        <td>${th}</td>
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
        <td>${th - 110}</td>
        <td>--</td>
      </tr>
      <tr>
        <td>Molium Placement</td>
        <td>${(w - 55) / 2}</td>
        <td>--</td>
      </tr>
    `: null;
  }
  display(html);
}