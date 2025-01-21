const express = require('express')
const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { registerUser, loginUser } = require('./controllers/AuthController');
const cors = require('cors');

dotenv.config();

app.use(express.json());

app.use(cors());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


// Routes
app.post('/api/register', registerUser);
app.post('/api/login', loginUser);

app.use('/api', require('./routes/ProtectedRoute')); 

const PORT = process.env.PORT || 8000;
app.listen(PORT,'0.0.0.0', () => console.log(`Server running on port ${PORT}`));