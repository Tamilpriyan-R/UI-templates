import React, { useState } from 'react';
import Styles from "../components/Styles.module.css"



const Bookingadmission = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (event) => {
        // Remove non-digit characters from the input value
        const formattedPhoneNumber = event.target.value.replace(/\D/g, '');

        // limit to 10 digit
        if (formattedPhoneNumber.length <= 10) {
            setPhoneNumber(formattedPhoneNumber)
        }

    }

    return (
        <div className="main-inner-wrapper leavemenu-wrapper">
            <div className="graph-wrapper px-4">
            </div>
            <div>
                <div className="pl-4 pb-2 pr-4 pt-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-xl ma h-auto max-h-100">
                    <div className="flex justify-between items-center gap-4">
                        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Booking / Admission</h1>
                    </div>
                    <form>
                        <div className="mb-4 flex flex-wrap -mx-2">
                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="registrationfee">
                                    Patient Id
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="registrationfee" type="text" placeholder="HOS123" disabled />
                            </div>
                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="registrationfee">
                                    Patient Name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="registrationfee" type="text" placeholder="Siva" disabled />
                            </div>


                        </div>
                        <div className="mb-4 flex flex-wrap -mx-2">
                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="registrationnumber">
                                    Height
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="registrationnumber" type="text" placeholder="Height" />
                            </div>
                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="registrationdate">
                                    Weight
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="registrationdate" type="text" placeholder="Weight" />
                            </div>
                        </div>

                        <div className="mb-4 flex flex-wrap -mx-2">
                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="address">
                                    Admission Date
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="date" />
                            </div>
                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="address">
                                    Doctor
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" placeholder="Doctor" />
                            </div>

                        </div>


                        <div className="mb-4 flex flex-wrap -mx-2">

                            <div className="w-full md:w-1/2 px-2">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="bedtype">
                                    Bed Ward
                                </label>
                                <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bedtype">
                                    <option value="">Select Bed ward</option>
                                    <option value="general">General</option>
                                    <option value="semi-private">Semi-Private</option>
                                    <option value="private">Private</option>
                                    <option value="icu">ICU</option>
                                    <option value="nicu">NICU</option>
                                    <option value="maternity">Maternity</option>
                                    <option value="pediatric">Pediatric</option>
                                </select>
                            </div>

                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="address">
                                    Bed Number
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" placeholder="Bed Number" />
                            </div>
                        </div>

                        <div className="mb-4 flex flex-wrap -mx-2">
                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="symptoms">
                                    Symptoms
                                </label>
                                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="symptoms" placeholder="Symptoms" rows="4"></textarea>
                            </div>
                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="doctornotes">
                                    Doctor Notes
                                </label>
                                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="doctornotes" placeholder="Doctor notes" rows="4"></textarea>
                            </div>
                        </div>


                        <div className="mb-4 flex justify-center">
                            <button className="bg-blue-500 bg-indigo-500  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2" type="button">
                                Submit
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

export default Bookingadmission;