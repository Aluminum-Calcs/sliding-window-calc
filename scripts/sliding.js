import { sel } from "./util/index.js";
import display from "./display.js";

export default function calculateSliding(input) {
  let w = sel('#width__input');
  w = w? w.value: 0;
  let h = sel('#height__input');
  h = h? h.value: 0;
  let track = 0;
  let jamb = 0;
  let lobster = 0;
  let top = 0;
  let gw = 0;
  let gh = 0;
  let html = null;

  if (input == "width") {
    track = w;
    top = (track - 166) / 2;
    gw = top + 18;
    html = `
      <tr>
        <td>Track</td>
        <td>${track}</td>
        <td>--</td>
      </tr>
      <tr>
        <td>Top</td>
        <td>${top}</td>
        <td>--</td>
      </tr>
      <tr>
        <td>Glass Width</td>
        <td>${gw}</td>
        <td>--</td>
      </tr>
    `;
  } else if (input == "height") {
    jamb = h - 23;
    lobster = jamb - 27;
    gh = lobster - 80;
    html = `
      <tr>
        <td>Side Jamb</td>
        <td>${jamb}</td>
        <td>...</td>
      </tr>
      <tr>
        <td>Lock Stile</td>
        <td>${lobster}</td>
        <td>--</td>
      </tr>
      <tr>
        <td>Interlock</td>
        <td>${lobster}</td>
        <td>--</td>
      </tr>
      <tr>
        <td>Glass Height</td>
        <td>${gh}</td>
        <td>--</td>
      </tr>
    `;
  } else {
    track = w;
    jamb = h - 23;
    lobster = jamb - 27;
    top = (track - 166) / 2;
    gw = top + 18;
    gh = lobster - 80;
    html = `
      <tr>
        <td>Track</td>
        <td>${track}</td>
        <td>--</td>
      </tr>
      <tr>
        <td>Side Jamb</td>
        <td>${jamb}</td>
        <td>...</td>
      </tr>
      <tr>
        <td>Lock Stile</td>
        <td>${lobster}</td>
        <td>--</td>
      </tr>
      <tr>
        <td>Interlock</td>
        <td>${lobster}</td>
        <td>--</td>
      </tr>
      <tr>
        <td>Top</td>
        <td>${top}</td>
        <td>--</td>
      </tr>
      <tr>
        <td>Glass Height</td>
        <td>${gh}</td>
        <td>--</td>
      </tr>
      <tr>
        <td>Glass Width</td>
        <td>${gw}</td>
        <td>--</td>
      </tr>
      
    `;
  }
  display(html);
}