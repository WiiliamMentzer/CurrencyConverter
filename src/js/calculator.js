
export function currencyConversionRates(currency1, currency2) {
  let curPromise = new Promise(function(resolve, reject){
    let apiRequest = new XMLHttpRequest();
    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${cur}`;

    apiRequest.addEventListener("loadend", function(){
      const apiRespone = JSON.parse(this.responseText);

      if(this.status === 200){
        resolve(apiRespone);
      } else {
        reject(this);
      }
    })
    apiRequest.open("GET", url, true);
    apiRequest.send();
  })

  curPromise.then(function(apiRespone) {
    curResult(apiRespone);
  }, function(errorMSG) {
    curError(errorMSG);
  })
}