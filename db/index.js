require("dotenv").config();

const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_DB_CLUSTER, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;
module.exports = db;
