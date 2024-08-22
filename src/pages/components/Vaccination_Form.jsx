import React, { useState } from 'react';
import { saveAs } from 'file-saver';

const Vaccination_Form = ({ isOpen, onClose }) => {
    const [isDownloadPromptOpen, setDownloadPromptOpen] = useState(false);
    const [downloadFormat, setDownloadFormat] = useState('');
    const [reportName, setReportName] = useState('');

    const handleSubmit = () => {
        onClose();
    };

    const handleCancel = () => {
        onClose();
    };

    const handleDownloadClick = () => {
        setDownloadPromptOpen(true);
    };

    const handleDownloadFormatSelect = (format) => {
        setDownloadFormat(format);
        setDownloadPromptOpen(false);
        // Perform the download logic based on the selected format
        if (format === 'pdf') {
            // Logic to download the report as PDF
            generateAndDownloadFile('pdf');
        } else if (format === 'docx') {
            // Logic to download the report as DOCX
            generateAndDownloadFile('docx');
        }
        onClose();
    };

    const generateAndDownloadFile = (format) => {
        const reportContent = `Report Name: ${reportName}\nDate Range From: ... \nDate Range To: ...\n`;
        const blob = new Blob([reportContent], { type: format === 'pdf' ? 'application/pdf' : 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
        saveAs(blob, `report.${format}`);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white max-h-[550px] overflow-y-auto dark:bg-gray-800 p-6 rounded shadow-lg">
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-10">Vaccination Report</h1>
                <form>
                   
                    <div className="mb-4 flex flex-wrap -mx-2">
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dateFrom">
                                Patient ID
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dateFrom" type="text" placeholder='Patient ID' />
                        </div>
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dateTo">
                               Patient Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dateTo" type="text" placeholder='Patient Name' />
                        </div>
                    </div>

                    <div className="mb-4 flex flex-wrap -mx-2">
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dateFrom">
                               Vaccination Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dateFrom" type="text" placeholder='Vaccination Name' />
                        </div>
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dateTo">
                               Vaccination Serial No
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dateTo" type="text" placeholder='Vaccination Serial No' />
                        </div>
                    </div>

                    <div className="mb-4 flex flex-wrap -mx-2">
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dateFrom">
                               Dose No
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dateFrom" type="text" placeholder='Dose No' />
                        </div>
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dateTo">
                               Dose Given Date
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dateTo" type="date"  />
                        </div>
                    </div>

                    <div className="mb-4 flex flex-wrap -mx-2">
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dateFrom">
                               Dose Expiry Date
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dateFrom" type="date"  />
                        </div>
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dateTo">
                               Vendor Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dateTo" type="text" placeholder='Vendor Name' />
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

export default Vaccination_Form;
