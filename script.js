// Part 2: JavaScript Functions — Scope, Parameters & Return Values

// Global variable
let globalMessage = "Global scope message";

// Function with parameters and return value
function calculateSum(a, b) {
  let result = a + b; // Local scope variable
  document.getElementById("resultText").textContent = `The sum is: ${result}`;
  return result;
}

// Function demonstrating scope
function showScope() {
  let localMessage = "This is a local variable";
  console.log(globalMessage); // Accessible
  console.log(localMessage); // Accessible only here
}

// Part 3: Combining CSS Animations with JavaScript

const animateBtn = document.getElementById("animateBtn");
const animatedBox = document.getElementById("animatedBox");

// Add event listener to trigger animation
animateBtn.addEventListener("click", () => {
  animatedBox.classList.toggle("animate");
});

// Toggle box color
function toggleBoxColor() {
  animatedBox.classList.toggle("toggleColor");
}
