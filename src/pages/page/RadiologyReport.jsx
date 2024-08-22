import React from 'react'
import { useState } from 'react';
import Styles from "../components/Styles.module.css"
import RadiologyReportTable from '../components/RadiologyTable';
import RadiologyForm from '../components/Radiology_Form';



const RadiologyReports = () => {

    const [open, setOpen] = useState(false);

    const [isOpen, setIsOpen] = React.useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <div className="main-inner-wrapper leavemenu-wrapper" id={Styles.courseConatiner}>
            <div className="graph-wrapper px-4">
            </div>
            <div>
                <div className="pl-4 pb-2 pr-4 pt-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-xl ma h-auto max-h-100">
                    <div className="flex justify-between items-center gap-4">
                        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Radiology Reports</h1>
                        <button
                            className="py-2 px-3 bg-indigo-500 hover:bg-indigo-700 text-white text-xs font-semibold rounded-md shadow focus:outline-none transition duration-200"
                            onClick={handleOpen}
                        >
                            New Radiology Report
                        </button>
                    </div>
                    <RadiologyReportTable />
                </div>
            </div>
            <RadiologyForm isOpen={isOpen} onClose={handleClose} />
        </div>
    )
}
export default RadiologyReports
