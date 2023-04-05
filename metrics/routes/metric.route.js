const express = require("express");
const router = express.Router();

const MetricController = require("../controllers/metric.controller");

//Get a list of all metrics
router.get("/", MetricController.getAllMetrics);

module.exports = router;
