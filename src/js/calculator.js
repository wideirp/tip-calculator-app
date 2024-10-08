export class Calculator {
  static {
    Calculator.prototype.validateFloat2 = (input) => {
      input = input.trim();
      const pattern = /^\d*\.?\d{0,2}$/;
      return [input, pattern.test(input)];
    };

    Calculator.prototype.validateInt = (input) => {
      input = input.trim().replace(".", "");
      const pattern = /^[0-9]+$/;
      return [input, pattern.test(input)];
    };
  }

  constructor(form, tipEl, totalEl) {
    this.inputs = { bill: 0, tip: 0.25, people: 0 };
    this.outputs = { tip: 0, total: 0 };
    this.elements = {
      inputs: {
        bill: form.querySelector("#bill"),
        tipBtns: form.querySelectorAll(".tip-selector__tip"),
        customTip: form.querySelector("#custom-tip"),
        people: form.querySelector("#people"),
      },
      display: { form: form, tip: tipEl, total: totalEl },
    };
    this.setDisplay();
  }

  handleBillInput = (event) => {
    event.preventDefault();
    const [input, isValid] = this.validateFloat2(event.target.value);
    if (isValid) {
      this.inputs.bill = parseFloat(input);
      this.calculateTip();
      if (parseFloat(input) === 0 || isNaN(parseFloat(input))) {
        this.elements.inputs.bill.dataset.state = "zero-error";
      } else {
        this.elements.inputs.bill.dataset.state = "";
      }
    } else {
      event.target.value = event.target.value.replace(event.key, "");
    }
  };

  handlePeopleInput = (event) => {
    event.preventDefault();
    const [input, isValid] = this.validateInt(event.target.value);
    console.log(input, isValid);
    if (isValid) {
      this.inputs.people = parseInt(input);
      this.calculateTip();
      if (parseInt(input) === 0 || isNaN(parseInt(input))) {
        this.elements.inputs.people.dataset.state = "zero-error";
      } else {
        this.elements.inputs.people.dataset.state = "";
      }
    } else {
      console.log(event);
      event.target.value = event.target.value.replace(event.key, "");
    }
  };

  handleTipBtnClick = (event) => {
    event.preventDefault();
    if (event.target.dataset.state !== "selected") {
      event.target.parentNode
        .querySelectorAll(".tip-selector__tip")
        .forEach((tipBtn) => {
          if (tipBtn === event.target) {
            tipBtn.dataset.state = "selected";
            this.inputs.tip = parseFloat(tipBtn.dataset.amount);
            this.calculateTip();
          } else {
            tipBtn.dataset.state = "";
          }
        });
      this.elements.inputs.customTip.dataset.state = "";
      this.elements.inputs.customTip.value = "";
    }
  };

  handleCustomTipInput = (event) => {
    event.preventDefault();
    const [input, isValid] = this.validateInt(event.target.value);
    this.inputs.tip = parseFloat(input / 100).toFixed(2);
    this.calculateTip();
    if (event.target.dataset.state !== "selected") {
      event.target.dataset.state = "selected";
      this.elements.inputs.tipBtns.forEach((btn) => {
        btn.dataset.state = "";
      });
    }
  };

  handleResetClick = (event) => {
    event.preventDefault();

    // reset bill input
    this.elements.inputs.bill.value = "";
    this.elements.inputs.bill.dataset.state = "init";
    this.inputs.bill = 0;

    // reset people input
    this.elements.inputs.people.value = "";
    this.elements.inputs.people.dataset.state = "init";
    this.inputs.people = 0;

    // reset tip btns
    this.inputs.tip = 0.25;
    this.elements.inputs.tipBtns.forEach((tipBtn) => {
      if (parseFloat(tipBtn.dataset.amount) === 0.25) {
        tipBtn.dataset.state = "selected";
      } else {
        tipBtn.dataset.state = "";
      }
    });
    this.elements.inputs.customTip.value = "";
    this.elements.inputs.customTip.dataset.state = "";

    // reset display
    this.calculateTip();
  };

  setDisplay = () => {
    this.elements.display.tip.innerHTML = "$" + this.outputs.tip.toFixed(2);
    this.elements.display.total.innerHTML = "$" + this.outputs.total.toFixed(2);
  };

  calculateTip = () => {
    let tip = (this.inputs.bill * this.inputs.tip) / this.inputs.people;
    let total = this.inputs.bill / this.inputs.people + tip;
    if (isNaN(tip) || !isFinite(tip)) {
      tip = 0;
    }
    if (isNaN(total) || !isFinite(total)) {
      total = 0;
    }
    this.outputs.tip = tip;
    this.outputs.total = total;
    this.setDisplay();
  };
}
