const express = require('express');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const router = express.Router();
const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({products: [], cart: []})
  .write();

router.get('/products', (req, res) => {
  res
    .status(200)
    .send(db.get('products').value());
})

router.get('/products/:id', (req, res) => {
  const id = req.params.id
  res
    .status(200)
    .send(db.get('products').filter({id}).value());
})

router.get('/cart', (req, res) => {
  res
    .status(200)
    .send(db.get('cart').value());
})

router.post('/cart', (req, res) => {
  const item = req.body
  db.get('cart')
    .push(item)
    .write();
  res
    .status(200)
    .send(db.get('cart').value());
})

router.delete('/cart', (req, res) => {
  if (db.has('cart').value()) {
    db.get('cart').remove({}).write()
  }
})

router.delete('/cart', (req, res) => {
  const id = req.params.id
  if (db.has('cart').value()) {
    db.get('cart').remove({id}).write();
  }
  res.status(204)
})



module.exports = router;