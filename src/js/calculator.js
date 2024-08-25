export function Calculator() {}

// Calculator.prototype.setTipPercent = (percent) => {
//   this.tipPercent = percent;
// };

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
