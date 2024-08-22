import React from 'react';
import BillItem from './Bill_ItemTable';

const Bill_Form = () => {
    return (
        <div>
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Bill Details</h1>
            <form>
                <div className="mb-4 flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                        <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="registerId">
                            Patient ID
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="registerId" type="text" placeholder="Patient ID" />
                    </div>
                    <div className="w-full md:w-1/2 px-2">
                        <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="patientName">
                            Bill Date
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="patientName" type="date" />
                    </div>
                </div>
                <div className="mb-4 flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                        <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="age">
                            Patient Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="age" type="text" placeholder="Patient Name" />
                    </div>

                    <div className="w-full md:w-1/2 px-2">
                        <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="contactNumber">
                            Contact Number
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="contactNumber" type="text" placeholder="Contact Number" />
                    </div>

                </div>
                <div className="mb-4 flex flex-wrap -mx-2">
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
                    <div className="w-full md:w-1/2 px-2">
                        <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="contactNumber">
                            DOB
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="contactNumber" type="date" />
                    </div>
                </div>
                <div className="mb-4 flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                        <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="bloodGroup">
                            Doctor Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bloodGroup" type="text" placeholder="Doctor Name" />
                    </div>
                    <div className="w-full md:w-1/2 px-2">
                        <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="contactNumber">
                            Department
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="contactNumber" type="text" placeholder="Department" />
                    </div>
                </div>

                <div className="mb-4 flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                        <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="bloodGroup">
                            Admission Date
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bloodGroup" type="date" />
                    </div>
                    <div className="w-full md:w-1/2 px-2">
                        <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="contactNumber">
                            Discharge Date
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="contactNumber" type="date" />
                    </div>
                </div>

                <div className="w-full md:w-1/2 px-2">
                    <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="contactNumber">
                        Total Days
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="contactNumber" type="text" placeholder='Total Days' />
                </div>
            </form>

            <BillItem />

            
        </div>


    );
};

export default Bill_Form;
