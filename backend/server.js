const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Add this line
const urlRoutes = require('./routes/urlRoutes');

dotenv.config();

const app = express();
const corsOptions = {
  origin: ['https://link-trim-iota.vercel.app'], // your frontend URL
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true,
};

app.use(cors(corsOptions)); // Add this line
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'));

app.use('/', urlRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on: ${process.env.BASE_URL}:${PORT}`));
