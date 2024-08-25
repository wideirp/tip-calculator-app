export class Calculator {
  static {
    Calculator.prototype.validateFloat2 = (input) => {
      input = input.trim();
      const pattern = /^[0-9]+\.?[0-9]?[0-9]?$/;
      return [input, pattern.test(input)];
    };

    Calculator.prototype.validateInt = (input) => {
      input = input.trim();
      const pattern = /^[0-9]+$/;
      return [input, pattern.test(input)];
    };
  }

  constructor(tipEl, totalEl) {
    this.inputs = { bill: 0, tip: 0, people: 0 };
    this.outputs = { tip: 13.97, total: 137.34543532 };
    this.elements = {
      display: { tip: tipEl, total: totalEl },
    };
    this.setDisplay();
  }

  handleBillInput = (event) => {
    event.preventDefault();
    const [input, isValid] = this.validateFloat2(event.target.value);
    console.log(input, isValid);
  };

  handlePeopleInput = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };

  handleTipBtnClick = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  handleCustomTipInput = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };

  handleResetClick = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  setDisplay = () => {
    this.elements.display.tip.innerHTML = "$" + this.outputs.tip.toFixed(2);
    this.elements.display.total.innerHTML = "$" + this.outputs.total.toFixed(2);
  };

  calculateTip = () => {
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
}
