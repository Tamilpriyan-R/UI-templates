import React from 'react';

const NewAdv_Bill = () => {
    return (
        <div>
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">New Advance Payments</h1>
            <form>
                <div className="mb-4 flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                        <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="registerId">
                            Patient ID
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="registerId" type="text" placeholder="Register ID" />
                    </div>
                    <div className="w-full md:w-1/2 px-2">
                        <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="patientName">
                            Patient Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="patientName" type="text" placeholder="Patient Name" />
                    </div>
                </div>
                <div className="mb-4 flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                        <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="age">
                            Receipt No
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="age" type="text" placeholder="12234" />
                    </div>
                    <div className="w-full md:w-1/2 px-2">
                        <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" placeholder='$'>
                            Amount
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="amount" type="text" placeholder="₹" />

                        {/* <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="gender">
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select> */}
                    </div>
                </div>
                <div className="mb-4 flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                        <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="bloodGroup">
                            Date
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bloodGroup" type="date" placeholder="Enter Date" />
                    </div>

                  



                    {/* <div className="w-full md:w-1/2 px-2">
                        <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="contactNumber">
                            Contact Number
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="contactNumber" type="text" placeholder="Contact Number" />
                    </div> */}
                </div>
                
                
                {/* <div className="mb-4 flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                        <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="bloodGroup">
                            Blood Group
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bloodGroup" type="text" placeholder="Blood Group" />
                    </div>
                    <div className="w-full md:w-1/2 px-2">
                        <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="contactNumber">
                            Contact Number
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="contactNumber" type="text" placeholder="Contact Number" />
                    </div>
                </div> */}
                
             
                <div className="mt-8 flex justify-center">
                    <button className="bg-blue-500 bg-indigo-500  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2" type="button">Save</button>
                    <button className="bg-red-300 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2" type="button">Cancel</button>
                </div>
            </form>
            {/* <div className="flex justify-between items-center gap-4">
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Emergency Contact Details</h1>
            </div>
            <form>
                <div className="mb-4 flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                        <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="emergencyContactName">
                            Emergency Contact Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="emergencyContactName" type="text" placeholder="Emergency Contact Name" />
                    </div>
                    <div className="w-full md:w-1/2 px-2">
                        <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="emergencyContactNumber">
                            Emergency Contact Number
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="emergencyContactNumber" type="text" placeholder="Emergency Contact Number" />
                    </div>
                </div>

                <div className="mb-4 flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                        <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="relationship">
                            Relationship
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="relationship" type="text" placeholder="Relationship" />
                    </div>
                </div>
            </form> */}
        </div>
    );
};

export default NewAdv_Bill;
