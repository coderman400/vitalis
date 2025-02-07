const mongoose = require('mongoose');

const labResultsSchema = new mongoose.Schema({
  testName: {
    type: String,
    required: true,
  },
  result: {
    type: String,
    required: true,
  },
  dateOfTest: {
    type: Date,
    required: true,
  },
  labName: {
    type: String,
    required: true,
  },
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
});

const LabResults = mongoose.model('LabResults', labResultsSchema);

module.exports = LabResults;
