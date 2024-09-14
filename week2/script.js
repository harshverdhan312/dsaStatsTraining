function appendValue(value) {
  document.getElementById("screen").value += value;
}

function clearScreen() {
  document.getElementById("screen").value = "";
}

function deleteLast() {
  let current = document.getElementById("screen").value;
  document.getElementById("screen").value = current.slice(0, -1);
}

function calculate() {
  let result = document.getElementById("screen").value;
  if (result) {
    document.getElementById("screen").value = eval(result);
  }
}
