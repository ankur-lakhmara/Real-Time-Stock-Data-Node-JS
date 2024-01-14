const {
  fetchRealTimeStockData,
} = require("../../services/StockService/alphaVantageService");

const fetchRealTimeStockDataController = async (req, res) => {
  const symbol = req.params.symbol;
  const result = await fetchRealTimeStockData(symbol);
  if (result.success) {
    return res.status(200).json({ result: result.data });
  } else {
    return res.status(400).json({ result: result.message });
  }
};

module.exports = { fetchRealTimeStockDataController };
