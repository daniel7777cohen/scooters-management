const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ErrorSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  closedAt: {
    type: Date,
    default: null,
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
  type: {
    type: String,
    enum: ['firstDummy', 'secondDummy', 'thirdDummy'],
    required: true,
  },
  status: {
    type: String,
    enum: ['open', 'beingFixed', 'closed'],
    required: true,
  },
});

module.exports = ErrorModel = mongoose.model('error', ErrorSchema);
