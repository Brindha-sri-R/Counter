let counterElement = document.getElementById("counterValue");

function onIncrement() {
  let previousCounterValue = counterElement.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) + 1;
  if (updatedCounterValue > 0) {
    counterElement.style.color = "#034d09";
  }
  else if (updatedCounterValue < 0) {
    counterElement.style.color = "#e31414";
  }
  else {
    counterElement.style.color = "#36040c";
  }
  counterElement.textContent = updatedCounterValue;
}

function onDecrement() {
  let previousCounterValue = counterElement.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) - 1;
  if (updatedCounterValue > 0) {
    counterElement.style.color = "green";
  }
  else if (updatedCounterValue < 0) {
    counterElement.style.color = "#e31414";
  }
  else {
    counterElement.style.color = "#36040c";
  }
  counterElement.textContent = updatedCounterValue;
}

function onReset() {
  let counterValue = 0;
  counterElement.textContent = counterValue;
  counterElement.style.color = "#36040c";
}
