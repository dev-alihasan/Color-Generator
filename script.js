document.addEventListener("DOMContentLoaded", function () {
  const colorDisplay = document.getElementById("color-display");
  const generateButton = document.getElementById("generate-btn");

  function generateRandomColor() {
    const randomColor =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    return randomColor;
  }

  generateButton.addEventListener("click", function () {
    const randomColor = generateRandomColor();
    colorDisplay.textContent = randomColor;
    document.body.style.backgroundColor = randomColor; // Optionally change background color of the body
  });

  // Initial color generation
  generateButton.click();
});
