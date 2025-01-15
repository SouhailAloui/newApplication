const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  city: { type: String, required: true },
  address: { type: String, required: true },
  latitude: { type: Number },
  longitude: { type: Number }
});

const Location = mongoose.model('Location', locationSchema);
module.exports = Location;
