const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI, {
    useunifiedTopology: true,
  })
  .then(() => {
    console.log("SuccessFully connected to server");
  })
  .catch((err) => {
    console.log(err);
  });
