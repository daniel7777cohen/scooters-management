const express = require('express');
const User = require('../../models/User');
const userRouter = express.Router();
const auth = require('../middleware');

userRouter.get('/', async (req, res) => {
  res.send('hello from user');
});

userRouter.post('/create', auth, async (req, res) => {});

userRouter.get('/all', auth, async (req, res) => {
  //validation for request

  //get all scooters
  try {
    const users = await User.find({});
    // if (users.length === 0) {
    //     return res.status(400).json({ msg: 'no users exists in db' });
    //   }
    res.status(200).json([{ firstName: 'dummy first name' }]);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

userRouter.get('/:userId', auth, async (req, res) => {});
module.exports = userRouter;
