const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const incidentRoutes = require('./routes/incidents');

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/incidents', incidentRoutes);

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
    })
    .catch(err => console.error(err));