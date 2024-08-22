import React from 'react';

const ReturnItemForm = ({ isOpen, onClose }) => {

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
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-10" > Return item</h1>
                <form>
                    <div className="mb-4 flex flex-wrap -mx-2">
                        <div className="w-full md:w-1/2 px-2">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="itemCategory">
                                Item Category
                            </label>
                            <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="itemCategory">
                                <option value="">Select Category</option>
                                <option value="antibiotic">Antibiotic</option>
                                <option value="analgesic">Analgesic</option>
                                <option value="antiviral">Antiviral</option>
                                <option value="antifungal">Antifungal</option>
                                <option value="vitamin">Vitamin</option>
                                <option value="supplement">Supplement</option>
                            </select>
                        </div>
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="itemName">
                                Item Name
                            </label>
                            <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="itemName">
                                <option value="">Select Item</option>
                                <option value="syringes">Syringes</option>
                                <option value="amoxicillin">Amoxicillin</option>
                                <option value="ibuprofen">Ibuprofen</option>
                                <option value="acyclovir">Acyclovir</option>
                                <option value="fluconazole">Fluconazole</option>
                                <option value="vitaminC">Vitamin C</option>
                                <option value="fishOil">Fish Oil</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-4 flex flex-wrap -mx-2">
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="quantity">
                                Isuued to
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="quantity" type="text" />
                        </div>
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="quantity">
                            Issued by
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="quantity" type="text" />
                        </div>

                    </div>
                    <div className="mb-4 flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="createdOn">
                                Issued Date
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="createdOn" type="date" />
                        </div>

                        
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="quantity">
                                Quantity
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="quantity" type="number" />
                        </div>
                    </div>

                    <div className="mb-4 flex flex-wrap -mx-2">

                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="quantity">
                                Patient Id
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="quantity" type="text" />
                        </div>
                        
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="createdOn">
                                Return Date
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="createdOn" type="date" />
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
export default ReturnItemForm;

