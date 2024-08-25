export function Calculator(tipEl, totalEl) {
  this.inputs = { bill: 0, tip: 0, people: 0 };
  this.outputs = { tip: 13.97, total: 137.34543532 };
  this.elements = {
    display: { tip: tipEl, total: totalEl },
  };
}

Calculator.prototype.calculateTip = function () {
  let tip = (this.inputs.bill * this.inputs.tip) / this.inputs.people;
  let total = this.inputs.bill / this.inputs.people + tip;
  if (isNaN(tip)) {
    tip = 0;
  }
  if (isNaN(total)) {
    total = 0;
  }
  this.outputs.tip = tip;
  this.outputs.total = total;
};

Calculator.prototype.setDisplay = function () {
  this.elements.display.tip.innerHTML = "$" + this.outputs.tip.toFixed(2);
  this.elements.display.total.innerHTML = "$" + this.outputs.total.toFixed(2);
};

// EVENT HANDLERS
Calculator.prototype.handleBillInput = (event) => {
  event.preventDefault();
  console.log(event.target.value);
};

Calculator.prototype.handlePeopleInput = (event) => {
  event.preventDefault();
  console.log(event.target.value);
};

Calculator.prototype.handleTipBtnClick = (event) => {
  event.preventDefault();
  console.log(event.target);
};

Calculator.prototype.handleCustomTipInput = (event) => {
  event.preventDefault();
  console.log(event.target.value);
};

Calculator.prototype.handleResetClick = (event) => {
  event.preventDefault();
  console.log(event.target);
};
