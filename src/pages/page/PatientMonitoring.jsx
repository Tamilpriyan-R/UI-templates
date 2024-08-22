import React, { useState } from 'react';
import PatientMonitoringTable from '../components/PatientMonitoringTable';



const PatientMonitoringPage = () => {
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
                        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Patient Monitoring</h1>
                    </div>
                    <form>
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
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="address">
                                    Patient Name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" placeholder="Patient Name" />
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
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="phone">
                                    Phone
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" value={phoneNumber} onChange={handlePhoneNumberChange}
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="012-3456-789" max={10} />

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

                    </form>
                    <PatientMonitoringTable />
                </div>
            </div>
        </div>


    );
};

export default PatientMonitoringPage;