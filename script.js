let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

function calculatePercentage() {
  try {
    display.value = eval(display.value) / 100;
  } catch (error) {
    display.value = 'Error';
  }
}

function calculateSquare() {
  try {
    display.value = Math.pow(eval(display.value), 2);
  } catch (error) {
    display.value = 'Error';
  }
}

function calculateSquareRoot() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch (error) {
    display.value = 'Error';
  }
}
