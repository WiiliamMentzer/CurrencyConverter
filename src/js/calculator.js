
export function currencyConversionRates(cur) {
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
  })

  curPromise.then(function(apiRespone) {
    curResult(apiRespone);
  }, function(errorMSG) {
    currencyConversionRates(errorMSG);
  })
}

export function currencyConverter(cur1, cur2) {
  let conversionTotal = null;
  let apiRequest = new XMLHttpRequest();
  const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}Y/pair/${cur1}/${cur2}/AMOUNT`;
  
}