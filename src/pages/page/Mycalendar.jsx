import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Card, CardHeader, CardBody, Dialog, DialogHeader, DialogBody, DialogFooter, Button, Select, Option } from '@material-tailwind/react';

const localizer = momentLocalizer(moment);

const allEvents = [
    {
        title: 'Body-Checkup',
        start: new Date(2024, 6, 19, 10, 0),
        end: new Date(2024, 6, 19, 10, 30),
        patient_id:'PID289088',
        patient_name: 'Ajay',
        age: 20,
        doctor_name: 'Dr.Aruna',
        status: 'booked' // Add status
    },
    {
        title: 'Fever',
        start: new Date(2024, 6, 20, 12, 0),
        end: new Date(2024, 6, 20, 13, 0),
        patient_id:'PID086563',
        patient_name: 'Suriya',
        age: 30,
        doctor_name: 'Dr.Chandru',
        status: 'ongoing' // Add status
    },
    {
        title: 'Dental Checkup',
        start: new Date(2024, 7, 21, 9, 0),
        end: new Date(2024, 7, 21, 10, 0),
        patient_id:'PID67499',
        patient_name: 'Divya',
        age: 25,
        doctor_name: 'Dr. Chandru',
        status: 'cancelled' // Add status
    },
    {
        title: 'Consultation',
        start: new Date(2024, 6, 22, 11, 0),
        end: new Date(2024, 6, 22, 12, 0),
        patient_id:'PID06634',
        patient_name: 'Harshitha',
        age: 40,
        doctor_name: 'Dr. Aruna',
        status: 'booked' // Add status
    },
    {
        title: 'Routine Checkup',
        start: new Date(2024, 7, 23, 14, 0),
        end: new Date(2024, 7, 23, 15, 0),
        patient_id:'PID08773',
        patient_name: 'Shree',
        age: 35,
        doctor_name: 'Dr. Chandru',
        status: 'ongoing' // Add status
    },
    {
        title: 'Follow-up',
        start: new Date(2024, 6, 24, 12, 0),
        end: new Date(2024, 6, 24, 12, 30),
        start: new Date(2024, 6, 24, 16, 0),
        end: new Date(2024, 6, 24, 17, 0),
        patient_id:'PID26783',
        patient_name: 'Sunil',
        age: 45,
        doctor_name: 'Dr. Aruna',
        status: 'cancelled' // Add status
    },
    {
        title: 'Follow-up',
        start: new Date(2024, 6, 24, 16, 0),
        end: new Date(2024, 6, 24, 17, 0),
        patient_id:'PID63993',
        patient_name: 'Sunil',
        age: 45,
        doctor_name: 'Dr. Aruna',
        status: 'booked' // Add status
    },
    {
        title: 'Follow-up',
        start: new Date(2024, 6, 24, 9, 0),
        end: new Date(2024, 6, 24, 9, 30),
        start: new Date(2024, 6, 24, 16, 0),
        end: new Date(2024, 6, 24, 17, 0),
        patient_id:'PID87363',
        patient_name: 'Sunil',
        age: 45,
        doctor_name: 'Dr. Aruna',
        status: 'booked' // Add status
    },

];

const statusColors = {
    booked: 'green',
    ongoing: 'yellow',
    cancelled: 'red'
};

const EventComponent = ({ event }) => (
    <div style={{ backgroundColor: statusColors[event.status], padding: '5px', borderRadius: '5px', color: 'black' }}>
        <strong>{event.title}</strong>
        <p>{event.desc}</p>
    </div>
);

const MyCalendar = () => {
    const role = localStorage.getItem("loggedInUser");
    const [open, setOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [selectedDoctor, setSelectedDoctor] = useState('All');
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const navigate = useNavigate();

    const handleSelectEvent = (event) => {
        setSelectedEvent(event);
        setOpen(true);
    };

    const handleSelectSlot = (slotInfo) => {
        navigate(`/${role}/appointment`);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedEvent(null);
    };

    const handleDoctorChange = (event) => {
        setSelectedDoctor(event.target.value);
    };

    const handleYearChange = (event) => {
        setSelectedYear(Number(event.target.value));
    };

    const filteredEvents = allEvents.filter(event => {
        const eventYear = event.start.getFullYear();
        return (selectedDoctor === 'All' || event.doctor_name === selectedDoctor) && eventYear === selectedYear;
    });

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 10 }, (_, i) => currentYear - i);

    return (
        <div className="main-inner-wrapper leavemenu-wrapper">
            <style>
                {`
                .rbc-event {
                    background-color: transparent !important;
                    color: inherit !important;
                    border: none !important;
                }
                `}
            </style>
            <div className="graph-wrapper px-4"></div>
            <div>
                <div className="pl-4 pb-2 pr-4 pt-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-xl h-auto max-h-150">
                    <div className="relative w-auto h-auto">
                        <div className="p-4" style={{ height: '600px' }}>
                            <div style={{ height: '500px' }}>
                                <div className="mb-0 flex flex-wrap -mx-2">
                                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                        <label htmlFor="doctorSelect" className="block text-gray-700 text-sm font-bold mb-2">
                                            Sort by:
                                        </label>
                                        <select
                                            id="doctorSelect"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            value={selectedDoctor}
                                            onChange={handleDoctorChange}
                                        >
                                            <option value="All">All</option>
                                            <option value="Dr. Aruna">Dr. Aruna</option>
                                            <option value="Dr. Chandru">Dr. Chandru</option>
                                        </select>
                                    </div>
                                    <div className="w-full md:w-1/2 px-2">
                                        <label htmlFor="yearSelect" className="block text-gray-700 text-sm font-bold mb-2">
                                            Year:
                                        </label>
                                        <select
                                            id="yearSelect"
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            value={selectedYear}
                                            onChange={handleYearChange}
                                        >
                                            {years.map(year => (
                                                <option key={year} value={year}>
                                                    {year}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <Calendar
                                    localizer={localizer}
                                    events={filteredEvents}
                                    startAccessor="start"
                                    endAccessor="end"
                                    views={['month', 'week', 'day']}
                                    defaultView="month"
                                    selectable
                                    onSelectEvent={handleSelectEvent}
                                    onSelectSlot={handleSelectSlot}
                                    components={{ event: EventComponent }}
                                    style={{ height: '100%' }}
                                />
                            </div>
                        </div>
                        <Dialog open={open} onClose={handleClose}>
                            <DialogHeader>Visit Details</DialogHeader>
                            <DialogBody>
                                {selectedEvent && (
                                    <div>
                                        <h3 className="text-lg font-semibold">{selectedEvent.title}</h3>
                                        <p><strong>Patient Id:</strong> {selectedEvent.patient_id || 'N/A'}</p>
                                        <p><strong>Patient Name:</strong> {selectedEvent.patient_name || 'N/A'}</p>
                                        <p><strong>Age:</strong> {selectedEvent.age || 'N/A'}</p>
                                        <p><strong>Doctor Name:</strong> {selectedEvent.doctor_name || 'N/A'}</p>
                                        <p><strong>Start:</strong> {selectedEvent.start.toLocaleString()}</p>
                                        <p><strong>End:</strong> {selectedEvent.end.toLocaleString()}</p>
                                    </div>
                                )}
                            </DialogBody>
                            <DialogFooter className="justify-between">
                                <Button color="green" onClick={() => navigate(`/${role}/patientDetails`)}>
                                    View Patient Details
                                </Button>
                                <Button color="blue" onClick={handleClose}>Close</Button>
                            </DialogFooter>
                        </Dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCalendar;
