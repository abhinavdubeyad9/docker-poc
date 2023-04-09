const express = require("express");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const uri = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5001;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.options("*", cors());

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port:${PORT}, mongodb connected`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

const metricRoute = require("./routes/metric.route");
app.use("/metrics", metricRoute);

app.get("/", (req, res) => {
  res.send("metrics is working");
});
