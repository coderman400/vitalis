const mongoose = require('mongoose');

const medicationSchema = new mongoose.Schema({
  patientID: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Patient' },
  drugName: { type: String, required: true },
  dosage: { type: String, required: true },
  schedule: [{ 
    time: String, 
    taken: { type: Boolean, default: false } 
  }], // Tracks multiple doses per day
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true }
});

const Medication = mongoose.model('Medication', medicationSchema);

module.exports = Medication;
