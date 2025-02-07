const mongoose = require('mongoose');

const mentalHealthHistorySchema = new mongoose.Schema({
  conditionName: {
    type: String,
    required: true,
  },
  therapyReceived: {
    type: Boolean,
    required: true,
  },
  medications: {
    type: String,
  },
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
});

const MentalHealthHistory = mongoose.model('MentalHealthHistory', mentalHealthHistorySchema);

module.exports = MentalHealthHistory;
