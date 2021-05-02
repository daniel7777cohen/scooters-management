const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParkingSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  allowedScooters: {
    type: Number,
    require: true,
  },
  scooters: [
    {
      type: Schema.Types.ObjectId,
      ref: 'scooter',
      required: true,
    },
  ],
  location: [
    {
      lat: {
        type: Number,
        required: true,
      },
      long: {
        type: Number,
        required: true,
      },
    },
  ],
});

module.exports = Parking = mongoose.model('parking', ParkingSchema);
