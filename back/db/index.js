const mongoose = require('mongoose');

// const mongoUri =
//   'mongodb+srv://danielcohen:a636pzw4@cluster0.ldcfg.mongodb.net/<dbname>?retryWrites=true&w=majority';

  const mongoUri = `mongodb+srv://daniel:a636pzw4@cluster0.zqubz.mongodb.net/<dbname>?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log('MongoDB Connected...');
  } catch (error) {
    console.log(error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
