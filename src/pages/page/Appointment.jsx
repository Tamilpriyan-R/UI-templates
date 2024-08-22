import React, { useState } from 'react';
import Styles from "../components/Styles.module.css"
import { useNavigate } from "react-router-dom";

const AppointmentForm = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const role = localStorage.getItem("loggedInUser")

    const [phoneNumber, setPhoneNumber] = useState('');

    const handleChange = (event) => {
        // Remove non-digit characters from the input value
        const formattedPhoneNumber = event.target.value.replace(/\D/g, '');

        // limit to 10 digit
        if (formattedPhoneNumber.length <= 10) {
            setPhoneNumber(formattedPhoneNumber)
        }

    }

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/${role}/patientSearch`);
    }

    return (
        <div className="main-inner-wrapper leavemenu-wrapper">
            <div className="graph-wrapper px-4">
            </div>
            <div>
                <div className="pl-4 pb-2 pr-4 pt-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-xl ma h-auto max-h-100">
                    <div className="flex justify-between items-center gap-4">
                        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Appointment Form</h1>
                    </div>
                    <form>

                        <div className="mb-4 flex flex-wrap -mx-2">
                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="firstName">
                                    Patient ID
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Patient Name" type="text" placeholder="Patient ID" />
                            </div>

                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="firstName">
                                    Patient Name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Patient Name" type="text" placeholder="Patient Name" />
                            </div>

                        </div>
                        <div className="mb-4 flex flex-wrap -mx-2">

                            <div className="w-full md:w-1/2 px-2">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="lastName">
                                    Age
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Age" type="text" placeholder="Age" />
                            </div>

                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dob">
                                    Father's / Spouse Name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Name" type="text" placeholder="Father's / Spouse Name" />
                            </div>
                        </div>
                        <div className="mb-4 flex flex-wrap -mx-2">

                            <div className="w-full md:w-1/2 px-2">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="gender">
                                    Phone Number
                                </label>

                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Phone Number" type="tel" max={10} pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' value={phoneNumber} onChange={handleChange} placeholder="Phone Number" />

                            </div>

                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dob">
                                    Date
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Date" type="date" />
                            </div>
                        </div>

                        <div className="mb-4 flex flex-wrap -mx-2">

                            <div className="w-full md:w-1/2 px-2">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="gender">
                                    Reason for Visit
                                </label>

                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Reason for Visit" type="text" placeholder='Reason for Visit' />

                            </div>

                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dob">
                                    Time
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Date" type="text" placeholder='Time' />
                            </div>
                        </div>

                        <div className="mb-4 flex justify-center">
                            <button className="bg-blue-500 bg-indigo-500  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2" type="button">
                                Submit
                            </button>
                            <button onClick={handleSubmit} className="bg-red-300 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2" type="button">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    );
};

export default AppointmentForm;
