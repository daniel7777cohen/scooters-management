const express = require('express');
const Order = require('../../models/Order');
const orderRouter = express.Router();
const auth = require('../middleware');

orderRouter.get('/', async (req, res) => {
  res.send('hello from order');
});

orderRouter.post('/create', auth, async (req, res) => {});

orderRouter.get('/all', auth, async (req, res) => {});

orderRouter.get('/:errorId', auth, async (req, res) => {

});
module.exports = orderRouter;
