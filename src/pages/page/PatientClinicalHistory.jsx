import React, { useState } from 'react';
import Styles from "../components/Styles.module.css"

const PatientClinicalHistory = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    return (
        <div className="main-inner-wrapper leavemenu-wrapper">
            <div className="graph-wrapper px-4">
            </div>
            <div>
                <div className="pl-4 pb-2 pr-4 pt-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-xl ma h-auto max-h-100">
                    <div className="flex justify-between items-center gap-4">
                        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Patient Surgical History</h1>
                    </div>
                    <form>
                        <div className="mb-4 flex flex-wrap -mx-2">
                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="nameofthesurgery">
                                    Name of the surgery
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nameofthesurgery" type="text" placeholder="Name of the surgery" />
                            </div>

                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="condition">
                                    Condition
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="condition" type="text" placeholder="Condition" />
                            </div>
                        </div>
                        <div className="mb-4 flex flex-wrap -mx-2">
                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="hospitalname">
                                    Hospital Name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="hospitalname" type="text" placeholder="Hospital Name" />
                            </div>
                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="place">
                                    Place
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="place" type="text" placeholder="Place" />
                            </div>
                            
                        </div>
                        <div className="mb-4 flex flex-wrap -mx-2">
                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dateofthesurgery">
                                    Date of the surgery
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dateofthesurgery" type="date" />
                            </div>
                        </div>

                        <div className="mb-4 flex justify-center">
                            <button className="bg-blue-500 bg-indigo-500  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2" type="button" >
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

export default PatientClinicalHistory;
