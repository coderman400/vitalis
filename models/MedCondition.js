const mongoose = require('mongoose');

const medicalConditionSchema = new mongoose.Schema({
  conditionName: {
    type: String,
    required: true,
  },
  diagnosisDate: {
    type: Date,
    required: true,
  },
  allergySeverity: {
    type: String,
    enum: ['Mild', 'Moderate', 'Anaphylactic'],
    required: true,
  },
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
});

const MedicalCondition = mongoose.model('MedicalCondition', medicalConditionSchema);

module.exports = MedicalCondition;
