const express = require('express');
//const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/basic');
const mongoose = require('mongoose')
const workoutsAPIRoutes = require('./routes/workouts')

mongoDBURI = "mongodb+srv://amysmerlick:Smerlick@1@cluster0.wvgo1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(
    mongoDBURI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
/*
  const MyModel = mongoose.model('Test', new mongoose.Schema({name: String}))
  MyModel.find({}, (err, documents) => {
      if (err) {
          console.log(err)
          return
      }
      console.log(documents)
  })
*/

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3000;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
//app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use('/api/workouts', workoutsAPIRoutes)

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));