const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScooterSchema = new mongoose.Schema({
  serialNumber: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['active', 'broken', 'beingFixed', 'beingLoaded','rented'],
    default: 'active',
  },
  manufacturingDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },

  parkingId: {
    type: Schema.Types.ObjectId,
    ref: 'parking',
    default: null,
  },
  currentLocationWhileUsed: {// I assume it should be updated dynamically?
    lat: {
      type: Number,
      required: true,
    },
    long: {
      type: Number,
      required: true,
    },
  },
  /* this field is necessary,
   if its possible to have more than one error upon a scooter when a user complains.
    thats how we can retrieve all errors in one time, per a scooter
  */
  errorsList:[
    {
      type: Schema.Types.ObjectId,
      ref: 'error',
      required: true,
    }
  ],

  //if it's currently being used
  currentUserId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    default: null,
  },
});

module.exports = Scooter = mongoose.model('scooter', ScooterSchema);
