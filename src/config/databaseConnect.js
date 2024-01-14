const mongoose = require("mongoose");
require("dotenv").config();

const DatabaseConnect = async (req, res) => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Database connected successfully!"))
    .catch((err) =>
      console.error(err, "Error occured while connecting to Database")
    );
};

module.exports = DatabaseConnect;
