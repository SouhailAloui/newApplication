const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  rentalId: { type: mongoose.Schema.Types.ObjectId, ref: 'Rental', required: true },
  paymentDate: { type: Date, default: Date.now },
  amount: { type: Number, required: true },
  paymentMethod: { type: String, enum: ['Credit Card', 'PayPal', 'Cash'], required: true },
  status: { type: String, enum: ['Successful', 'Failed', 'Pending'], default: 'Pending' }
});

const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;
