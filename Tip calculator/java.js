let billValue = document.querySelector("#bill");
let tipValue = document.querySelector("#tip");
let calculateValue = document.querySelector("#calculate");
let totalSpan = document.querySelector("#total");

calculateValue.onclick = function () {
  let billInput = billValue.value;
  let tipInput = tipValue.value;
  let calculateTotal = billInput * (1 + tipInput / 100);
  totalSpan.textContent = calculateTotal.toFixed(2);
};
