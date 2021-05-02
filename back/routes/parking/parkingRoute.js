const express = require('express');
const Parking = require('../../models/Parking');
const parkingRouter = express.Router();
const auth = require('../middleware');

parkingRouter.get('/', async (req, res) => {
  res.send('hello from parking');
});

parkingRouter.post('/create', auth, async (req, res) => {});

parkingRouter.get('/all', auth, async (req, res) => {

    
  //validation for request

  //get all parkings
  try {
    const parkings = await Parking.find({});
    res.status(200).json([{ address: 'dummyAddress' }]);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

parkingRouter.get('/available', auth, async (req, res) => {
  //validation for request

  //havent spent time to find a filter query with property length gte than an array property length

  //get all available parkings - the javascript way
  try {
    const parkings = Parking.find({}).exec((err, response) => {
      if (err) {
        res.status(400).send(err);
      }
      const parkingsFormatted = response.toObject();

      //filter parkingsFormatted such that parkingsFormatted.scooters.length is smaler than parkingsFormatted.allowedScooters
      const filteredParkings = parkingsFormatted.filter((parking)=> parking.scooters.length < parking.allowedScooters);
      //   res.status(200).send(parkingsFormatted);

      res.status(200).json([{ address: 'dummyAddress' }]);
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = parkingRouter;
