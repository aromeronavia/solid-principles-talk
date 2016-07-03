
//routes.js
const appRouter = {
  'GET /currency_conversion/:from/:to/:amount': UtilController.convertMoney
};

//controllers.js
const UtilController = {
  convertMoney(req, res) {
    const currencyFrom = req.params.from;
    const currencyTo = req.params.to;
    const moneyAmount = req.params.amount;

    const requestURI = `${API_URL}?a=${moneyAmount}&from=${currencyFrom}&to=${currencyTo}`;
    request(requestURI, (error, result) => {
      if (error) return callback(error);
      const conversionResult = moneyAmount * result;
      callback(null, conversionResult);
    });
  }
};
