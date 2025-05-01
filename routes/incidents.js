const express = require('express');
const router = express.Router();
const Incident = require('../models/Incident');

// GET /incidents - Get all incidents
router.get('/', async (req, res) => {
    try {
        const incidents = await Incident.find();
        res.status(200).json(incidents);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST /incidents - Create a new incident
router.post('/', async (req, res) => {
    const { title, description, severity } = req.body;

    if (!title || !description || !severity) {
        return res.status(400).json({ message: "Title, description, and severity are required." });
    }

    if (!['Low', 'Medium', 'High'].includes(severity)) {
        return res.status(400).json({ message: "Severity must be one of: Low, Medium, High." });
    }

    try {
        const incident = new Incident({ title, description, severity });
        const savedIncident = await incident.save();
        res.status(201).json(savedIncident);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET /incidents/:id - Get a specific incident by ID
router.get('/:id', async (req, res) => {
    try {
        const incident = await Incident.findById(req.params.id);
        if (!incident) return res.status(404).json({ message: "Incident not found." });
        res.status(200).json(incident);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// DELETE /incidents/:id - Delete a specific incident
router.delete('/:id', async (req, res) => {
    try {
        const incident = await Incident.findById(req.params.id);
        if (!incident) return res.status(404).json({ message: "Incident not found." });

        await incident.remove();
        res.status(200).json({ message: "Incident deleted successfully." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
