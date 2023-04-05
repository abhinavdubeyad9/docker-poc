const createError = require("http-errors");
const mongoose = require("mongoose");

const Square = require("../models/square.model");
const Cube = require("../models/cube.model");
const Fibonnaci = require("../models/fibonacci.model");

// to create an array
const arrayFun = (dbObj) => {
  const result = [];
  dbObj.map((idx) => {
    result.push(idx.time);
  });
};

const avg = (dbObj) => {
  let sum = 0;
  // Iterate over the elements of the array
  dbObj.forEach((item, idx) => {
    let num = parseFloat(item.time).toFixed(4);
    sum += parseFloat(num);
  });
  return sum / parseFloat(dbObj.length);
};

module.exports = {
  getAllMetrics: async (req, res, next) => {
    try {
      const allSquare = await Square.find({}, { __v: 0 });
      const allCube = await Cube.find({}, { __v: 0 });
      const allFibo = await Fibonnaci.find({}, { __v: 0 });
      const AvgSq = avg(allSquare);
      const AvgCu = avg(allCube);
      const AvgFib = avg(allFibo);
      res.send({ square: AvgSq, cube: AvgCu, fibonnaci: AvgFib });
    } catch (error) {
      console.log(error.message);
    }
  },
};
