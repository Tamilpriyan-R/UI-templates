import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import "./index.css";
import AdjustFontSize from "./context/AdjustFontSize";
//                    New
import SignIn from "./pages/auth/sign-in";
import MainLayout from "./widgets/layout/Layout"
import Home from "./pages//dashboard/home"
import AppointmentForm from "./pages/page/Appointment";
import MyCalendar from "./pages/page/Mycalendar";
import PatientRegisterForm from "./pages/page/PatientRegistrationForm";
import IPdetailsPage from "./pages/page/IPdetailsPage";
import PatientBooking from "./pages/dashboard/PatientBooking";
import InvoiceReport from "./pages/dashboard/InvoiceReport";
import Patient_Details from "./pages/page/Patient_Details";
import Patient from "./pages/page/Patient_Search";
import RoomAvailable from "./pages/dashboard/RoomAvailable";
import PatientMonitoring from "./pages/page/PatientMonitoring";
import Notifications2 from "./pages/dashboard/notifications2";
import Reports_Table from "./pages/components/Reports_Table";
import Labtest_Table from "./pages/components/Labtest_Table";
import Imageorder_Table from "./pages/components/Imageorder_Table";
import Advance_Payment_Table from "./pages/components/Advance_Payments_Table";
import Vaccination_Table from "./pages/components/Vaccination_Table";
import PatientClinicalHistory from "./pages/page/PatientClinicalHistory";
import Bookingadmission from "./pages/page/BookingAdmission";
import Bill from "./pages/page/Bill";
import Bill_Form from "./pages/components/Bill_Form";
import Payments from "./pages/page/Payments";
import SupplyPurchaseEntry from "./pages/page/SupplyPurchaseEntry";
import MedicinePurchaseEntry from "./pages/page/MedicineSupplyEntry";
import IssuedItem from "./pages/page/IssuedItems";
import ReturnItem from "./pages/page/ReturnItem";
import OPDetailsPage from "./pages/page/OPDetailsPage";
import Report from "./pages/page/Reports"
import Vaccination from "./pages/page/Vaccination";
import InventoryManagement from "./pages/page/InventoryManagement";
import LabReports from "./pages/page/LabReports";
import RadiologyReports from "./pages/page/RadiologyReport";
import EMR from "./pages/page/EMR";
import Discharge from "./pages/page/Discharge";
import Pharmacy from "./pages/page/Pharmacy";
 
 
function App() {
  return (
    <>
      <AdjustFontSize />
      <Routes>
        <Route path="/" element={<SignIn />} />
 
        {/* For Admin Login  && Doctor Login */}
 
        <Route path={"/admin"} element={<MainLayout />} >
          <Route path="dashboard" element={<Home />} />
          <Route path="patientSearch" element={<Patient />} />
          <Route path="appointment" element={<AppointmentForm />} />
          <Route path="patientRegister" element={<PatientRegisterForm />} />
          <Route path="patientClinicalHistory" element={<PatientClinicalHistory />} />
          <Route path="schedule" element={<MyCalendar />} />
          <Route path="outPatient" element={<OPDetailsPage />} />
          <Route path="inPatient" element={<IPdetailsPage />} />
          <Route path="booking" element={<Bookingadmission />} />
          <Route path="roomAvailability" element={<RoomAvailable />} />
          <Route path="patientDetails" element={<Patient_Details />} />
          <Route path="patientMonitoring" element={<PatientMonitoring />} />
          <Route path="report" element={<Report />} />
          <Route path="invoiceReport" element={<InvoiceReport />} />
          <Route path="patientRegistrationReport" element={<Patient_Details />} />
          <Route path="collectionReport" element={<Notifications2 />} />
          <Route path="financialReporting" element={<Notifications2 />} />
          <Route path="issuedItems" element={<IssuedItem />}/>
          <Route path="returnedItems" element={<ReturnItem />}/>
          <Route path="inventoryManagement" element={<InventoryManagement />} />
          <Route path="supplyPurchaseEntry" element={<SupplyPurchaseEntry />} />
          <Route path="medicinePurchaseEntry" element={<MedicinePurchaseEntry />} />
          <Route path="emr" element={<EMR />} />
          <Route path="labReports" element={<LabReports />} />
          <Route path="radiologyReport" element={<RadiologyReports />} />
          <Route path="precription" element={<Notifications2 />} />
          <Route path="consultationRecords" element={<Notifications2 />} />
          <Route path="dischargeReports" element={<Discharge/>} />
          <Route path="bill" element={<Bill />} />
          <Route path="billform" element={<Bill_Form />} />
          <Route path="payments" element={<Payments />} />
          <Route path="vaccinationReport" element={<Vaccination/>} />
          <Route path="pharmachy" element={<Pharmacy/>}/>

 
        </Route>
 
        {/* For Doctor Login */}
        <Route path={"/doctor"} element={<MainLayout />} >
          <Route path="dashboard" element={<Home />} />
          <Route path="patientSearch" element={<Patient />} />
          <Route path="appointment" element={<AppointmentForm />} />
          <Route path="patientRegister" element={<PatientRegisterForm />} />
          <Route path="patientClinicalHistory" element={<PatientClinicalHistory />} />
          <Route path="schedule" element={<MyCalendar />} />
          <Route path="outPatient" element={<OPDetailsPage />} />
          <Route path="inPatient" element={<IPdetailsPage />} />
          <Route path="booking" element={<Bookingadmission />} />
          <Route path="roomAvailability" element={<RoomAvailable />} />
          <Route path="patientDetails" element={<Patient_Details />} />
          <Route path="patientMonitoring" element={<PatientMonitoring />} />
          <Route path="report" element={<Report />} />
          <Route path="invoiceReport" element={<InvoiceReport />} />
          <Route path="patientRegistrationReport" element={<Patient_Details />} />
          <Route path="collectionReport" element={<Notifications2 />} />
          <Route path="financialReporting" element={<Notifications2 />} />
          <Route path="issuedItems" element={<IssuedItem />}/>
          <Route path="returnedItems" element={<ReturnItem />}/>
          <Route path="inventoryManagement" element={<InventoryManagement />} />
          <Route path="supplyPurchaseEntry" element={<SupplyPurchaseEntry />} />
          <Route path="medicinePurchaseEntry" element={<MedicinePurchaseEntry />} />
          <Route path="emr" element={<EMR />} />
          <Route path="labReports" element={<LabReports />} />
          <Route path="radiologyReport" element={<RadiologyReports />} />
          <Route path="precription" element={<Notifications2 />} />
          <Route path="consultationRecords" element={<Notifications2 />} />
          <Route path="dischargeReports" element={<Discharge/>} />
          <Route path="vaccinationReport" element={<Vaccination/>} />
          <Route path="bill" element={<Bill />} />
          <Route path="billform" element={<Bill_Form />} />
          <Route path="payments" element={<Payments />} />
          <Route path="pharmachy" element={<Pharmacy/>}/>
 
        </Route>
 
        {/* Login For receptionist */}
        <Route path={"/receptionist"} element={<MainLayout />} >
          <Route path="dashboard" element={<Home />} />
          <Route path="patientSearch" element={<Patient />} />
          <Route path="patientDetails" element={<Patient_Details />} />
          <Route path="appointment" element={<AppointmentForm />} />
          <Route path="patientRegister" element={<PatientRegisterForm />} />
          <Route path="patientClinicalHistory" element={<PatientClinicalHistory />} />
          <Route path="schedule" element={<MyCalendar />} />
          <Route path="outPatient" element={<OPDetailsPage />} />
          <Route path="inPatient" element={<IPdetailsPage />} />
          <Route path="booking" element={<Bookingadmission />} />
          <Route path="roomAvailability" element={<RoomAvailable />} />
          <Route path="report" element={<Report />} />
          <Route path="invoiceReport" element={<InvoiceReport />} />
          <Route path="patientRegistrationReport" element={<Patient_Details />} />
          <Route path="collectionReport" element={<Notifications2 />} />
          <Route path="financialReporting" element={<Notifications2 />} />
          <Route path="emr" element={<EMR />} />
          <Route path="labReports" element={<LabReports />} />
          <Route path="radiologyReport" element={<RadiologyReports />} />
          <Route path="precription" element={<Notifications2 />} />
          <Route path="consultationRecords" element={<Notifications2 />} />
          <Route path="dischargeReports" element={<Discharge/>} />
          <Route path="vaccinationReport" element={<Vaccination/>} />
          <Route path="bill" element={<Bill />} />
          <Route path="billform" element={<Bill_Form />} />
          <Route path="payments" element={<Payments />} />
          <Route path="pharmachy" element={<Pharmacy/>}/>
        </Route>
 
        {/* Login For Nurse */}
        <Route path={"/nurse"} element={<MainLayout />} >
          <Route path="dashboard" element={<Home />} />
          <Route path="patientSearch" element={<Patient />} />
          <Route path="patientDetails" element={<Patient_Details />} />
          <Route path="appointment" element={<AppointmentForm />} />
          <Route path="outPatient" element={<OPDetailsPage />} />
          <Route path="inPatient" element={<IPdetailsPage />} />
          <Route path="patientMonitoring" element={<PatientMonitoring />} />
          <Route path="issuedItems" element={<IssuedItem />}/>
          <Route path="returnedItems" element={<ReturnItem />}/>
          <Route path="inventoryManagement" element={<InventoryManagement />} />
          <Route path="supplyPurchaseEntry" element={<SupplyPurchaseEntry />} />
          <Route path="medicinePurchaseEntry" element={<MedicinePurchaseEntry />} />
          <Route path="emr" element={<EMR />} />
          <Route path="labReports" element={<LabReports />} />
          <Route path="radiologyReport" element={<RadiologyReports />} />
          <Route path="precription" element={<Notifications2 />} />
          <Route path="consultationRecords" element={<Notifications2 />} />
          <Route path="dischargeReports" element={<Discharge/>} />
          <Route path="vaccinationReport" element={<Vaccination/>} />

        </Route>
       
        {/* Login For Pharmacist */}
       
        <Route path={"/pharmacist"} element={<MainLayout />} >
          <Route path="dashboard" element={<Home />} />
          <Route path="issuedItems" element={<IssuedItem />}/>
          <Route path="returnedItems" element={<ReturnItem />}/>
          <Route path="inventoryManagement" element={<InventoryManagement />} />
          <Route path="supplyPurchaseEntry" element={<SupplyPurchaseEntry />} />
          <Route path="medicinePurchaseEntry" element={<MedicinePurchaseEntry />} />
        </Route>
 
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
 
export default App;