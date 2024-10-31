import "./hello-world.scss";
import axios from "axios";

export default class SomeButton {
  id = 1;
  render() {
    const button = document.createElement("button");
    button.innerHTML = "Click me";
    const body = document.querySelector("body");
    button.classList.add("some-button");

    button.onclick = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${this.id}`,
        );
        this.id = Math.max((this.id + 1) % 5, 1);
        const p = document.createElement("h4");
        p.innerHTML = `Title: ${response.data.title}<br>Body: ${response.data.body}`;
        p.classList.add("some-button-text");

        body.appendChild(p);
      } catch (error) {
        console.error("Axios error: ", error);
      }
    };

    body.appendChild(button);
  }
}
