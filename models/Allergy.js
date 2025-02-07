const mongoose = require('mongoose');

const allergySchema = new mongoose.Schema({
  patientID: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Patient', 
    required: true 
  },
  name: { 
    type: String, 
    required: true 
  },
  severityLevel: { 
    type: String, 
    enum: ['Mild', 'Moderate', 'Anaphylactic'], 
    required: true 
  }
});

const Allergy = mongoose.model('Allergy', allergySchema);

module.exports = Allergy;
