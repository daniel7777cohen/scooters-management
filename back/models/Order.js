const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  scooterId: {
    type: Schema.Types.ObjectId,
    ref: 'scooter',
    required: true,
  },
  sourceParkingId: {
    type: Schema.Types.ObjectId,
    ref: 'parking',
    required: true,
  },
  destinationParkingId: {
    type: Schema.Types.ObjectId,
    ref: 'parking',
    default: null,
  },
  totalCost: {
    type: Number,
    default: 0,
  },
});

module.exports = Order = mongoose.model('order', OrderSchema);
