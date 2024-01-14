const express = require("express");
const {
  fetchRealTimeStockDataController,
} = require("../controllers/stocks/realTimeData");
const authMiddleware = require("../utils/middlewares/AuthMiddleware");
const router = express.Router();

router.get("/:symbol", authMiddleware, fetchRealTimeStockDataController);

module.exports = router;
