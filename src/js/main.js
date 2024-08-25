import { Calculator } from "./calculator.js";

const billInput = document.querySelector("#bill");
const peopleInput = document.querySelector("#people");
const customTipInput = document.querySelector("#custom-tip");
const tipButtons = document.querySelectorAll(".tip-selector__tip");
const resetBtn = document.querySelector("button[type='reset']");

const calc = new Calculator();

billInput.addEventListener("input", calc.handleBillInput);
peopleInput.addEventListener("input", calc.handlePeopleInput);
customTipInput.addEventListener("input", calc.handleCustomTipInput);
tipButtons.forEach((btn) =>
  btn.addEventListener("mouseup", calc.handleTipBtnClick)
);
resetBtn.addEventListener("mouseup", calc.handleResetClick);
