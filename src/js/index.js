import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min,css'
import './css/styles.css'
import { currencyConversionRates } from './calculator';

export function currencyResult(apiRespone){
  document.getElementById("CurrencyConverted").innerHTML = null;
  const curDisplay = document.getElementById("CurrencyConverted");
}

function formSubmit(event){
  event.preventDefauly();

  let currency1 = document.getElementById("CurrencySelector1").value;
  let currency2 = document.getElementById("CurrencySelector2").value;
  currencyConversionRates(currency1, currency2);
}