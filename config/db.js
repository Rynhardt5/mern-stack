const mongoose = require('mongoose');

// Connect to database
mongoose
  .connect(require('./keys').mongoURI, { useNewUrlParser: true })
  .then(() => console.log('mongo db connected'))
  .catch(err => console.log(err));
