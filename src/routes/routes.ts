import express, { Request, Response } from 'express';
import Patient from '../db/models/task6';
const patientRoute = express.Router();

patientRoute.use(express.json());

// GET all patients
patientRoute.get('/patients', async (req: Request, res: Response) => {
  try {
    const patients = await Patient.findAll();
    res.json(patients);
  } catch (error) {
    console.error('Error fetching patients:', error);
    res.status(500).json({ error: (error as Error).message });
  }
});

// POST a new patient
patientRoute.post('/patients', async (req: Request, res: Response) => {
  const { fullName, age, diagnosis } = req.body;

  try {
    const newPatient = await Patient.create({ fullName, age, diagnosis });
    res.status(201).json(newPatient);
  } catch (error) {
    console.error('Error creating patient:', error);
    res.status(500).json({ error: (error as Error).message });
  }
});

// PUT update a patient by their patientId
patientRoute.put('/patients/:patientId', async (req: Request, res: Response) => {
  const { patientId } = req.params;
  const { fullName, age, diagnosis } = req.body;

  try {
    const patientToUpdate = await Patient.findOne({ where: { patientId } });

    if (!patientToUpdate) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    // Update only the fields provided
    if (fullName) patientToUpdate.fullName = fullName;
    if (age) patientToUpdate.age = age;
    if (diagnosis) patientToUpdate.diagnosis = diagnosis;
    
    await patientToUpdate.save();
    res.json(patientToUpdate);
  } catch (error) {
    console.error('Error updating patient:', error);
    res.status(500).json({ error: (error as Error).message });
  }
});

// DELETE a patient by their ID
patientRoute.delete('/patients/:patientId', async (req: Request, res: Response) => {
  const { patientId } = req.params;

  try {
    const patientToDelete = await Patient.findByPk(patientId);

    if (!patientToDelete) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    await patientToDelete.destroy();
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting patient:', error);
    res.status(500).json({ error: (error as Error).message });
  }
});

export default patientRoute;
