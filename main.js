import "./style.css";
import { sum } from "./calculator";

document.querySelector("#app").innerHTML = `
  <div>
    <form>
      <input type="text" />
      <button>Add</button>
    </form>
    <span id="result"></span>
  </div>
`;

const form = document.querySelector("form");
const resultSpan = document.getElementById("result");

form.onsubmit = (event) => {
  event.preventDefault();

  const inputValue = form.querySelector("input").value;

  try {
    const result = sum(inputValue);
    resultSpan.textContent = `Result: ${result}`;
  } catch (error) {
    resultSpan.textContent = error.message;
  }
};
