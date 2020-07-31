const { requirePropFactory } = require("@material-ui/core");

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/visionboard', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});