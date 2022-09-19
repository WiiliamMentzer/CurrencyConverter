// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min,css'
// import './css/styles.css'
import { currencyConversionRates } from './calculator';


export function printElements(apiResponse, currency1) {
  document.getElementById('CurrencyConverted').innerText =  `${currency1} ${apiResponse.conversion_rates.currency1}%.`;
}

// export function currencyResult(apiRespone){
//   document.getElementById("CurrencyConverted").innerHTML = null;
//   const curDisplay = document.getElementById("CurrencyConverted");
// }

function formSubmit(event){
  event.preventDefault();

  let currency1 = "USD";
  // let currency2 = document.getElementById("CurrencySelector2").value;
  
  currencyConversionRates(currency1);
}

window.addEventListener("load", function(){
	document.getElementById("user-input").addEventListener("submit", formSubmit);
});