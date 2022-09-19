import 'bootstrap/dist/css/bootstrap.css';
import CurrencyCalculator from "./calculator.js";

function currencyResult(currencyAmmount, currencyBefore, currencyAfter, apiResponse) {
  document.getElementById("CurrencyOutput").innerHTML = null;
  const resultDisplay = document.getElementById("CurrencyOutput");

  resultDisplay.innerHTML = `You converted ${currencyAmmount} ${currencyBefore} into ${apiResponse} ${currencyAfter}!`;
}

function currencyError(responseError, currencyBefore, currencyAfter) {
  document.getElementById("CurrencyOutput").innerHTML = null;
  const resultDisplay = document.getElementById("CurrencyOutput");
  if (responseError == "Error: 403 Forbidden") {
    resultDisplay.innerHTML= `Uh oh there was an error! The API brought back no results, please check your .env file to check if you correctly applied your API key from https://www.exchangerate-api.com/dashboard ${responseError}`;
  } else if (responseError == "Error: 400 Bad Request") {
    resultDisplay.innerHTML = `Uh oh there was an error! The API says that one of the currencies doesnt exist! ${responseError} ${currencyBefore} ${currencyAfter}`;
  } else {
    resultDisplay.innerHTML = `Uh oh there was an error! The API brought back no results. This the fault of the API, please try later. ${responseError} ${currencyBefore} ${currencyAfter}`;
  }
}

function currencyConvert(currencyAmmount, currencyBefore, currencyAfter) {
  CurrencyCalculator.currencyConversion(currencyAmmount, currencyBefore, currencyAfter)
  .then(function(apiResponse) {
    if(apiResponse.result === "success") {
      currencyResult(currencyAmmount, currencyBefore, currencyAfter, apiResponse.conversion_result);
    } else {
      currencyError(apiResponse, currencyBefore, currencyAfter);
    }
  });
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