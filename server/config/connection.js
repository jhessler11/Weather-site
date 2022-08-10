const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/hessler-weather-site",
  {
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;