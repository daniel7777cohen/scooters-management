const express = require('express');
const Scooter = require('../../models/Scooter');
const scootersRouter = express.Router();
const auth = require('../middleware');

scootersRouter.get('/', async (req, res) => {
  res.send('hello from scooters');
});

scootersRouter.post('/create', auth, async (req, res) => {
  //validation for request
  if (!req.body) {
    return res.status(400).json({ msg: 'error- request has no body' });
  }
  const { serialNumber, type, manufacturingDate } = req.body;
  if (!serialNumber || !type || !manufacturingDate) {
    return res
      .status(400)
      .json({ msg: 'error- missing credentials on request' });
  }
  //create a scooter
  try {
    const manufacturingDateFormatted = new Date(manufacturingDate);
    
    const scooter = new Scooter({
      serialNumber,
      type,
      manufacturingDate: manufacturingDateFormatted,
    });

    await scooter.save();

    res.status(200).send(scooter);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

scootersRouter.get('/all', auth, async (req, res) => {
  /*
  validation for request
  for example - make sure user on the request is an admin
  */

  //get all scooters
  try {
    const scooters = await Scooter.find({});
    if (scooters.length === 0) {
      return res.status(400).json({ msg: 'no scooters exists in db' });
    }
    res.status(200).send(scooters);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

scootersRouter.get('/available', auth, async (req, res) => {
  //validation for request

  try {
    const scooters = await Scooter.find({ status: 'active' });

    if (scooters.length === 0) {
      return res.status(400).json({ msg: 'no scooters available for a ride' });
    }
    res.status(200).send(scooters);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

scootersRouter.get('/:scooterId', auth, async (req, res) => {
  //validation for request
  const { scooterId } = req.params;

  if (!scooterId) {
    return res.status(400).json({ msg: 'missing credentials' });
  }
  try {
    const scooter = await Scooter.findById(scooterId);
    if (!scooter) {
      return res.status(400).json({ msg: 'scooter not found on db' });
    }
    res.status(200).send(scooter);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
module.exports = scootersRouter;
