const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth")
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection success!"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});
