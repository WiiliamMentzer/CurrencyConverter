export default class CurrencyCalculator {
  //created class to call in index.js
  static currencyConversion(currencyAmmount, currency1, currency2) {
    //use static method so we can call CurrencyCalculator.currencyConversion in index.js
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${currency1}/${currency2}/${currencyAmmount}`)
    //used lesson 24 directly to fetch API information 
    .then(function(response) {
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      } else {
        return response.json();
      }
    })
    .catch(function(error) {
      return error;
    });
  }
}