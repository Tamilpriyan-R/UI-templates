import React, { useState } from 'react';
import Styles from "../components/Styles.module.css"
import IPDetailsTable from '../components/IPDetailsTable';
 
const IPdetailsPage = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
 
    return (
        <div className="main-inner-wrapper leavemenu-wrapper" id={Styles.courseConatiner}>
            <div className="graph-wrapper px-4">
            </div>
            <div>
                <div className="pl-4 pb-2 pr-4 pt-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-xl ma h-auto max-h-100">
                    <div className="flex justify-between items-center gap-4">
                        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">IP Patient Details</h1>
                    </div>
                    <IPDetailsTable/>
                </div>
            </div>
        </div>
    );
};
 
export default IPdetailsPage;