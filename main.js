const pound = document.querySelector('#pound');
const dollar = document.querySelector('#dollar');
const euro = document.querySelector('#euro');
const api = new GetApi();

function data() {
	api
		.get('https://api.exchangeratesapi.io/latest?base=GBP')
		.then(promise => {
			pound.textContent = promise.rates.TRY.toFixed(2);
		})
		.catch(err => console.log(err));
	api
		.get('https://api.exchangeratesapi.io/latest?base=USD')
		.then(promise => {
			dollar.textContent = promise.rates.TRY.toFixed(2);
		})
		.catch(err => console.log(err));

	api
		.get('https://api.exchangeratesapi.io/latest?base=EUR')
		.then(promise => {
			euro.textContent = promise.rates.TRY.toFixed(2);
		})
		.catch(err => console.log(err));
}
data();

setInterval(data, 10800000);
