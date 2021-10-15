const screen = document.getElementById("screen");
const keys = document.querySelectorAll("#keypad .key");
const operators = ["+", "-", "*", "/"];

keys.forEach((key) => {
  key.addEventListener("click", () => {
    screen.innerHTML += key.innerHTML;
  });
});
