import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button, Input, Textarea } from '@material-tailwind/react';
import { Link, useNavigate } from 'react-router-dom';
// import 'material-tailwind/tailwind.css';
 
const initialPatients = [
  // ICU - 3 patients
  { category: 'ICU', patient_name: 'Arjun', patient_id: 'PID1234064', age: 45, gender: 'Male', doctor_name: 'Dr. Sam', check_in: '2024-07-20', check_out: '2024-07-25', notes: 'Diabetic, needs insulin.' },
  { category: 'ICU', patient_name: null, patient_id: null, age: null, gender: null, doctor_name: null, check_in: null, check_out: null, notes: '' },
  { category: 'ICU', patient_name: 'Kavitha', patient_id: 'PID1884084', age: 60, gender: 'Female', doctor_name: 'Dr. Aravind', check_in: '2024-07-22', check_out: '2024-07-27', notes: 'Heart surgery recovery.' },
 
  // General ward - 8 patients
  { category: 'General ward', patient_name: 'Dinesh', patient_id: 'PID326872', age: 40, gender: 'Male', doctor_name: 'Dr. Bala', check_in: '2024-07-22', check_out: '2024-07-27', notes: 'Fractured leg.' },
  { category: 'General ward', patient_name: null, patient_id: null, age: null, gender: null, doctor_name: null, check_in: null, check_out: null, notes: null },
  { category: 'General ward', patient_name: 'Sita', patient_id: 'PID144566', age: 48, gender: 'Female', doctor_name: 'Dr. Sakthi', check_in: '2024-07-24', check_out: '2024-07-29', notes: 'Kidney stones.' },
  { category: 'General ward', patient_name: 'Mohan', patient_id: 'PID16764', age: 62, gender: 'Male', doctor_name: 'Dr. Shree', check_in: '2024-07-25', check_out: '2024-07-30', notes: 'High fever.' },
  { category: 'General ward', patient_name: 'Rina', patient_id: 'PID326987', age: 30, gender: 'Female', doctor_name: 'Dr. Praba', check_in: '2024-07-26', check_out: '2024-08-01', notes: 'Appendicitis recovery.' },
  { category: 'General ward', patient_name: null, patient_id: null, age: null, gender: null, doctor_name: null, check_in: null, check_out: null, notes: null },
  { category: 'General ward', patient_name: 'Priya', patient_id: 'PID542623', age: 35, gender: 'Female', doctor_name: 'Dr. Ajay', check_in: '2024-07-28', check_out: '2024-08-03', notes: 'Migraine treatment.' },
  { category: 'General ward', patient_name: null, patient_id: null, age: null, gender: null, doctor_name: null, check_in: null, check_out: null, notes: null },
 
  // VIP ward - 2 patients
  { category: 'VIP ward', patient_name: null, patient_id: null, age: null, gender: null, doctor_name: null, check_in: null, check_out: null, notes: null },
  { category: 'VIP ward', patient_name: 'Aruna', patient_id: 'PID037823', age: 45, gender: 'Female', doctor_name: 'Dr. Chandru', check_in: '2024-07-30', check_out: '2024-08-09', notes: 'Cosmetic surgery recovery.' },
 
  // Male ward - 3 patients
  { category: 'Male ward', patient_name: 'Akash', patient_id: 'PID276288', age: 35, gender: 'Male', doctor_name: 'Dr. Vijay', check_in: '2024-07-23', check_out: '2024-07-30', notes: 'High blood pressure.' },
  { category: 'Male ward', patient_name: 'Vikram', patient_id: 'PID165623', age: 50, gender: 'Male', doctor_name: 'Dr. Siva', check_in: '2024-07-24', check_out: '2024-07-31', notes: 'Gastroenteritis.' },
  { category: 'Male ward', patient_name: null, patient_id: null, age: null, gender: null, doctor_name: null, check_in: null, check_out: null, notes: null },
 
  // Female ward - 5 patients
  { category: 'Female ward', patient_name: 'Priya', patient_id: 'PID87923', age: 28, gender: 'Female', doctor_name: 'Dr. Harini', check_in: '2024-07-19', check_out: '2024-07-29', notes: 'Asthma treatment.' },
  { category: 'Female ward', patient_name: null, patient_id: null, age: null, gender: null, doctor_name: null, check_in: null, check_out: null, notes: null },
  { category: 'Female ward', patient_name: 'Neha', patient_id: 'PID02772', age: 33, gender: 'Female', doctor_name: 'Dr. Harini', check_in: '2024-07-21', check_out: '2024-07-31', notes: 'Thyroid treatment.' },
  { category: 'Female ward', patient_name: null, patient_id: null, age: null, gender: null, doctor_name: null, check_in: null, check_out: null, notes: null },
  { category: 'Female ward', patient_name: 'Nisha', patient_id: 'PID68922', age: 36, gender: 'Female', doctor_name: 'Dr. Swetha', check_in: '2024-07-23', check_out: '2024-08-02', notes: 'Ulcer treatment.' },
 
  // NICU - 2 patients
  { category: 'NICU', patient_name: 'Ajay', patient_id: 'PID826723', age: 1, gender: 'Female', doctor_name: 'Dr. Vinoth', check_in: '2024-07-24', check_out: '2024-08-05', notes: 'Premature birth, under observation.' },
  { category: 'NICU', patient_name: 'Kiran', patient_id: 'PID787828', age: 2, gender: 'Male', doctor_name: 'Dr. Arun', check_in: '2024-07-25', check_out: '2024-08-06', notes: 'Respiratory issues.' },
 
  //Operation theater
  { category: 'Operation theater', patient_name: 'Ajay', patient_id: 'PID826723', age: 1, gender: 'Female', doctor_name: 'Dr. Vinoth', check_in: '2024-07-24', check_out: '2024-08-05', notes: 'Premature birth, under observation.' },
  { category: 'Operation theater', patient_name: 'Kiran', patient_id: 'PID787828', age: 2, gender: 'Male', doctor_name: 'Dr. Arun', check_in: '2024-07-25', check_out: '2024-08-06', notes: 'Respiratory issues.' },
  { category: 'Operation theater', patient_name: null, patient_id: null, age: null, gender: null, doctor_name: null, check_in: null, check_out: null, notes: null }
];
 
 
const categories = ['ICU', 'General ward', 'VIP ward', 'Male ward', 'Female ward', 'NICU','Operation theater'];
 
const RoomAvailability = () => {
  const [patients, setPatients] = useState(initialPatients);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const role = localStorage.getItem("loggedInUser");
  const [newPatient, setNewPatient] = useState({
    category: '',
    patient_name: '',
    patient_id: '',
    age: '',
    gender: '',
    doctor_name: '',
    check_in: '',
    check_out: '',
    notes: ''
  });
 
  const navigate = useNavigate();
 
  const openDialog = (patient, category) => {
    if (!patient.patient_name) {
      navigate('/admin/booking')
      // setNewPatient({ ...newPatient, category });
      // setDialogOpen(true);
    } else {
      setSelectedPatient(patient);
      setDialogOpen(true);
    }
  };
 
  const closeDialog = () => {
    setDialogOpen(false);
    setSelectedPatient(null);
    setNewPatient({
      category: '',
      patient_name: '',
      patient_id: '',
      age: '',
      gender: '',
      doctor_name: '',
      check_in: '',
      check_out: '',
      notes: ''
    });
  };
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPatient((prev) => ({ ...prev, [name]: value }));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setPatients((prev) =>
      prev.map((patient) =>
        patient.category === newPatient.category && !patient.patient_name
          ? { ...newPatient }
          : patient
      )
    );
    closeDialog();
  };
 
  const getCategoryCount = (category) => {
    return patients.filter(patient => patient.category === category).length;
  };
 
  const getOccupiedCount = (category) => {
    return patients.filter(patient => patient.category === category && patient.patient_name).length;
  };
 
  const getAvailableCount = (category) => {
    return patients.filter(patient => patient.category === category && !patient.patient_name).length;
  };
 
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Room Availability</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="p-4 border rounded shadow-lg">
            <h2 className="text-xl text-center font-semibold mb-4">
              {category}
            </h2>
            <div className="mb-3 p-4 border rounded bg-gray-100">
              <div className="flex flex-col">
                <div className='flex '>
                  <p><strong>Total Rooms : &nbsp;</strong> </p>
                  {getCategoryCount(category)}
                </div>
                <div className='flex '>
                <p><strong>Occupied : &nbsp;</strong> </p>
                  {getOccupiedCount(category)}
                </div>
                <div className='flex '>
                <p><strong>Available : &nbsp;</strong> </p>
                  {getAvailableCount(category)}
                </div>
              </div>
            </div>
            {patients
              .filter(patient => patient.category === category)
              .map((patient, idx) => (
                <div key={idx} className="mb-4">
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faBed}
                      style={{ color: patient.patient_name ? '#e60f0f' : '#63E6BE', fontSize: '24px', cursor: 'pointer' }}
                      onClick={() => openDialog(patient, category)}
                    />
                    {patient.patient_name && (
                      <div className="ml-4">
                        <p className="font-medium">Occupied by:</p>
                        <p>{patient.patient_name}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
 
      <Dialog open={dialogOpen} handler={closeDialog}>
        <DialogHeader>{selectedPatient && selectedPatient.patient_name ? 'Patient Details' : 'Enter Patient Details'}</DialogHeader>
        <form onSubmit={handleSubmit}>
          <DialogBody divider >
            {!selectedPatient ? (
              <>
                <Input label="Patient ID" name="patient_id" value={newPatient.patient_id} onChange={handleChange} className="mb-4" required />
                <Input label="Patient Name" name="patient_name" value={newPatient.patient_name} onChange={handleChange} className="mb-4" required />
                <Input label="Age" name="age" value={newPatient.age} onChange={handleChange} className="mb-4" required />
                <Input label="Gender" name="gender" value={newPatient.gender} onChange={handleChange} className="mb-4" required />
                <Input label="Doctor Name" name="doctor_name" value={newPatient.doctor_name} onChange={handleChange} className="mb-4" required />
                <Input label="Check-In" name="check_in" value={newPatient.check_in} onChange={handleChange} className="mb-4" required />
                <Input label="Check-Out" name="check_out" value={newPatient.check_out} onChange={handleChange} className="mb-4" required />
                <Textarea label="Notes" name="notes" value={newPatient.notes} onChange={handleChange} className="mb-4" />
              </>
            ) : (
              <>
                <p><strong>Name:</strong> {selectedPatient.patient_name}</p>
                 <p><strong>ID:</strong> <Link to={`/${role}/patientDetails`} className="text-blue-500 underline">{selectedPatient.patient_id}</Link></p>
                <p><strong>Age:</strong> {selectedPatient.age}</p>
                <p><strong>Gender:</strong> {selectedPatient.gender}</p>
                <p><strong>Doctor:</strong> {selectedPatient.doctor_name}</p>
                <p><strong>Check-in:</strong> {selectedPatient.check_in}</p>
                <p><strong>Check-out:</strong> {selectedPatient.check_out}</p>
              </>
            )}
          </DialogBody>
          <DialogFooter className='justify-between'>
            <Button variant="gradient" color="red" onClick={closeDialog}>
              Cancel
            </Button>
            {!selectedPatient ? (
              <Button variant="gradient" color="green" type="submit">
                Submit
              </Button>
            ) : (
              <Button variant="gradient" color="blue" onClick={closeDialog}>
                Close
              </Button>
            )}
          </DialogFooter>
        </form>
      </Dialog>
    </div>
  );
};
 
export default RoomAvailability;