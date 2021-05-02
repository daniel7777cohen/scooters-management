const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const scootesRouter = require('./routes/scooter/scooterRoute');
const errorRouter = require('./routes/error/errorRoute');
const parkingRouter = require('./routes/parking/parkingRoute');
const userRouter = require('./routes/user/userRoute');
const orderRouter = require('./routes/order/orderRoute');

const connectDB = require('./db');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/scooters', scootesRouter);
app.use('/api/errors', errorRouter);
app.use('/api/parkings', parkingRouter);
app.use('/api/users', userRouter);
app.use('/api/order', orderRouter);

app.listen('5000', () => {
  connectDB();
  console.log('listening on port 5000');
});
