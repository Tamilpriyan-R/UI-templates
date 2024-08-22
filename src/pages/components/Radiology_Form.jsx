

import React, { useState } from 'react';

const RadiologyForm = ({ isOpen, onClose }) => {


    const handleSubmit = () => {
        onClose();
    };

    const handleCancel = () => {
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white max-h-[550px]  overflow-y-auto dark:bg-gray-800 p-6 rounded shadow-lg">
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-10" >New Radiology Test</h1>
                <form>
                    <div className="mb-4 flex flex-wrap -mx-2">
                        <div className="w-full md:w-1/2 px-2">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="itemCategory">
                                Patient Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder='Enter Name' type="text" />

                        </div>
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="itemName">
                                Patient ID
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder='Enter Patient ID' type="text" />

                        </div>
                    </div>

                    <div className="mb-4 flex flex-wrap -mx-2">
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="quantity">
                                Test Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder='Enter Test Name' id="quantity" type="text" />
                        </div>
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="quantity">
                                Test Type
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="quantity" type="text" placeholder='Enter Type' />
                        </div>

                    </div>
                    <div className="mb-4 flex flex-wrap -mx-2">
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">
                                Category Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  placeholder='Enter Category Name' id="purchasePrice" type="text" />
                        </div>
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="createdOn">
                                Method
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="createdOn" type="text"  placeholder='Enter Method' />
                        </div>
                    </div>



                    <div className="mb-4 flex justify-center mt-2">
                 
                    <button className="bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2" type="file" >
                            Upload
                            
                        </button>
                        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2" type="button" onClick={handleSubmit}>
                            Save
                        </button>
                        <button className="bg-red-300 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2" type="button" onClick={handleCancel}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default RadiologyForm;

