const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  carId: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  totalPrice: { type: Number, required: true },
  pickupLocationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Location', required: true },
  dropoffLocationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Location', required: true },
  status: { type: String, enum: ['Pending', 'Confirmed', 'Completed', 'Cancelled'], default: 'Pending' }
});

const Rental = mongoose.model('Rental', rentalSchema);
module.exports = Rental;
