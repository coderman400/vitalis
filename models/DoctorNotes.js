const mongoose = require('mongoose');

const doctorNotesSchema = new mongoose.Schema({
  notes: {
    type: String,
    required: true,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true,
  },
});

const DoctorNotes = mongoose.model('DoctorNotes', doctorNotesSchema);

module.exports = DoctorNotes;
