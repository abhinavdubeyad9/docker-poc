const express = require("express");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const uri = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5001;
const createError = require("http-errors");
//for metric
const Metric = require("./models/MetricModel");

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port:${PORT}, mongodb connected`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

const saveMetric = async (time) => {
  try {
    const metric = new Metric({ time });
    const result = await metric.save();
    console.log("result db", result);
  } catch (error) {
    console.log(error.message);
    if (error.name === "ValidationError") {
      next(createError(422, error.message));
      return;
    }
  }
};

app.get("/cube", (req, res) => {
  const integer = req.query.integer;
  const metric_start = performance.now();
  const result = integer * integer * integer;
  const metric_end = performance.now();
  const metricTime = metric_end - metric_start;
  console.log("Metric: ", metricTime);
  saveMetric(metricTime);
  res.send(`Result : ${result}`);
});

app.get("/", (req, res) => {
  res.send("Cube is working");
});
