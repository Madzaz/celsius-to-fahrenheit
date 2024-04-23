const textBox = document.getElementById("textBox");
const selectCelsius = document.getElementById("selectCelsius");
const selectFahrenheit = document.getElementById("selectFahrenheit");
const result = document.getElementById("result");

let temp;

function convert() {
  if (selectCelsius.checked) {
    temp = parseInt(textBox.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(1) + " F";
  } else if (selectFahrenheit.checked) {
    temp = parseInt(textBox.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed(1) + " C";
  } else {
    result.textContent = "Select a unit";
  }
}
