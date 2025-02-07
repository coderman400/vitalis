const express = require('express');
const router = express.Router();
const medicationController = require('../controllers/medicationController');

// Routes
router.post('/', medicationController.addMedication);
router.put('/:id/take', medicationController.markMedicationAsTaken);
router.get('/:patientID', medicationController.getMedicationByPatient);

module.exports = router;
