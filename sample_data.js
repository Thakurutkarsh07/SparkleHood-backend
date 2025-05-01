const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Incident = require('./models/Incident');

dotenv.config();

// Sample incidents
const sampleIncidents = [
    {
        title: "Autonomous Drone Malfunction",
        description: "An autonomous drone misidentified a civilian target causing minor injuries.",
        severity: "High"
    },
    {
        title: "Language Model Bias",
        description: "A language model produced biased content during a public demo.",
        severity: "Medium"
    },
    {
        title: "Data Breach in AI Model Training",
        description: "Sensitive user data leaked due to improper data anonymization during model training.",
        severity: "High"
    }
];

// Insert sample incidents into the database
async function insertSampleData() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected.');

        await Incident.deleteMany(); // Optional: Clean previous data
        console.log('Old incidents deleted.');

        const inserted = await Incident.insertMany(sampleIncidents);
        console.log(`${inserted.length} incidents inserted!`);
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

insertSampleData();
