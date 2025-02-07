const mongoose = require('mongoose');

const familyMedicalHistorySchema = new mongoose.Schema({
  relation: {
    type: String,
    required: true,
  },
  conditionName: {
    type: String,
    required: true,
  },
  geneticRiskFactor: {
    type: Boolean,
    required: true,
  },
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
});

const FamilyMedicalHistory = mongoose.model('FamilyMedicalHistory', familyMedicalHistorySchema);

module.exports = FamilyMedicalHistory;
