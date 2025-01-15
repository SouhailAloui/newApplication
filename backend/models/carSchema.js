const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  agencyId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  licensePlate: { type: String, required: true, unique: true },
  status: { type: String, enum: ['Available', 'Rented', 'Maintenance'], default: 'Available' },
  dailyPrice: { type: Number, required: true },
  locationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Location', required: true }
});

const Car = mongoose.model('Car', carSchema);
module.exports = Car;
