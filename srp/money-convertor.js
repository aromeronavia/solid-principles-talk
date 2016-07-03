//routes.js
const appRouter = {
  'GET /currency_conversion/:from/:to/:amount': UtilController.getMoneyConversion
};

//controllers.js

const getMoneyConversion = require('./money-conversor');

const UtilController = {
  getMoneyConversion(req, res) {
    const currencyFrom = req.params.from;
    const currencyTo = req.params.to;
    const moneyAmount = req.params.amount;

    getMoneyConversion(moneyAmount, currencyFrom, currencyTo, (error, result) => {
      res.send(error, result);
    });
};

//money-conversor.js
const request = require('request');
const fetchExchangeRate = require('./exchange-rate-fetcher');

const getMoneyConversion = function(moneyAmount, currencyFrom, currencyTo, callback) {
  // Example: currencyFrom: USD. currencyTo: MXN.

  request(requestURI, (error, exchangeRate) => {
    if (error) return callback(error);
    const conversionResult = moneyAmount * exchangeRate;
    callback(null, conversionResult);
  });
};

//exchange-rate-fetcher
const request = require('request');

const UNIT = 1;
const API_URL = 'https://www.google.com/finance/converter'

const buildRequestURI = function(moneyAmount, currencyFrom, currencyTo) {
  const requestURI = `${API_URL}?a=${moneyAmount}&from=${currencyFrom}&to=${currencyTo}`;

  return requestURI;
};

const exchangeRateFetcher = function(currencyFrom, currencyTo) {
  const requestURI = buildRequestURI(moneyAmount, currencyFrom, currencyTo)
};
