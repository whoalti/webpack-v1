import Kiwi from "./kiwi.jpg";
import altText from "./altText.txt";

export default function addImage() {
  const img = document.createElement("img");
  img.alt = altText;
  img.width = 300;
  img.src = Kiwi;
  const body = document.querySelector("body");
  body.appendChild(img);
  body.append(document.createElement("br"));
}
