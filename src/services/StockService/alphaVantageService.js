const axios = require("axios");

const BASE_URL = "https://www.alphavantage.co/query";
const API_KEY = process.env.ALPHA_VANTAGE_SECRET_KEY;

const fetchRealTimeStockData = async (symbol) => {
  try {
    const params = {
      function: "TIME_SERIES_INTRADAY",
      symbol: symbol,
      interval: "5min",
      apikey: API_KEY,
    };

    const response = await axios.get(BASE_URL, { params });

    return { success: true, data: response.data };
  } catch (err) {
    return {
      success: false,
      message: "Error in fetching data from Aplha Vantage",
    };
  }
};

module.exports = { fetchRealTimeStockData };
