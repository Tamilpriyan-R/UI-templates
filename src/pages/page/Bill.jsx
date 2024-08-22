import React, { useState } from 'react';
import Styles from "../components/Styles.module.css";
import Bill_Table from '../components/Bill_Table';
import { useNavigate } from "react-router-dom";

const Bill = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const role = localStorage.getItem("loggedInUser");

    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/${role}/billform`);
    };

    return (
        <div className="main-inner-wrapper leavemenu-wrapper" id={Styles.courseConatiner}>
            <div className="graph-wrapper px-4">
            </div>
            <div>
                <div className="pl-4 pb-2 pr-4 pt-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-xl ma h-auto max-h-100">
                    <div className="flex justify-between items-center gap-4">
                        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Billing Details</h1>
                        <button
                            className="py-2 px-3 bg-indigo-500 hover:bg-indigo-700 text-white text-xs font-semibold rounded-md shadow focus:outline-none transition duration-200"
                            onClick={handleSubmit}
                        >
                            Add Bill
                        </button>
                    </div>
                    <Bill_Table />
                </div>
            </div>
            {/* <Modal open={open} onClose={handleOpen}>
                <Bill_Form />
            </Modal> */}
        </div>
    );
};

export default Bill;
