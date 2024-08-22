import React, { useState } from 'react';
import Styles from "../components/Styles.module.css"
import { useNavigate } from "react-router-dom";
import PatientClinicalHistory from './PatientClinicalHistory';



const PatientRegisterForm = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const role = localStorage.getItem("loggedInUser")

    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (event) => {
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
        navigate(`/${role}/patientClinicalHistory`);
    };

    return (
        <div className="main-inner-wrapper leavemenu-wrapper">
            <div className="graph-wrapper px-4">
            </div>
            <div>
                <div className="pl-4 pb-2 pr-4 pt-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-xl ma h-auto max-h-100">
                    <div className="flex justify-between items-center gap-4">
                        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Registration Details</h1>
                    </div>
                    <form>
                        <div className="mb-4 flex flex-wrap -mx-2">
                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="registrationfee">
                                    Registration Fee
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="registrationfee" type="text" placeholder="Registration Fee" />
                            </div>

                            <div className="w-full md:w-1/2 px-2">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="bookProvided">
                                    Book Provided
                                </label>
                                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                    <input type="checkbox" name="toggle" id="bookProvided" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                                    <label htmlFor="bookProvided" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                                </div>
                                {/* <span className="text-gray-700 dark:text-gray-200 text-sm">No</span>
    <span className="ml-2 text-gray-700 dark:text-gray-200 text-sm">Yes</span> */}
                            </div>

                            <style jsx>{`
    .toggle-checkbox:checked {
        right: 0;
        border-color: #68D391;
    }
    .toggle-checkbox:checked + .toggle-label {
        background-color: #68D391;
    }
    .toggle-checkbox:checked + .toggle-label:before {
        transform: translateX(100%);
        background-color: #48BB78;
    }
    .toggle-label {
        width: 2.5rem;
    }
    .toggle-label:before {
        content: "";
        display: block;
        width: 1.25rem;
        height: 1.25rem;
        margin: 0.125rem;
        background: #FFF;
        border-radius: 9999px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
        transition: transform 0.2s ease-in-out;
    }
`}</style>

                        </div>
                        <div className="mb-4 flex flex-wrap -mx-2">
                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="registrationnumber">
                                    Registration Number
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="registrationnumber" type="text" placeholder="Registration Number" />
                            </div>
                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="registrationdate">
                                    Registration Date
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="registrationdate" type="date" />
                            </div>
                        </div>

                        <div className="mb-4 flex flex-wrap -mx-2">
                            
                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="registrationnumber">
                                    Unique Healthcare ID
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="registrationnumber" type="text" placeholder="Unique Healthcare ID" />
                            </div>

                        </div>


                    </form>

                    <div className="flex justify-between items-center gap-4">
                        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Patient Details</h1>
                    </div>
                    <form>
                        <div className="mb-4 flex flex-wrap -mx-2">
                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="firstName">
                                    First Name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="First Name" />
                            </div>
                            <div className="w-full md:w-1/2 px-2">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="lastName">
                                    Last Name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder="Last Name" />
                            </div>
                        </div>

                        <div className="mb-4 flex flex-wrap -mx-2">
                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="address">
                                    Address
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" placeholder="Address" />
                            </div>
                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="phone">
                                    Phone
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" value={phoneNumber} onChange={handlePhoneNumberChange}
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="012-3456-789" max={10} />

                            </div>
                        </div>


                        <div className="mb-4 flex flex-wrap -mx-2">

                            <div className="w-full md:w-1/2 px-2">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="maritalstatus">
                                    Marital Status
                                </label>
                                <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="maritalstatus">
                                    <option value="">Select Marital Status</option>
                                    <option value="single">Single</option>
                                    <option value="married">Married</option>
                                </select>
                            </div>

                            <div className="w-full md:w-1/2 px-2">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="gender">
                                    Gender
                                </label>
                                <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="gender">
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>


                        <div className="mb-4 flex flex-wrap -mx-2">
                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dob">
                                    DOB
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dob" type="date" placeholder="DOB" />
                            </div>
                            <div className="w-full md:w-1/2 px-2">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="age">
                                    Age
                                </label>
                                <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="age">
                                    <option value="">Select Age</option>
                                    {Array.from({ length: 80 }, (_, i) => i + 1).map(age => (
                                        <option key={age} value={age}>{age} Year</option>
                                    ))}
                                </select>
                            </div>

                        </div>

                        <div className="mb-4 flex flex-wrap -mx-2">
                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="bloodgroup">
                                    Blood Group
                                </label>
                                <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="maritalstatus">
                                    <option value="">Select Blood Group</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>

                                </select>

                            </div>
                            <div className="w-full md:w-1/2 px-2">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="fathername">
                                    Father/Spouse Name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fathername" type="text" placeholder="Father/Spouse Name" />
                            </div>
                        </div>

                        <div className="mb-4 flex justify-center">
                            <button className="bg-blue-500 bg-indigo-500  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2" type="button" onClick={handleSubmit}>
                                Next
                            </button>
                            <button className="bg-red-300 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2" type="button">
                                Cancel
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>


    );
};

export default PatientRegisterForm;
