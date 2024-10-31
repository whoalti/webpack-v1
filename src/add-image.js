import Kiwi from "./kiwi.jpg";

export default function addImage() {
  const img = document.createElement("img");
  img.alt = "Kiwi";
  img.width = 300;
  img.src = Kiwi;
  const body = document.querySelector("body");
  body.appendChild(img);
}
