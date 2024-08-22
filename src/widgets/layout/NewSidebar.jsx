import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaCalendarAlt,
  FaWheelchair,
  FaNotesMedical,
  FaWarehouse,
  FaUserPlus,
  FaSearch,
  FaBed,
  FaHeartbeat,
  FaPen,
  FaHome,
  FaBoxOpen,
  FaUndo,
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
  FaArrowLeft,
  FaArrowRight,
  FaCapsules
} from 'react-icons/fa';

import {
  Avatar,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useMaterialTailwindController } from "@/context";


export default function Sidebar({ sendDataToParent }) {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavColor, sidenavType, openSidenav } = controller;
  const [isSidebarOpened, setIsSidebarOpened] = useState(true);
  const [openParent, setOpenParent] = useState(null);
  const role = localStorage.getItem("loggedInUser");

  const hideSideBar = _ => {
    let items = document.querySelectorAll(".sidebarItems");
    if(!isSidebarOpened){
      items.forEach(val => val.style.display = "block")
    }else{
      items.forEach(val => val.style.display = "none")
    }
    setIsSidebarOpened(!isSidebarOpened)
    sendDataToParent(!isSidebarOpened)
  }

  const sidenavTypes = {
    dark: "bg-gradient-to-br from-gray-800 to-gray-900",
    white: "bg-white shadow-sm",
    transparent: "bg-transparent",
  };

  const handleParentClick = (name) => {
    setOpenParent((prev) => (prev === name ? null : name));
  };

  return (
    <aside
      className={`${sidenavTypes[sidenavType]} ${openSidenav ? "translate-x-0" : "-translate-x-80"
        } fixed z-10 my-4 ml-4 h-[calc(90vh-32px)] ${isSidebarOpened ? "w-72" : "w-26"} rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100 overflow-y-auto`}
    >
      <div className={`${isSidebarOpened ? "m-4" : "m-3"} mt-10 relative`}>
        {
          isSidebarOpened ?
            <FaArrowLeft className="w-4 h-4 text-inherit" id="hideSideBarBtn" onClick={hideSideBar} />
            :
            <FaArrowRight className="w-4 h-4 text-inherit" id="hideSideBarBtn" onClick={hideSideBar} />
        }
        <ul className="mb-4 flex flex-col gap-1">
          <li onClick={() => handleParentClick("dashboard")}>
            <NavLink to={`/${role}/dashboard`}>
              {({ isActive }) => (
                <Button
                  variant={isActive ? "filled" : "text"}
                  color="indigo"
                  className={`flex ${isSidebarOpened ? 'w-full' : 'w-auto'} items-center gap-4 px-4 capitalize ${isActive ? "bg-indigo-500 text-white" : "text-black"}`}
                  // fullWidth
                >
                  <FaHome className="w-5 h-5 text-inherit" />
                  <Typography color="inherit" className="sidebarItems font-medium capitalize">
                    Dashboard
                  </Typography>
                </Button>
              )}
            </NavLink>
          </li>
          {
            ["admin", "doctor", "receptionist", "nurse"].includes(role) ?
              <li onClick={() => handleParentClick("patientSearch")}>
                <NavLink to={`/${role}/patientSearch`}>
                  {({ isActive }) => (
                    <Button
                      variant={isActive ? "filled" : "text"}
                      color="indigo"
                      className={`flex ${isSidebarOpened ? 'w-full' : 'w-auto'} items-center gap-4 px-4 capitalize ${isActive ? "bg-indigo-500 text-white" : "text-black"
                        }`}
                      // fullWidth
                    >
                      <FaSearch className="w-5 h-5 text-inherit" />
                      <Typography color="inherit" className="sidebarItems font-medium capitalize">
                        Patient Search
                      </Typography>
                    </Button>
                  )}
                </NavLink>
              </li>
              : null
          }
          {
            ["admin", "doctor", "receptionist"].includes(role) ?
              <>
                <li onClick={() => handleParentClick("patientRegister")}>
                  <NavLink to={`/${role}/patientRegister`}>
                    {({ isActive }) => (
                      <Button
                        variant={isActive ? "filled" : "text"}
                        color="indigo"
                        className={`flex ${isSidebarOpened ? 'w-full' : 'w-auto'} items-center gap-4 px-4 capitalize ${isActive ? "bg-indigo-500 text-white" : "text-black"
                          }`}
                        // fullWidth
                      >
                        <FaPen className="w-5 h-5 text-inherit" />
                        <Typography color="inherit" className="sidebarItems font-medium capitalize">
                          Patient Register
                        </Typography>
                      </Button>
                    )}
                  </NavLink>
                </li>
                <li onClick={() => handleParentClick("schedule")}>
                  <NavLink to={`/${role}/schedule`}>
                    {({ isActive }) => (
                      <Button
                        variant={isActive ? "filled" : "text"}
                        color="indigo"
                        className={`flex ${isSidebarOpened ? 'w-full' : 'w-auto'} items-center gap-4 px-4 capitalize ${isActive ? "bg-indigo-500 text-white" : "text-black"
                          }`}
                        // fullWidth
                      >
                        <FaCalendarAlt className="w-5 h-5 text-inherit" />
                        <Typography color="inherit" className="sidebarItems font-medium capitalize">
                          Schedule
                        </Typography>
                      </Button>
                    )}
                  </NavLink>
                </li>
              </>
              : null
          }
          {
            ["admin", "doctor", "receptionist", "nurse"].includes(role) ?
              <>
                <li onClick={() => handleParentClick("OutPatient")}>
                  <NavLink to={`/${role}/outPatient`}>
                    {({ isActive }) => (
                      <Button
                        variant={isActive ? "filled" : "text"}
                        color="indigo"
                        className={`flex ${isSidebarOpened ? 'w-full' : 'w-auto'} items-center gap-4 px-4 capitalize ${isActive ? "bg-indigo-500 text-white" : "text-black"
                          }`}
                        // fullWidth
                      >
                        <FaWheelchair className="w-5 h-5 text-inherit" />
                        <Typography color="inherit" className="sidebarItems font-medium capitalize">
                          Out Patient
                        </Typography>
                      </Button>
                    )}
                  </NavLink>
                </li>
                <li>
                  <div onClick={() => handleParentClick("IP Management")}>
                    <NavLink to={`/${role}/inPatient`}>
                      {({ isActive }) => (
                        <Button
                          variant={isActive ? "filled" : "text"}
                          color="indigo"
                          className={`flex ${isSidebarOpened ? 'w-full' : 'w-auto'} items-center gap-4 px-4 capitalize ${isActive ? "bg-indigo-500 text-white" : "text-black"
                            }`}
                          // fullWidth
                        >
                          <FaBed className="w-5 h-5 text-inherit" />
                          <Typography color="inherit" className="sidebarItems font-medium capitalize">
                            In Patient
                          </Typography>
                        </Button>
                      )}
                    </NavLink>
                  </div>
                  {openParent === "IP Management" && (
                    <ul className="ml-4 mt-2">
                      {
                        ["admin", "doctor", "receptionist"].includes(role) ?
                          <>
                            <li>
                              <NavLink to={`/${role}/booking`}>
                                {({ isActive }) => (
                                  <Button
                                    variant={isActive ? "filled" : "text"}
                                    color="indigo"
                                    className={`flex ${isSidebarOpened ? 'w-full' : 'w-auto'} items-center gap-4 px-4 capitalize ${isActive ? "bg-indigo-500 text-white" : "text-black"
                                      }`}
                                    // fullWidth
                                  >
                                    <FaUserPlus className="w-5 h-5 text-inherit" />
                                    <Typography color="inherit" className="font-medium capitalize" style={{display : `${isSidebarOpened ? "block" : "none"}`}}>
                                      Booking / Admission
                                    </Typography>
                                  </Button>
                                )}
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to={`/${role}/roomAvailability`}>
                                {({ isActive }) => (
                                  <Button
                                    variant={isActive ? "filled" : "text"}
                                    color="indigo"
                                    className={`flex ${isSidebarOpened ? 'w-full' : 'w-auto'} items-center gap-4 px-4 capitalize ${isActive ? "bg-indigo-500 text-white" : "text-black"
                                      }`}
                                    // fullWidth
                                  >
                                    <FaBed className="w-5 h-5 text-inherit" />
                                    <Typography color="inherit" className="font-medium capitalize" style={{display : `${isSidebarOpened ? "block" : "none"}`}}>
                                      Room Availability
                                    </Typography>
                                  </Button>
                                )}
                              </NavLink>
                            </li>
                          </>
                          : null
                      }
                      {
                        ["admin", "doctor", "nurse"].includes(role) ?
                          <li>
                            <NavLink to={`/${role}/patientMonitoring`}>
                              {({ isActive }) => (
                                <Button
                                  variant={isActive ? "filled" : "text"}
                                  color="indigo"
                                  className={`flex ${isSidebarOpened ? 'w-full' : 'w-auto'} items-center gap-4 px-4 capitalize ${isActive ? "bg-indigo-500 text-white" : "text-black"
                                    }`}
                                  // fullWidth
                                >
                                  <FaHeartbeat className="w-5 h-5 text-inherit" />
                                  <Typography color="inherit" className="font-medium capitalize" style={{display : `${isSidebarOpened ? "block" : "none"}`}}>
                                    Patient Monitoring
                                  </Typography>
                                </Button>
                              )}
                            </NavLink>
                          </li>
                          : null
                      }
                    </ul>
                  )}
                </li>
              </>
              : null
          }
          {
            ["admin", "doctor", "receptionist"].includes(role) ?
              <li onClick={() => handleParentClick("Reports")}>
                <NavLink to={`/${role}/report`}>
                  {({ isActive }) => (
                    <Button
                      variant={isActive ? "filled" : "text"}
                      color="indigo"
                      className={`flex ${isSidebarOpened ? 'w-full' : 'w-auto'} items-center gap-4 px-4 capitalize ${isActive ? "bg-indigo-500 text-white" : "text-black"
                        }`}
                      // fullWidth
                    >
                      <FaNotesMedical className="w-5 h-5 text-inherit" />
                      <Typography color="inherit" className="sidebarItems font-medium capitalize">
                        Reports
                      </Typography>
                    </Button>
                  )}
                </NavLink>
              </li>
              : null
          }
          {
            ["admin", "doctor", "nurse", "pharmacist"].includes(role) ?
              <li>
                <div onClick={() => handleParentClick("Inventory Management")}>
                  <NavLink to={`/${role}/inventoryManagement`}>
                    {({ isActive }) => (
                      <Button
                        variant={isActive ? "filled" : "text"}
                        color="indigo"
                        className={`flex ${isSidebarOpened ? 'w-full' : 'w-auto'} items-center gap-4 px-4 capitalize ${isActive ? "bg-indigo-500 text-white" : "text-black"
                          }`}
                        // fullWidth
                      >
                        <FaWarehouse className="w-5 h-5 text-inherit" />
                        <Typography color="inherit" className="sidebarItems font-medium capitalize">
                          Inventory Management
                        </Typography>
                      </Button>
                    )}
                  </NavLink>
                </div>
                {openParent === "Inventory Management" && (
                  <ul className="ml-4 mt-2">
                    <li>
                      <NavLink to={`/${role}/issuedItems`}>
                        {({ isActive }) => (
                          <Button
                            variant={isActive ? "filled" : "text"}
                            color="indigo"
                            className={`flex ${isSidebarOpened ? 'w-full' : 'w-auto'} items-center gap-4 px-4 capitalize ${isActive ? "bg-indigo-500 text-white" : "text-black"
                              }`}
                            // fullWidth
                          >
                            <FaBoxOpen className="w-5 h-5 text-inherit" />
                            <Typography color="inherit" style={{display : `${isSidebarOpened ? "block" : "none"}`}} className="font-medium capitalize">
                              Issued Items
                            </Typography>
                          </Button>
                        )}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={`/${role}/returnedItems`}>
                        {({ isActive }) => (
                          <Button
                            variant={isActive ? "filled" : "text"}
                            color="indigo"
                            className={`flex ${isSidebarOpened ? 'w-full' : 'w-auto'} items-center gap-4 px-4 capitalize ${isActive ? "bg-indigo-500 text-white" : "text-black"
                              }`}
                            // fullWidth
                          >
                            <FaUndo className="w-5 h-5 text-inherit" />
                            <Typography color="inherit" style={{display : `${isSidebarOpened ? "block" : "none"}`}} className="font-medium capitalize">
                              Returned Items
                            </Typography>
                          </Button>
                        )}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={`/${role}/supplyPurchaseEntry`}>
                        {({ isActive }) => (
                          <Button
                            variant={isActive ? "filled" : "text"}
                            color="indigo"
                            className={`flex ${isSidebarOpened ? 'w-full' : 'w-auto'} items-center gap-4 px-4 capitalize ${isActive ? "bg-indigo-500 text-white" : "text-black"
                              }`}
                            // fullWidth
                          >
                            <FaShoppingCart className="w-5 h-5 text-inherit" />
                            <Typography color="inherit" style={{display : `${isSidebarOpened ? "block" : "none"}`}} className="font-medium capitalize">
                              Supply Purchase
                            </Typography>
                          </Button>
                        )}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={`/${role}/medicinePurchaseEntry`}>
                        {({ isActive }) => (
                          <Button
                            variant={isActive ? "filled" : "text"}
                            color="indigo"
                            className={`flex ${isSidebarOpened ? 'w-full' : 'w-auto'} items-center gap-4 px-4 capitalize ${isActive ? "bg-indigo-500 text-white" : "text-black"
                              }`}
                            // fullWidth
                          >
                            <FaFirstAid className="w-5 h-5 text-inherit" />
                            <Typography color="inherit" style={{display : `${isSidebarOpened ? "block" : "none"}`}} className="font-medium capitalize">
                              Medicine Purchase
                            </Typography>
                          </Button>
                        )}
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
              : null
          }
          {
            ["admin", "doctor", "receptionist", "nurse"].includes(role) ?
              <li>
                <div onClick={() => handleParentClick("EMR")}>
                  <NavLink to={`/${role}/emr`}>
                    {({ isActive }) => (
                      <Button
                        variant={isActive ? "filled" : "text"}
                        color="indigo"
                        className={`flex ${isSidebarOpened ? 'w-full' : 'w-auto'} items-center gap-4 px-4 capitalize ${isActive ? "bg-indigo-500 text-white" : "text-black"
                          }`}
                        // fullWidth
                      >
                        <FaFileCode className="w-5 h-5 text-inherit" />
                        <Typography color="inherit" className="sidebarItems font-medium capitalize">
                          EMR
                        </Typography>
                      </Button>
                    )}
                  </NavLink>
                </div>
                {openParent === "EMR" && (
                  <ul className="ml-4 mt-2">
                    <li>
                      <NavLink to={`/${role}/labReports`}>
                        {({ isActive }) => (
                          <Button
                            variant={isActive ? "filled" : "text"}
                            color="indigo"
                            className={`flex ${isSidebarOpened ? 'w-full' : 'w-auto'} items-center gap-4 px-4 capitalize ${isActive ? "bg-indigo-500 text-white" : "text-black"
                              }`}
                            // fullWidth
                          >
                            <FaFlask className="w-5 h-5 text-inherit" />
                            <Typography color="inherit" style={{display : `${isSidebarOpened ? "block" : "none"}`}} className="font-medium capitalize">
                              Lab Reports
                            </Typography>
                          </Button>
                        )}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={`/${role}/radiologyReport`}>
                        {({ isActive }) => (
                          <Button
                            variant={isActive ? "filled" : "text"}
                            color="indigo"
                            className={`flex ${isSidebarOpened ? 'w-full' : 'w-auto'} items-center gap-4 px-4 capitalize ${isActive ? "bg-indigo-500 text-white" : "text-black"
                              }`}
                            // fullWidth
                          >
                            <FaRadiation className="w-5 h-5 text-inherit" />
                            <Typography color="inherit" style={{display : `${isSidebarOpened ? "block" : "none"}`}} className="font-medium capitalize">
                              Radiology Report
                            </Typography>
                          </Button>
                        )}
                      </NavLink>
                    </li>
                    {/* <li>
                      <NavLink to={`/${role}/precription`}>
                        {({ isActive }) => (
                          <Button
                            variant={isActive ? "filled" : "text"}
                            color="indigo"
                            className={`flex ${isSidebarOpened ? 'w-full' : 'w-auto'} items-center gap-4 px-4 capitalize ${isActive ? "bg-indigo-500 text-white" : "text-black"
                              }`}
                            // fullWidth
                          >
                            <FaPills className="w-5 h-5 text-inherit" />
                            <Typography color="inherit" style={{display : `${isSidebarOpened ? "block" : "none"}`}} className="font-medium capitalize">
                              Prescription
                            </Typography>
                          </Button>
                        )}
                      </NavLink>
                    </li> */}
                    <li>
                      <NavLink to={`/${role}/consultationRecords`}>
                        {({ isActive }) => (
                          <Button
                            variant={isActive ? "filled" : "text"}
                            color="indigo"
                            className={`flex ${isSidebarOpened ? 'w-full' : 'w-auto'} items-center gap-4 px-4 capitalize ${isActive ? "bg-indigo-500 text-white" : "text-black"
                              }`}
                            // fullWidth
                          >
                            <FaFileMedical className="w-5 h-5 text-inherit" />
                            <Typography color="inherit" style={{display : `${isSidebarOpened ? "block" : "none"}`}} className="font-medium capitalize">
                              Consultation Records
                            </Typography>
                          </Button>
                        )}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={`/${role}/dischargeReports`}>
                        {({ isActive }) => (
                          <Button
                            variant={isActive ? "filled" : "text"}
                            color="indigo"
                            className={`flex ${isSidebarOpened ? 'w-full' : 'w-auto'} items-center gap-4 px-4 capitalize ${isActive ? "bg-indigo-500 text-white" : "text-black"
                              }`}
                            // fullWidth
                          >
                            <FaFileSignature className="w-5 h-5 text-inherit" />
                            <Typography color="inherit" style={{display : `${isSidebarOpened ? "block" : "none"}`}} className="font-medium capitalize">
                              Discharge Reports
                            </Typography>
                          </Button>
                        )}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={`/${role}/vaccinationReport`}>
                        {({ isActive }) => (
                          <Button
                            variant={isActive ? "filled" : "text"}
                            color="indigo"
                            className={`flex ${isSidebarOpened ? 'w-full' : 'w-auto'} items-center gap-4 px-4 capitalize ${isActive ? "bg-indigo-500 text-white" : "text-black"
                              }`}
                            // fullWidth
                          >
                            <FaSyringe className="w-5 h-5 text-inherit" />
                            <Typography color="inherit" style={{display : `${isSidebarOpened ? "block" : "none"}`}} className="font-medium capitalize">
                              Vaccination Reports
                            </Typography>
                          </Button>
                        )}
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
              : null
          }
          {
            ["admin", "doctor", "receptionist"].includes(role) ?
              <li>
                <div onClick={() => handleParentClick("Billing Details")}>
                  <NavLink to={`/${role}/bill`}>
                    {({ isActive }) => (
                      <Button
                        variant={isActive ? "filled" : "text"}
                        color="indigo"
                        className={`flex ${isSidebarOpened ? 'w-full' : 'w-auto'} items-center gap-4 px-4 capitalize ${isActive ? "bg-indigo-500 text-white" : "text-black"
                          }`}
                        // fullWidth
                      >
                        <FaCreditCard className="w-5 h-5 text-inherit" />
                        <Typography color="inherit" className="sidebarItems font-medium capitalize">
                          Billing Details
                        </Typography>
                      </Button>
                    )}
                  </NavLink>
                </div>

                {openParent === "Billing Details" && (
                  <ul className="ml-4 mt-2">
                    <li>
                      <NavLink to={`/${role}/payments`}>
                        {({ isActive }) => (
                          <Button
                            variant={isActive ? "filled" : "text"}
                            color="indigo"
                            className={`flex ${isSidebarOpened ? 'w-full' : 'w-auto'} items-center gap-4 px-4 capitalize ${isActive ? "bg-indigo-500 text-white" : "text-black"
                              }`}
                            // fullWidth
                          >
                            <FaHandHoldingUsd className="w-5 h-5 text-inherit" />
                            <Typography color="inherit" style={{display : `${isSidebarOpened ? "block" : "none"}`}} className="font-medium capitalize">
                              Advance Payments
                            </Typography>
                          </Button>
                        )}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={`/${role}/pharmachy`}>
                        {({ isActive }) => (
                          <Button
                            variant={isActive ? "filled" : "text"}
                            color="indigo"
                            className={`flex ${isSidebarOpened ? 'w-full' : 'w-auto'} items-center gap-4 px-4 capitalize ${isActive ? "bg-indigo-500 text-white" : "text-black"
                              }`}
                            // fullWidth
                          >
                            <FaCapsules className="w-5 h-5 text-inherit" />
                            <Typography color="inherit" style={{display : `${isSidebarOpened ? "block" : "none"}`}} className="font-medium capitalize">
                              Pharmacy Bill
                            </Typography>
                          </Button>
                        )}
                      </NavLink>
                    </li>

                  </ul>
                )}
              </li>
              : null
          }

        </ul>
      </div>
    </aside>
  );
}