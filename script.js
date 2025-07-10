let display = document.getElementById('display');

function append(value) {
  if (display.innerText === '0') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function calculate() {
  try {
    let result = eval(display.innerText.replace('×', '*').replace('÷', '/'));
    display.innerText = result;
  } catch {
    display.innerText = 'Error';
  }
}
