const mongoose = require('mongoose');

const medicationHistorySchema = new mongoose.Schema({
  drugName: {
    type: String,
    required: true,
  },
  dosage: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
  },
  prescribingDoctor: {
    type: String,
    required: true,
  },
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
});

const MedicationHistory = mongoose.model('MedicationHistory', medicationHistorySchema);

module.exports = MedicationHistory;
