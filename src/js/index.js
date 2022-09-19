// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min,css'
// import './css/styles.css'

function formSubmit(event){
  event.preventDefault();

  let currencyAmmount = document.getElementById("CurrencyAmmount").value;
  let currency1 = document.getElementById("CurrencySelector1").value;
  let currency2 = document.getElementById("CurrencySelector2").value;
  let currencyResult = document.getElementById("CurrencyOutput");
  currencyResult.innerHTML = null;

}

window.addEventListener("load", function(){
  document.querySelector("form").addEventListener("submit", formSubmit);
});