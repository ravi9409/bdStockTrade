const express = require('express');
const { resolve } = require('path');
const cors = require('cors');

const app = express();
const port = 3010;

app.use(express.static('static'));
app.use(cors());

function findProfitOrLoss(returnPercentage) {
  if (returnPercentage > 0)
    return "profit";
  else
    return "loss";
}

app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseInt(req.query.boughtAt);
  let marketPrice = parseInt(req.query.marketPrice);
  let quantity = req.query.quantity;
  res.status(200).json((marketPrice - boughtAt) * quantity);
});

app.get('/total-returns', (req, res) => {
  let stock1 = parseInt(req.query.stock1);
  let stock2 = parseInt(req.query.stock2);
  let stock3 = parseInt(req.query.stock3);
  let stock4 = parseInt(req.query.stock4);
  res.status(200).json((stock1 + stock2 + stock3 + stock4));
});

app.get('/calculate-return-percentage', (req, res) => {
  let boughtAt = parseInt(req.query.boughtAt);
  let returns = parseInt(req.query.returns);
  res.status(200).json((returns / boughtAt) * 100);
});

app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseInt(req.query.stock1);
  let stock2 = parseInt(req.query.stock2);
  let stock3 = parseInt(req.query.stock3);
  let stock4 = parseInt(req.query.stock4);
  res.status(200).json((stock1 + stock2 + stock3 + stock4));
});

app.get('/status', (req, res) => {
  let returnPercentage = parseInt(req.query.returnPercentage);
  let status = findProfitOrLoss(returnPercentage)
  res.status(200).json(status);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
