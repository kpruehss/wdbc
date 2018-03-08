const colorDisplay = document.getElementById('colorDisplay'),
  messageDisplay = document.querySelector('#message'),
  squares = document.querySelectorAll('.square');

/*
 * Const colors = [
 *   'rgb(255, 0, 0)',
 *   'rgb(255, 255, 0)',
 *   'rgb(0, 255, 0)',
 *   'rgb(0, 255, 255)',
 *   'rgb(0, 0, 255)',
 *   'rgb(255, 0, 255)'
 * ];
 */
const randomColor = function randomColor () {
  // Pick a "red" from 0-255
  const red = Math.floor(Math.random() * 256);
  // Pick a "green" from 0-255
  const green = Math.floor(Math.random() * 256);
  // Pick a "blue" from 0-255
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
};
const changeColors = function changeColors (color) {
    // Loop through all squares
    for (const square of squares) {
      square.style.backgroundColor = color;
    }
  },
  generateRandomColors = function generateRandomColors (num) {
    // Make array
    const arr = [];
    // Repeat num times

    for (let i = 0; i < num; i++) {
      arr.push(randomColor());
    }

    return arr;
  };

const colors = generateRandomColors(6);

const pickedColorFunc = function pickedColorFunc () {
    const random = Math.floor(Math.random() * colors.length);

    return random;
  },
  pickedColor = pickedColorFunc();

colorDisplay.textContent = colors[pickedColor];

for (square in squares) {
  // Add initial color to squares
  squares[square].style.backgroundColor = colors[square];
  // Add event listener to each square
  squares[square].addEventListener('click', function () {
    // Grab the color of clicked square
    const clickedColor = this.style.backgroundColor;
    // Compare color to clickedColor

    if (clickedColor === colors[pickedColor]) {
      messageDisplay.textContent = 'Correct!';
      changeColors(clickedColor);
    } else {
      this.style.backgroundColor = '#232323';
      messageDisplay.textContent = 'Try Again';
    }
  });
}
