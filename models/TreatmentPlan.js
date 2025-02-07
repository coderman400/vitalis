const mongoose = require('mongoose');

const treatmentPlanSchema = new mongoose.Schema({
  planDescription: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true,
  },
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
});

const TreatmentPlan = mongoose.model('TreatmentPlan', treatmentPlanSchema);

module.exports = TreatmentPlan;
