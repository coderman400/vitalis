const mongoose = require('mongoose');

const appointmentsSchema = new mongoose.Schema({
  appointmentDate: {
    type: Date,
    required: true,
  },
  purpose: {
    type: String,
    required: true,
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

const Appointments = mongoose.model('Appointments', appointmentsSchema);

module.exports = Appointments;
