import React from 'react';

const LabForm = ({ isOpen, onClose }) => {

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
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-10" >Lab Report</h1>
                <form>
                    <div className="mb-4 flex flex-wrap -mx-2">
                        <div className="w-full md:w-1/2 px-2">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="itemCategory">
                                Patient name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="quantity" type="text" />
                        </div>
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="itemName">
                                Patient ID
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="quantity" type="text" />
                        </div>
                    </div>

                    <div className="mb-4 flex flex-wrap -mx-2">
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="quantity">
                                Test name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="quantity" type="text" />
                        </div>
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="quantity">
                                Test type
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="quantity" type="text" />
                        </div>

                    </div>
                    <div className="mb-4 flex flex-wrap -mx-2">
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="purchasePrice">
                                Category name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="purchasePrice" type="text" />
                        </div>
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="createdOn">
                                Method
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="createdOn" type="text" />
                        </div>
                    </div>

                    <div className="mb-4 md:w-1/2 px-2 mb-4 md:mb-0">
                        <div className="w-full px-2 mb-4 ">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="description" style={{position:'relative', right:'15px'}}>
                                Collected unit
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline "id="createdOn" type="text" style={{position:'relative', right:'15px', width:'285px'}}/>
                        </div>
                    </div>

                    

                    <div className="mb-4 flex flex-wrap -mx-2 mt-2" style={{border:'1px solid #747272' , borderRadius:'10px'}}>
                        <div className="w-full md:w-1/3 px-2 mb-4 md:mb-2">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="parameterName">
                                Parameter name
                            </label>
                            <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="parameterName">
                                <option value="hemoglobin">Hemoglobin</option>
                                <option value="totalRBS">Total RBS count</option>
                                <option value="sugar">Sugar</option>
                                <option value="ph">pH</option>
                                <option value="urineAnalysis">Urine analysis</option>
                            </select>
                        </div>
                        <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="patientResult">
                                Patient result
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="patientResult" type="text" />
                        </div>
                        <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="referenceRange">
                                Reference range
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="referenceRange" type="text" />
                        </div>
                    </div>
                    



                    <div className="mb-4 flex justify-center mt-2">
                        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2" type="button" onClick={handleSubmit}>
                            Submit
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
export default LabForm;

