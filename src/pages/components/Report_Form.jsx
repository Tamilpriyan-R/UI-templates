import React, { useState } from 'react';
import { saveAs } from 'file-saver';

const ReportForm = ({ isOpen, onClose }) => {
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
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-10">Report Details</h1>
                <form>
                    <div className="mb-4 flex flex-wrap -mx-2">
                        <div className="w-full px-2 mb-4">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="reportName">
                                Report Name
                            </label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="reportName"
                                value={reportName}
                                onChange={(e) => setReportName(e.target.value)}
                            >
                                <option value="">Select Category</option>
                                <option value="Invoice Report">Invoice Report</option>
                                <option value="Patient Registration Report">Patient Registration Report</option>
                                <option value="Collection Report">Collection Report</option>
                                <option value="Financial Report">Financial Report</option>
                                <option value="Advance Payment Report">Advance Payment Report</option>
                                <option value="Advance Payment Report">User Activity Report</option>
                                <option value="Advance Payment Report">Monthly Sale</option>
                                <option value="Advance Payment Report">Daily Sale</option>
                                <option value="Advance Payment Report">Monthly Expense</option>
                                <option value="Advance Payment Report">Daily Expense</option>




                            </select>
                        </div>
                    </div>

                    <div className="mb-4 flex flex-wrap -mx-2">
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dateFrom">
                                Date Range From
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dateFrom" type="date" />
                        </div>
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dateTo">
                                Date Range To
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dateTo" type="date" />
                        </div>
                    </div>

                    <div className="mb-4 flex justify-center mt-2">
                        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2" type="button" onClick={handleSubmit}>
                            View
                        </button>
                        <button className="bg-red-300 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2" type="button" onClick={handleDownloadClick}>
                            Download
                        </button>
                    </div>
                </form>
            </div>

            {isDownloadPromptOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Select File Format</h2>
                        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mx-2" onClick={() => handleDownloadFormatSelect('pdf')}>
                            PDF
                        </button>
                        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded mx-2" onClick={() => handleDownloadFormatSelect('docx')}>
                            DOCX
                        </button>
                        <button className="bg-red-500 text-white font-bold py-2 px-4 rounded mx-2" onClick={() => setDownloadPromptOpen(false)}>
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReportForm;
