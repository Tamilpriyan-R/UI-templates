import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import Advice from './AdviceMedicineForm';

const Discharge_Form = ({ isOpen, onClose }) => {
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
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-10">Discharge Report</h1>
                <form>

                    <div className="mb-4 flex flex-wrap -mx-2">
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dateFrom">
                                Consultant
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dateFrom" type="text" placeholder='Consultant ' />
                        </div>
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dateTo">
                                Reason for a Admission
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dateTo" type="text" placeholder='Reason for a Admission' />
                        </div>
                    </div>

                    <div className="mb-4 flex flex-wrap -mx-2">
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dateFrom">
                                Final Diagnosis
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dateFrom" type="text" placeholder='Final Diagnosis' />
                        </div>
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dateTo">
                                Surgery
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dateTo" type="text" placeholder='Surgery' />
                        </div>
                    </div>

                    <div className="mb-4 flex flex-wrap -mx-2">
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dateFrom">
                                Presenting Complaints
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dateFrom" type="text" placeholder='Presenting Complaints' />
                        </div>
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dateTo">
                                Clinical Findings
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dateTo" type="text" placeholder='Clinical Findings' />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 px-2">
                        <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="bookProvided">
                            Investigation Results Enclosed
                        </label>
                        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                            <input type="checkbox" name="toggle" id="bookProvided" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                            <label htmlFor="bookProvided" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                        </div>

                    </div>

                    <style jsx>{`
    .toggle-checkbox:checked {
        right: 0;
        border-color: #68D391;
    }
    .toggle-checkbox:checked + .toggle-label {
        background-color: #68D391;
    }
    .toggle-checkbox:checked + .toggle-label:before {
        transform: translateX(100%);
        background-color: #48BB78;
    }
    .toggle-label {
        width: 2.5rem;
    }
    .toggle-label:before {
        content: "";
        display: block;
        width: 1.25rem;
        height: 1.25rem;
        margin: 0.125rem;
        background: #FFF;
        border-radius: 9999px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
        transition: transform 0.2s ease-in-out;
    }
`}</style>

                    <div className="mb-4 flex flex-wrap -mx-2">
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dateFrom">
                                Course in the Hospital
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dateFrom" type="text" placeholder='Course in the Hospital ' />
                        </div>
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dateTo">
                                Operation Notes
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dateTo" type="text" placeholder='Operation Notes' />
                        </div>
                    </div>

                    <div className="mb-4 flex flex-wrap -mx-2">
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dateFrom">
                                Pediatrician Consultant
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dateFrom" type="text" placeholder='Pediatrician Consultant ' />
                        </div>
                        <div className="w-full md:w-1/2 px-2">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="maritalstatus">
                                Baby Details
                            </label>
                            <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="maritalstatus">
                                <option value="">Select Baby Details</option>
                                <option value="single">Boy</option>
                                <option value="married">Girl</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-4 flex flex-wrap -mx-2">
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dateFrom">
                               Weight
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dateFrom" type="text" placeholder='Weight' />
                        </div>
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dateTo">
                                Time of Birth
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dateTo" type="text" placeholder='Time of Birth' />
                        </div>
                    </div>

                    <div className="mb-4 flex flex-wrap -mx-2">
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dateFrom">
                              Treatment Given
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dateFrom" type="text" placeholder='Treatment Given' />
                        </div>
                    </div>

                    <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-10">Advice Medicine on Discharge</h1>

                    <Advice/>

                    <div className="mb-4 flex flex-wrap -mx-2">
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dateFrom">
                               Diet Advice
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dateFrom" type="text" placeholder='Diet Advice' />
                        </div>
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dateTo">
                                Physical Activity
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dateTo" type="text" placeholder='Physical Activity' />
                        </div>
                    </div>

                    <div className="mb-4 flex flex-wrap -mx-2">
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dateFrom">
                               Review After
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dateFrom" type="text" placeholder=' Review After' />
                        </div>
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dateTo">
                              Others
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dateTo" type="text" placeholder='Others' />
                        </div>
                    </div>

                    <div className="mb-4 flex flex-wrap -mx-2">
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dateFrom">
                              Contact
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dateFrom" type="text" placeholder='Contact' />
                        </div>
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dateTo">
                              Condition on Discharge
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dateTo" type="text" placeholder='Condition on Discharge' />
                        </div>
                    </div>

                    <div className="mb-4 flex flex-wrap -mx-2">
                       
                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dateTo">
                            Signature of the Medical Officer
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dateTo" type="text" placeholder='Signature of the Medical Officer' />
                        </div>

                        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                            <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dateFrom">
                              Name of the Medical Officer
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dateFrom" type="text" placeholder='Name of the Medical Officer' />
                        </div>
                    </div>

                    <div className="mb-4 flex flex-wrap -mx-2">
                       
                       <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                           <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dateTo">
                           Date
                           </label>
                           <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dateTo" type="date" />
                       </div>

                       <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                           <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dateFrom">
                             Time
                           </label>
                           <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dateFrom" type="text" placeholder='Time' />
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

export default Discharge_Form;
