// ----VARIABLE DEFINITIONS----
const bodyBgColor = '#232324',
  colorDisplay = document.getElementById('colorDisplay'),
  easyBtn = document.querySelector('#easyBtn'),
  h1 = document.querySelector('h1'),
  hardBtn = document.querySelector('#hardBtn'),
  messageDisplay = document.querySelector('#message'),
  resetButton = document.querySelector('#reset'),
  squares = document.querySelectorAll('.square');

// ----FUNCTION DEFINITIONS----

// Change color of all squares to clickedColor when match is found
const changeColors = function changeColors (color) {

  /*
   * Arguments: String
   * Returns: Void
   *
   * This function takes argument 'color' and is called when the correct
   * color has been picked. To give a visual indication that the correct
   * color was chosen, this function will change the color assigned to squares
   * to be the passed-in color.
   */

  // Loop through all squares
  for (const square of squares) {
    square.style.backgroundColor = color;
  }
};

// Utility function to generate random color string
const randomColor = function randomColor () {

  /*
   * Arguments: none
   * Returns: String
   *
   * This function constructs an RGB(x,x,x) string
   * to populate the color array created by generateRandomColors().
   */

  // Pick a "red" from 0-255
  const red = Math.floor(Math.random() * 256);
  // Pick a "green" from 0-255
  const green = Math.floor(Math.random() * 256);
  // Pick a "blue" from 0-255
  const blue = Math.floor(Math.random() * 256);

  // Return interpolated string
  return `rgb(${red}, ${green}, ${blue})`;
};

// Generate array of random color strings
const generateRandomColors = function generateRandomColors (num) {

  /*
   * Arguments: Int
   * Returns: Array
   *
   * This function constructs the colors array by calling randomColor()
   * which constructs the strings. It takes num as parameter to set how many
   * colors will be generated by randomColor() and then pushes each constructed
   * color string into the array.
   */

  // Make array
  const arr = [];

  // Repeat num times and push into array
  for (let index = 0; index < num; index++) {
    arr.push(randomColor());
  }

  return arr;
};

// Generate initial colors array for page-load
let colors = generateRandomColors(6);

// Utility function to assign colors to squares
const assignColors = function assignColors () {

  /*
   * Arguments: None
   * Returns: Void
   *
   * Assign color from 'color' array sequentially to each square in 'squares'
   */

  for (let index = 0; index < squares.length; index++) {
    // If-statement used to set display property for 3 or 6 squares
    if (colors[index]) {
      squares[index].style.backgroundColor = colors[index];

      // Set squares to block  to unhide after switching from easy-mode
      squares[index].style.display = 'block';
    } else {
      squares[index].style.display = 'none';
    }
  }
};

// Utility function to update colorDisplay.textContent
const updateColorDisplay = function updateColorDisplay (color) {

  /*
   * Arguments: Number (index position)
   * Returns: Void
   *
   * Update span colorDisplay with rgb string from colors array at passed index
   */
  colorDisplay.textContent = colors[color];
};

// Utility Function to pick the color which is to be guessed from color array
const pickColor = function pickColor () {

  /*
   * Arguments: None
   * Returns: Int
   *
   * Generate a random number between 0 and the length of the colors array
   * rounded down, to serve as the index position of the color to be guessed.
   */
  const random = Math.floor(Math.random() * colors.length);

  return random;
};

// Choose the color that has to be found
let pickedColor = pickColor();

// Utility Function to reset game state
const reset = function reset () {

  /*
   * Arguments: None
   * Returns: Void
   *
   * Reset game board when color found or when new mode is selected,
   * regenerate 'colors' array and pick a new color. Update text displays
   * to match.
   */
  // Generate new color array and assign to squares
  if (easyBtn.classList.contains('selected')) {
    colors = generateRandomColors(3);
  } else {
    colors = generateRandomColors(6);
  }
  assignColors();

  // Reset header background color
  h1.style.backgroundColor = 'steelblue';

  // Reset messageDisplay and resetBtn text
  messageDisplay.textContent = '';
  resetButton.textContent = 'New Colors';

  // Pick a new color to guess
  pickedColor = pickColor();

  // Reset colorDisplay to match picked color
  updateColorDisplay(pickedColor);
};

// Add resetButton functionality
resetButton.addEventListener('click', () => {
  reset();
});

// Utility function to assign eventListeners to 'squares'
const addSquareEventListener = function addSquareEventListener (index) {
  squares[index].addEventListener('click', () => {
    const clickedColor = squares[index].style.backgroundColor;

    // Compare clickedColor to pickedColor
    if (clickedColor === colors[pickedColor]) {
      messageDisplay.textContent = 'Correct!';
      // Change colors of all squares and headers to match
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
      // Adjust reset button text
      resetButton.textContent = 'Play Again?';
    } else {
      // Hide clicked square and adjust messageDisplay
      squares[index].style.backgroundColor = bodyBgColor;
      messageDisplay.textContent = 'Try Again';
    }
  });
};
// Add easyBtn functionality

easyBtn.addEventListener('click', () => {
  // Add 'selected' class to the button tag for styling
  easyBtn.classList.add('selected');
  hardBtn.classList.remove('selected');
  resetButton.textContent = 'New Colors';

  // Generate a new color array containing 3 colors, pick color and update
  colors = generateRandomColors(3);
  pickedColor = pickColor();
  updateColorDisplay(pickedColor);
  assignColors();
});

// Add hardBtn functionality
hardBtn.addEventListener('click', () => {
  // Add 'selected' class to the button tag for styling
  easyBtn.classList.remove('selected');
  hardBtn.classList.add('selected');
  resetButton.textContent = 'New Colors';

  // Generate a new color array containing 6 colors, pick color and update
  colors = generateRandomColors(6);
  pickedColor = pickColor();
  updateColorDisplay(pickedColor);
  assignColors();
});

// ----CORE GAME LOOP----

// Adjust colorDisplay span element's text to the color string to be found
updateColorDisplay(pickedColor);
// ColorDisplay.textContent = colors[pickedColor];

for (let index = 0; index < squares.length; index++) {
  // Add initial color to squares
  assignColors();
  // Squares[index].style.backgroundColor = colors[index];

  // Add event listener to each square
  squares[index] = addSquareEventListener(index);
  // Grab the color of clicked square
}
