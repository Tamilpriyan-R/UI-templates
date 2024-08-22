import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  Navbar,
  Typography,
} from "@material-tailwind/react";

import {
  FaCalendarAlt,
  FaWheelchair,
  FaNotesMedical,
  FaWarehouse,
  FaUserPlus,
  FaPen,
  FaSearch,
  FaBed,
  FaHeartbeat,
  FaBoxOpen,
  FaHome,
  FaUndo,
  FaPlus,
  FaShoppingCart,
  FaFirstAid,
  FaFlask,
  FaRadiation,
  FaPills,
  FaFileMedical,
  FaFileSignature,
  FaSyringe,
  FaCreditCard,
  FaHandHoldingUsd,
  FaFileCode,
  FaMinus,
  FaBell,
  FaCapsules
} from 'react-icons/fa';
import {
  useMaterialTailwindController,
  setOpenConfigurator,
  setOpenSidenav,
} from "@/context";
import React, { useState, useEffect } from 'react';
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button } from "@material-tailwind/react"
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { BsFillHeartFill, BsPersonCircle } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import Style from "./Style.module.css"
import { useRef } from "react";

export function Header() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { fixedNavbar, openSidenav } = controller;
  const { pathname } = useLocation();
  const [layout, page] = pathname.toLocaleUpperCase().split("/").filter((el) => el !== "");
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [role, setRole] = useState('');
  const [isPasswordUpdateVisible, setIsPasswordUpdateVisible] = useState(false);
  const [isProfileDropdownVisible, setIsProfileDropdownVisible] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const closeBoxRef = useRef(null)


  const navigate = useNavigate();

  useEffect(() => {
    const outSideClick = (e) => {
      if (!closeBoxRef.current.contains(e.target)) {
        setIsProfileDropdownVisible(false)
        setIsPopupVisible(false)
      }
    }
    window.addEventListener("mousedown", outSideClick)
  }, [closeBoxRef])

   useEffect(() => {
    const userRole = localStorage.getItem('loggedInUser');
    if (userRole) {
      setRole(userRole);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };


  const toggleFullScreen = () => {
    if (!isFullScreen) {
      // Request full-screen mode
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) { // Firefox
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
        document.documentElement.msRequestFullscreen();
      }
    } else {
      // Exit full-screen mode
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }

    // Toggle the state
    setIsFullScreen(!isFullScreen);
  };

  const handleEditProfile = () => {
  };

  const togglePasswordUpdate = () => {
    setIsPasswordUpdateVisible(!isPasswordUpdateVisible);
  };

  const handleQuickAccess = () => {
    setIsPopupVisible(!isPopupVisible);
  };
  // Array of logo objects with URLs and names

  const toggleProfileDropdown = () => {
    setIsProfileDropdownVisible(!isProfileDropdownVisible);
  };

  const [favourite, setFavourite] = useState([])

  const [addedLogos, setAddedLogos] = useState({
    'Dashboard': false,
    'Patient Search': false,
    'Patient Register': false,
    'Schedule': false,
    'Out Patient': false,
    'In Patient': false,
    'Booking / Admission': false,
    'Room Availability': false,
    'Patient Monitoring': false,
    'Reports': false,
    'Inventory Management': false,
    'Issued Items': false,
    'Returned Items': false,
    'Supply Purchase': false,
    'Medicine Purchase': false,
    'EMR': false,
    'Lab Reports': false,
    'Radiology Report': false,
    // 'Prescription': false,
    'Consultation Records': false,
    'Discharge Reports': false,
    'Vaccination Reports': false,
    'Billing Details': false,
    'Advance Payments': false,
  });

  const handleAddToFavourite = () => {
    const temp = addLogoData.filter(val => addedLogos[val.name]).map(val => val.name);
    setFavourite(temp);
    setAddOpen(false);
  };
  const handleRemoveToFavourite = (element) => {
    const temp = favourite.filter(val => val !== element);
    setFavourite(temp);
    addedLogos[element] = false;
  };

  const handleCheckboxChange = (name) => (event) => {
    setAddedLogos(prevState => ({
      ...prevState,
      [name]: event.target.checked,
    }));
  };

  const addLogoData = [
    {
      icon: FaHome,
      name: 'Dashboard',
      access: ["admin", "doctor", "receptionist", "nurse", "pharmacist"]
    },
    {
      icon: FaSearch,
      name: 'Patient Search',
      access: ["admin", "doctor", "receptionist", "nurse"]
    },
    {
      icon: FaPen,
      name: 'Patient Register',
      access: ["admin", "doctor", "receptionist"]
    },
    {
      icon: FaCalendarAlt,
      name: 'Schedule',
      access: ["admin", "doctor", "receptionist"]
    },
    {
      icon: FaWheelchair,
      name: 'Out Patient',
      access: ["admin", "doctor", "receptionist", "nurse"]
    },
    {
      icon: FaBed,
      name: 'In Patient',
      access: ["admin", "doctor", "receptionist", "nurse"]
    },
    {
      icon: FaUserPlus,
      name: 'Booking / Admission',
      access: ["admin", "doctor", "receptionist"]
    },
    {
      icon: FaBed,
      name: 'Room Availability',
      access: ["admin", "doctor", "receptionist"]
    },
    {
      icon: FaHeartbeat,
      name: 'Patient Monitoring',
      access: ["admin", "doctor", "nurse"]
    },
    {
      icon: FaNotesMedical,
      name: 'Reports',
      access: ["admin", "doctor", "receptionist"]
    },
    {
      icon: FaWarehouse,
      name: 'Inventory Management',
      access: ["admin", "doctor", "nurse", "pharmacist"]
    },
    {
      icon: FaBoxOpen,
      name: 'Issued Items',
      access: ["admin", "doctor", "nurse", "pharmacist"]
    },
    {
      icon: FaUndo,
      name: 'Returned Items',
      access: ["admin", "doctor", "nurse", "pharmacist"]
    },
    {
      icon: FaShoppingCart,
      name: 'Supply Purchase',
      access: ["admin", "doctor", "nurse", "pharmacist"]
    },
    {
      icon: FaFirstAid,
      name: 'Medicine Purchase',
      access: ["admin", "doctor", "nurse", "pharmacist"]
    },
    {
      icon: FaFileCode,
      name: 'EMR',
      access: ["admin", "doctor", "receptionist", "nurse"]
    },
    {
      icon: FaFlask,
      name: 'Lab Reports',
      access: ["admin", "doctor", "receptionist", "nurse"]
    },
    {
      icon: FaRadiation,
      name: 'Radiology Report',
      access: ["admin", "doctor", "receptionist", "nurse"]
    },
    // { 
    //   icon: FaPills, 
    //   name: 'Prescription', 
    //   access: ["admin", "doctor", "receptionist", "nurse"] 
    // },
    {
      icon: FaFileMedical,
      name: 'Consultation Records',
      access: ["admin", "doctor", "receptionist", "nurse"]
    },
    {
      icon: FaFileSignature,
      name: 'Discharge Reports',
      access: ["admin", "doctor", "receptionist", "nurse"]
    },
    {
      icon: FaSyringe,
      name: 'Vaccination Reports',
      access: ["admin", "doctor", "receptionist", "nurse"]
    },
    {
      icon: FaCreditCard,
      name: 'Billing Details',
      access: ["admin", "doctor", "receptionist"]
    },
    {
      icon: FaHandHoldingUsd,
      name: 'Advance Payments',
      access: ["admin", "doctor", "receptionist"]
    },
  ];

  const logos = [
    {
      icon: FaHome,
      name: 'Dashboard',
      path: `/${role}/dashboard`
    },
    {
      icon: FaSearch,
      name: 'Patient Search',
      path: `/${role}/patientSearch`
    },
    {
      icon: FaPen,
      name: 'Patient Register',
      path: `/${role}/patientRegister`
    },
    {
      icon: FaCalendarAlt,
      name: 'Schedule',
      path: `/${role}/schedule`
    },
    {
      icon: FaWheelchair,
      name: 'Out Patient',
      path: `/${role}/outPatient`
    },
    {
      icon: FaBed,
      name: 'In Patient',
      path: `/${role}/inPatient`
    },
    {
      icon: FaUserPlus,
      name: 'Booking / Admission',
      path: `/${role}/booking`
    },
    {
      icon: FaBed,
      name: 'Room Availability',
      path: `/${role}/roomAvailability`
    },
    {
      icon: FaHeartbeat,
      name: 'Patient Monitoring',
      path: `/${role}/patientMonitoring`
    },
    {
      icon: FaNotesMedical,
      name: 'Reports',
      path: `/${role}/report`
    },
    {
      icon: FaWarehouse,
      name: 'Inventory Management',
      path: `/${role}/inventoryManagement`
    },
    {
      icon: FaBoxOpen,
      name: 'Issued Items',
      path: `/${role}/issuedItems`
    },
    {
      icon: FaUndo,
      name: 'Returned Items',
      path: `/${role}/returnedItems`
    },
    {
      icon: FaShoppingCart,
      name: 'Supply Purchase',
      path: `/${role}/supplyPurchaseEntry`
    },
    {
      icon: FaFirstAid,
      name: 'Medicine Purchase',
      path: `/${role}/medicinePurchaseEntry`
    },
    {
      icon: FaFileCode,
      name: 'EMR',
      path: `/${role}/emr`
    },
    {
      icon: FaFlask,
      name: 'Lab Reports',
      path: `/${role}/labReports`
    },
    {
      icon: FaRadiation,
      name: 'Radiology Report',
      path: `/${role}/radiologyReport`
    },
    // { 
    //   icon: FaPills, 
    //   name: 'Prescription', 
    //   path: `/${role}/precription` 
    // },
    {
      icon: FaFileMedical,
      name: 'Consultation Records',
      path: `/${role}/consultationRecords`
    },
    {
      icon: FaFileSignature,
      name: 'Discharge Reports',
      path: `/${role}/dischargeReports`
    },
    {
      icon: FaSyringe,
      name: 'Vaccination Reports',
      path: `/${role}/vaccinationReports`
    },
    {
      icon: FaCreditCard,
      name: 'Billing Details',
      path: `/${role}/bill`
    },
    {
      icon: FaHandHoldingUsd,
      name: 'Advance Payments',
      path: `/${role}/payments`
    },
    {
      icon: FaCapsules,
      name: 'Pharmacy Bill',
      path: `/${role}/pharmacy`
    }
  ];


  return (
    <Navbar
      color={fixedNavbar ? "white" : "white"}
      className={`rounded-xl transition-all ${fixedNavbar
        ? "fixed top-0 left-0 right-0 z-60 py-3 shadow-md shadow-blue-gray-500/5"
        : "px-2 fixed top-0 left-0 right-0 py-4 shadow-md shadow-blue-gray-500/5"
        }`}
      style={{ borderRadius: "0", backgroundColor: "#3F51B5", zIndex: "11" }}
      fullWidth
      blurred={fixedNavbar}
    >
      <div className="flex justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize flex items-center justify-center">
          <Link to="/" className="text-center" style={{ minWidth: "155px" }}>
            <Typography
              variant="h5"
              color={"white"}
            >
              Project Hospital
            </Typography>
          </Link>
          <div tabIndex={-1} className='ps-3'>
            <Form.Select aria-label="Default select example" size='sm' style={{ width: "150px", color: "rgb(100, 100, 100)", border: "0.5px solid rgb(204, 204, 204)", padding: "3px", borderRadius: "4px", outline: "none" }}>
              <option value="All">All</option>
              <option value="Patient">Patient</option>
              <option value="Doctor">Doctor</option>
              <option value="Appointment">Appointment</option>
            </Form.Select>
            {/* {showDropdown && (
              <Dropdown.Menu show>
                <Dropdown.Item href="#/action-1">patient </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Doctor</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Appointment</Dropdown.Item>
              </Dropdown.Menu>
            )} */}
          </div>
          <div className='ps-3'>
            <input
              type="text"
              placeholder="Search..."
              className="form-control custom-input"
              style={{
                height: '30px',
                fontSize: '16px',
                padding: '0 8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                width: '150px',
                outline: "none",
                color: "rgb(100, 100, 100)"
              }}
            />
          </div>
          <h1 className="headerRole cursor-pointer">
            {role === 'admin' && 'Welcome Admin'}
            {role === 'doctor' && 'Welcome Doctor'}
            {role === 'receptionist' && 'Welcome Receptionist'}
            {role === 'nurse' && 'Welcome Nurse'}
            {role === 'pharmacist' && 'Welcome Pharmacist'}
          </h1>
        </div>

        <div>

        </div>
        <div className="menu-items-wrapper flex  gap-x-6 pt-1">

          <div className="menu-items cursor-pointer" onClick={toggleFullScreen}>
            <div className="icon" >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 22C6.229 22 4.343 22 3.172 20.828C2 19.657 2 17.771 2 14M10 2C6.229 2 4.343 2 3.172 3.172C2.93104 3.41292 2.73257 3.69287 2.585 4M2 10C2 9.265 2 8.6 2.009 8M14 2C17.771 2 19.657 2 20.828 3.172C22 4.343 22 6.229 22 10M14 22C17.771 22 19.657 22 20.828 20.828C21.069 20.5871 21.2674 20.3071 21.415 20M22 14C22 14.736 22 15.4 21.991 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div className='fs-4' onClose={handleQuickAccess} onClick={handleQuickAccess}>
            <BsFillHeartFill id={Style.icon} />
          </div>

          {isPopupVisible && (
            <div ref={closeBoxRef} className="popup-card absolute w-[310px] top-14 right-6 mt-2 w-64 bg-white border overflow-hidden border-gray-300 shadow-md rounded-lg">
              <div className="grid grid-cols-3 gap-5 p-3 pt-7 mb-4 max-h-[300px] overflow-y-auto">
                <div className="addBtn" onClick={_ => setAddOpen(true)}>
                  <FaPlus size={18} />
                  <span className="mt-2 font-bold text-sm text-center" style={{ fontSize: '12px' }}>Add</span> {/* Display the name with smaller font size */}
                </div>
                {logos.map((logo, index) => (
                  favourite.includes(logo.name) &&
                  <div key={index} className="flex flex-col relative shortcutIcon text-black items-center cursor-pointer">
                    <logo.icon size={20} onClick={_ => { navigate(logo.path); setIsPopupVisible(!isPopupVisible); }} />
                    <span className="mt-2 text-sm text-center" style={{ fontSize: '12px' }} onClick={_ => { navigate(logo.path); setIsPopupVisible(!isPopupVisible); }}>{logo.name}</span>
                    <button id="removeFavBtn" onClick={_ => handleRemoveToFavourite(logo.name)}>
                      <FaMinus />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          <Dialog open={addOpen} onClose={_ => setAddOpen(false)}>
            <DialogHeader className="justify-center">Add To Favourite</DialogHeader>
            <DialogBody >
              <div className="grid grid-cols-3 px-5 gap-2 my-3 max-h-[450px] overflow-y-auto">
                {addLogoData.map((logo, index) => (
                  logo.access.includes(role) &&
                  <FormControlLabel
                    key={logo.name}
                    control={
                      <Checkbox
                        checked={addedLogos[logo.name]}
                        onChange={handleCheckboxChange(logo.name)}
                      />
                    }
                    label={
                      <div key={index} className="flex text-black gap-2 items-end cursor-pointer">
                        <logo.icon size={20} />
                        <span className="text-sm text-center" style={{ fontSize: '12px' }}>{logo.name}</span>
                      </div>
                    }
                  />
                ))}
              </div>
            </DialogBody>
            <DialogFooter className='justify-center'>
              <Button color="green" className="mr-5" onClick={handleAddToFavourite}>
                Add
              </Button>
              <Button color="red" onClick={_ => setAddOpen(false)}>Close</Button>
            </DialogFooter>
          </Dialog>


          <div className="menu-items cursor-pointer" >
            <div className="icon" id={Style.icon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="2" fill="white" />
                <circle cx="12" cy="4" r="2" fill="white" />
                <circle cx="20" cy="4" r="2" fill="white" />
                <circle cx="4" cy="12" r="2" fill="white" />
                <circle cx="12" cy="12" r="2" fill="white" />
                <circle cx="20" cy="12" r="2" fill="white" />
                <circle cx="4" cy="20" r="2" fill="white" />
                <circle cx="12" cy="20" r="2" fill="white" />
                <circle cx="20" cy="20" r="2" fill="white" />
              </svg>
            </div>
          </div>
          <div className='fs-4'>
            <FaBell id={Style.icon} />
          </div>
          <div className='fs-4'>
            <BsPersonCircle id={Style.icon} onClick={toggleProfileDropdown} />
          </div>

          {isProfileDropdownVisible && (
            <div ref={closeBoxRef} className="dropdown-profile absolute top-14 right-0 mt-2 w-64 p-4 bg-white border border-gray-300 shadow-md rounded-lg">
              <div className="dropdown-content-heading text-center mb-4">
                <img
                  src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image-180x180.png"
                  alt="Profile"
                  className="h-12 w-12 rounded-full mx-auto"
                />
                <div id="user_name2" className="font-semibold mt-2">John Peter</div>
                {/* <div id="name3" className="text-gray-600">Manager</div> */}
                <div id="no" className="text-gray-600">123-456-7890</div>
                <div id="email2" className="text-gray-600">johnpeter@example.com</div>
              </div>
              <div className="dropdown-content-body">
                <div className="flex flex-col items-center gap-2">
                  <button
                    type="button"
                    className="btn bg-gradient-dark text-black w-full"
                    onClick={handleEditProfile}
                  >
                    Services
                  </button>
                  <button
                    type="button"
                    className="btn bg-gradient-dark text-black w-full"
                    onClick={togglePasswordUpdate}
                  >
                    Settings
                  </button>
                  <button
                    type="button"
                    className="btn bg-gradient-dark text-black border border-blue-500 w-full"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Navbar >
  );
}

export default Header;
