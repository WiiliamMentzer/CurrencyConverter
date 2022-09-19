import { printElements } from ".";

export function currencyConversionRates(currency1, currency2) {
  let request = new XMLHttpRequest();
  const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${currency1}/${currency2}`;

  request.addEventListener("loadend", function() {
    const response = JSON.parse(this.responseText);
    if (this.status === 200) {
      printElements(response, currency1);
    }
  });

  request.open("GET", url, true);
  request.send();
}
//   let curPromise = new Promise(function(resolve, reject){
//     let apiRequest = new XMLHttpRequest();
//     if (currency2 === null) {
//       const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${cur}`;

//       apiRequest.addEventListener("loadend", function(){
//         const apiRespone = JSON.parse(this.responseText);

//         if(this.status === 200){
//           resolve(apiRespone);
//         } else {
//           reject(this);
//         }
//         apiRequest.open("GET", url, true);
//         apiRequest.send();
//       })
//     } else {
//       const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${currency1}/${currency2}/AMOUNT`;

//       apiRequest.addEventListener("loadend", function(){
//         const apiRespone = JSON.parse(this.responseText);

//         if(this.status === 200){
//           resolve(apiRespone);
//         } else {
//           reject(this);
//         }
//         apiRequest.open("GET", url, true);
//         apiRequest.send();
//       })
//     }

//   curPromise.then(function(apiRespone) {
//     curResult(apiRespone);
//   }, function(errorMSG) {
//     curError(errorMSG);
//   })
// }