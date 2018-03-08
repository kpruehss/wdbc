const changeColors = function changeColors (color) {
    // Loop through all squares
    for (square of squares) {
      square.style.backgroundColor = color;
    }
  },
  pickedColorFunc = function pickedColorFunc () {
    const random = Math.floor(Math.random() * colors.length);

    return random;
  };
let colors = [
    'rgb(255, 0, 0)',
    'rgb(255, 255, 0)',
    'rgb(0, 255, 0)',
    'rgb(0, 255, 255)',
    'rgb(0, 0, 255)',
    'rgb(255, 0, 255)'
  ],
  pickedColor = pickedColorFunc();

const colorDisplay = document.getElementById('colorDisplay'),
  messageDisplay = document.querySelector('#message'),
  squares = document.querySelectorAll('.square');

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
