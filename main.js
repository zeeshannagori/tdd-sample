import "./style.css";
import { sum } from "./calculator";

document.querySelector("#app").innerHTML = `
  <h1>TDD string calculator</h1>
  <div>
    <span id="result"></span>
    <form>
      <input type="text" placeholder="e.g., 1,2,3" />
      <button>Add</button>
    </form>
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
