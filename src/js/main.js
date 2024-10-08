import { Calculator } from "./calculator.js";

// inputs
const form = document.querySelector("#form");
const billInput = document.querySelector("#bill");
const peopleInput = document.querySelector("#people");
const customTipInput = document.querySelector("#custom-tip");
const tipButtons = document.querySelectorAll(".tip-selector__tip");
const resetBtn = document.querySelector("button[type='reset']");

// outputs
const tipDisplay = document.querySelector("#tip-amount");
const totalDisplay = document.querySelector("#total-amount");

const calc = new Calculator(form, tipDisplay, totalDisplay);

billInput.addEventListener("keyup", calc.handleBillInput);
peopleInput.addEventListener("keyup", calc.handlePeopleInput);
customTipInput.addEventListener("input", calc.handleCustomTipInput);
tipButtons.forEach((btn) =>
  btn.addEventListener("mouseup", calc.handleTipBtnClick)
);
resetBtn.addEventListener("mouseup", calc.handleResetClick);
