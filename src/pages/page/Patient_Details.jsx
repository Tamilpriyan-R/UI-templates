import React, { useState } from 'react';
import Styles from "../components/Styles.module.css";
import { Tabs, Tab, Card } from "@nextui-org/react";
import Admission_Table from '../components/Admission_Table';
import Consultation_Table from '../components/Consultation_Table';
import Bill_Table from '../components/Bill_Table';
import Advance_Payment_Table from '../components/Advance_Payments_Table';
import Reports_Table from '../components/Reports_Table';
import Imageorder_Table from '../components/Imageorder_Table';
import Labtest_Table from '../components/Labtest_Table';
import Vaccination_Table from '../components/Vaccination_Table';
import Clinical from '../components/ClinicalTable';
import PrescriptionForm from '../components/PrescriptionForm';
 
const Patient_Details = () => {
    const [selectedTab, setSelectedTab] = useState('Admission');
 
    const handleTabChange = (key) => {
        setSelectedTab(key);
    };
 
    return (
        <div className="main-inner-wrapper leavemenu-wrapper">
            <div className="graph-wrapper px-4">
            </div>
            <div>
                <div className="pl-4 pb-2 pr-4 pt-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-xl ma h-auto max-h-100">
                    <div className="flex justify-between items-center gap-4">
                        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Patient Details</h1>
                    </div>
                    <form>
                        <div className="mb-4 flex flex-wrap -mx-2">
                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="firstName">
                                    Register ID
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Patient Name" type="text" placeholder="Register ID" />
                            </div>
                            <div className="w-full md:w-1/2 px-2">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="lastName">
                                    Patient Name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Age" type="text" placeholder="Patient Name" />
                            </div>
                        </div>
                        <div className="mb-4 flex flex-wrap -mx-2">
                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dob">
                                    Age
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Name" type="text" placeholder="Age" />
                            </div>
                            <div className="w-full md:w-1/2 px-2">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="gender">
                                    Gender
                                </label>
                                <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="gender">
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-4 flex flex-wrap -mx-2">
                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dob">
                                    Blood Group
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Date" type="text" placeholder='Blood Group' />
                            </div>
                            <div className="w-full md:w-1/2 px-2">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="gender">
                                    Contact Number
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Reason for Visit" type="text" placeholder='Contact Number' />
                            </div>
                        </div>
                    </form>
                    <div className="flex justify-between items-center gap-4">
                        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Emergency Contact Details</h1>
                    </div>
                    <form>
                        <div className="mb-4 flex flex-wrap -mx-2">
                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="firstName">
                                    Emergency Contact Name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Patient Name" type="text" placeholder="Emergency Contact Name" />
                            </div>
                            <div className="w-full md:w-1/2 px-2">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="lastName">
                                    Emergency Contact Number
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Age" type="text" placeholder="Emergency Contact Number" />
                            </div>
                        </div>
                        <div className="mb-4 flex flex-wrap -mx-2">
                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="dob">
                                    Relationship
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Name" type="text" placeholder="Relationship" />
                            </div>
                        </div>
                    </form>
                    
                    <Tabs aria-label="Options" id={Styles.main} onSelectionChange={handleTabChange}  className="mb-4 flex flex-wrap -mx-2">
                        <Tab key="Admission" title="Admission" className={selectedTab === 'Admission' ? "text-white" : "text-black"}>
                            <Card >
                                <Admission_Table />
                            </Card>
                        </Tab>
                        <Tab key="Consultation" title="Consultation" className={selectedTab === 'Consultation' ? "text-white" : "text-black"}>
                            <Card>
                                <Consultation_Table />
                            </Card>
                        </Tab>
                        <Tab key="Bills" title="Bills" className={selectedTab === 'Bills' ? "text-white" : "text-black"}>
                            <Card>
                                <Bill_Table />
                            </Card>
                        </Tab>

                        <Tab key="Prescription" title="Prescription" className={selectedTab === 'Prescription' ? "text-black" : "text-black"}>
                            <Card>
                                <PrescriptionForm/>
                            </Card>
                        </Tab>
 
                        <Tab key="Advance Payments" title="Advance Payments" className={selectedTab === 'Advance Payments' ? "text-white" : "text-black"}>
                            <Card>
                               <Advance_Payment_Table/>
                            </Card>
                        </Tab>
 
                        <Tab key="Reports" title="Reports" className={selectedTab === 'Reports' ? "text-white" : "text-black"}>
                            <Card>
 
                                <Reports_Table/>
                             
                            </Card>
                        </Tab>
 
                        <Tab key="Imaging Orders" title="Imaging Orders" className={selectedTab === 'Imaging Orders' ? "text-white" : "text-black"}>
                            <Card>
                               <Imageorder_Table/>
                            </Card>
                        </Tab>
 
                        <Tab key="Lab Tests" title="Lab Tests" className={selectedTab === 'Lab Tests' ? "text-white" : "text-black"}>
                            <Card>
                             <Labtest_Table/>
                            </Card>
                        </Tab>
 
                        <Tab key="Vaccination" title="Vaccination" className={selectedTab === 'Vaccination' ? "text-white" : "text-black"}>
                            <Card>
                               <Vaccination_Table/>
                            </Card>
                        </Tab>
 
                        <Tab key="Surgical" title="Surgical History" className={selectedTab === 'Surgical' ? "text-white" : "text-black"}>
                            <Card>
                               <Clinical/>
                            </Card>
                        </Tab>
 
                    </Tabs>
                </div>
            </div>
        </div>
    );
};
 
export default Patient_Details;