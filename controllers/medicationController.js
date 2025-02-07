const Medication = require('../models/MedicationAdherence');

// Add a new medication schedule
exports.addMedication = async (req, res) => {
  try {
    const medication = new Medication(req.body);
    await medication.save();
    res.status(201).json({ message: "Medication Schedule Added", medication });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Mark a medication as taken
exports.markMedicationAsTaken = async (req, res) => {
  try {
    const { time } = req.body;
    const medication = await Medication.findById(req.params.id);
    
    if (!medication) return res.status(404).json({ message: "Medication Not Found" });

    const scheduleItem = medication.schedule.find(item => item.time === time);
    if (scheduleItem) {
      scheduleItem.taken = true;
      await medication.save();
      res.json({ message: "Medication Taken Updated", medication });
    } else {
      res.status(400).json({ message: "Time slot not found in schedule" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get adherence report for a patient
exports.getMedicationByPatient = async (req, res) => {
  try {
    const medications = await Medication.find({ patientID: req.params.patientID });
    res.json(medications);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
