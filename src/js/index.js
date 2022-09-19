import 'bootstrap/dist/css/bootstrap.css';
import CurrencyCalculator from "./calculator.js";

function currencyConvert(currencyAmmount, currencyBefore, currencyAfter) {
  CurrencyCalculator.currencyConversion(currencyAmmount, currencyBefore, currencyAfter)
  .then(function(response) {
    if(response.result === "success") {
      currencyResult(currencyAmmount, currencyBefore, currencyAfter, response.conversion_result);
    } else if (response.result === "error") {
      currencyError(response.result);
    }
  });
}

function currencyResult(currencyAmmount, currencyBefore, currencyAfter, response) {
  document.getElementById("CurrencyOutput").innerHTML = null;
  const resultDisplay = document.getElementById("CurrencyOutput");

  resultDisplay.innerHTML= `You converted ${currencyAmmount} ${currencyBefore} into ${response} ${currencyAfter}!`;
}

function currencyError(responseError) {
  document.getElementById("CurrencyOutput").innerHTML = null;
  const resultDisplay = document.getElementById("CurrencyOutput");

  resultDisplay.innerHTML= `Uh oh there was an error! The Error was ${responseError}`;
}


function formSubmit(event) {
  event.preventDefault();

  let currencyAmmount = document.getElementById("CurrencyAmmount").value;
  let currencyBefore = document.getElementById("CurrencyBefore").value;
  let currencyAfter = document.getElementById("CurrencyAfter").value;

  currencyConvert(currencyAmmount, currencyBefore, currencyAfter);

}

window.addEventListener("load", function(){
  document.getElementById("user-submit").addEventListener("submit", formSubmit);
});