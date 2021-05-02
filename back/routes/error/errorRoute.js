const express = require('express');
const Error = require('../../models/Error');
const Scooter = require('../../models/Scooter');
const errorsRouter = express.Router();
const auth = require('../middleware');

errorsRouter.get('/', async (req, res) => {
  res.send('hello from errors');
});

errorsRouter.post('/create', auth, async (req, res) => {});

errorsRouter.get('/all', auth, async (req, res) => {
  //validation for request

  //get all errors
  try {
    const errors = await Error.find({});

    res.status(200).json([{ type: 'dummy type', status: 'dummy status' }]);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

errorsRouter.get('/:errorId', auth, async (req, res) => {});

errorsRouter.put('/:errorId', auth, async (req, res) => {});

errorsRouter.get('/:scooterId', auth, async (req, res) => {
  const { scooterId } = req.params;
  if (!scooterId) {
    return res.status(400).json({ msg: 'missing credentials on request' });
  }
  const scooter = await Scooter.findById(scooterId);
  if (!scooter) {
    return res.status(400).json({ msg: 'Scooter not found on db' });
  }
  try {
    const errors = await Error.find({ scooterId });
    if (errors.length === 0) {
      return res
        .status(200)
        .json({ msg: `no errors available for scooter id ${scooterId}` });
    }
    res.status(200).send(errors);
  } catch (error) {
    res.status(400).send(error.message);
  }
});



module.exports = errorsRouter;
