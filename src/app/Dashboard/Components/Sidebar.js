"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link"; // Import Link from Next.js
import { FaHome } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import { FaHouseLaptop } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { TbReport } from "react-icons/tb";
import { MdManageSearch, MdFavorite } from "react-icons/md";
import { GrSystem } from "react-icons/gr";
import { RiOrganizationChart } from "react-icons/ri";
import FavouriteModal from "./FavouritesModal.js";
const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOpenManagement, setIsOpenManagement] = useState(false);
  const [isOpenFavouriteModal, setIsOpenFavouriteModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // State to track which dropdown is open
  const [activeLink, setActiveLink] = useState("/Dashboard/Home");
  useEffect(() => {
    // This will run only once after the initial render
    const path = window.location.pathname;
    setActiveLink(path);
  }, []);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  // Helper functions to handle hover
  const handleMouseEnter = (dropdown) => {
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdownFavourite = () => {
    setIsOpenFavouriteModal(!isOpenFavouriteModal);
  };

  return (
    <div className="relative ">
      {/* Hamburger Button */}
      <button
        className="fixed top-3 left-4 z-50 block lg:hidden text-sm"
        onClick={handleToggleSidebar}
      >
        {isSidebarOpen ? "✖" : "☰"}
      </button>
      {/* Sidebar */}
      <aside
        className={`bg-white text-black  min-h-screen lg:w-52 w-20 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:relative top-0 left-0 flex flex-col shadow-2xl  mt-1 shadow-custom-blue`}
      >
        <nav className="flex-1">
          <ul className="space-y-1">
            <Link passHref href="/Dashboard/Home">
              <li
                onClick={() => handleLinkClick("/Dashboard/Home")}
                className={`${
                  activeLink === "/Dashboard/Home"
                    ? "border-l-4 border-red-400"
                    : "bg-white text-blue"
                } flex items-center p-3 cursor-pointer hover:bg-gray-100 rounded-lg`}
              >
                <div className="flex items-center gap-3">
                  <FaHome
                    className={`${
                      activeLink === "/Dashboard/Home"
                        ? "text-red-400"
                        : "text-black text-sm"
                    }`}
                  />
                  <span className="hidden sm:block text-sm">Dashboard</span>
                </div>
              </li>
            </Link>

            <Link passHref href="/Dashboard/Company/GetAllCompanies">
              <li
                onClick={() =>
                  handleLinkClick("/Dashboard/Company/GetAllCompanies")
                }
                className={`${
                  activeLink === "/Dashboard/Company/GetAllCompanies"
                    ? "border-l-4 border-red-400"
                    : "bg-white text-blue"
                } flex items-center p-3 cursor-pointer hover:bg-gray-100 rounded-lg`}
              >
                <div className="flex items-center gap-3">
                  <FaHouseLaptop
                    className={`${
                      activeLink === "/Dashboard/Company/GetAllCompanies"
                        ? "text-red-400"
                        : "text-black text-sm"
                    }`}
                  />
                  <span className="hidden sm:block text-sm">
                    Registered Companies
                  </span>
                </div>
              </li>
            </Link>

            <Link passHref href="/Dashboard/Title/GetAllTitles">
              <li
                onClick={() => handleLinkClick("/Dashboard/Title/GetAllTitles")}
                className={`${
                  activeLink === "/Dashboard/Title/GetAllTitles"
                    ? "border-l-4 border-red-400"
                    : "bg-white text-blue"
                } flex items-center p-3 cursor-pointer hover:bg-gray-100 rounded-lg`}
              >
                <div className="flex items-center gap-3">
                  <GrSystem
                    className={`${
                      activeLink === "/Dashboard/Title/GetAllTitles"
                        ? "text-red-400"
                        : "text-black text-sm"
                    }`}
                  />
                  <span className="hidden sm:block text-sm">System</span>
                </div>
              </li>
            </Link>

            <Link passHref href={"/Dashboard/Users/GetAllusers"}>
              <li
                onClick={() => handleLinkClick("/Dashboard/Users/GetAllusers")}
                className={`${
                  activeLink === "/Dashboard/Users/GetAllusers"
                    ? "border-l-4 border-red-400"
                    : "bg-white text-blue"
                } flex items-center p-3 cursor-pointer hover:bg-gray-100 rounded-lg`}
              >
                <div className="flex items-center gap-3">
                  <RiOrganizationChart
                    className={`${
                      activeLink === "/Dashboard/Users/GetAllusers"
                        ? "text-red-400"
                        : "text-black text-sm"
                    }`}
                  />
                  <span className="hidden sm:block text-sm">Organization</span>
                </div>
              </li>
            </Link>

            <Link passHref href="/Dashboard/Driver/GetAllDrivers">
              <li
                onClick={() =>
                  handleLinkClick("/Dashboard/Driver/GetAllDrivers")
                }
                className={`${
                  activeLink === "/Dashboard/Driver/GetAllDrivers"
                    ? "border-l-4 border-red-400"
                    : "bg-white text-blue"
                } flex items-center p-3 cursor-pointer hover:bg-gray-100 rounded-lg`}
              >
                <div className="flex items-center gap-3">
                  <IoPersonAdd
                    className={`${
                      activeLink === "/Dashboard/Driver/GetAllDrivers"
                        ? "text-red-400"
                        : "text-black text-sm"
                    }`}
                  />
                  <span className="hidden sm:block text-sm ">Driver</span>
                </div>
              </li>
            </Link>

            <Link passHref href="/Dashboard/Vehicle/GetAllVehicle">
              <li
                onClick={() =>
                  handleLinkClick("/Dashboard/Vehicle/GetAllVehicle")
                }
                className={`${
                  activeLink === "/Dashboard/Vehicle/GetAllVehicle"
                    ? "border-l-4 border-red-400"
                    : "bg-white text-blue"
                } flex items-center p-3 cursor-pointer hover:bg-gray-100 rounded-lg`}
              >
                <div className="flex items-center gap-3">
                  <FaCar
                    className={`${
                      activeLink === "/Dashboard/Vehicle/GetAllVehicle"
                        ? "text-red-400"
                        : "text-black text-sm"
                    }`}
                  />
                  <span className="hidden sm:block text-sm">Vehicle</span>
                </div>
              </li>
            </Link>

            <div>
              <li
                // className="flex items-center p-3 cursor-pointer hover:bg-gray-100 rounded-lg"
                onMouseEnter={() => setIsOpenManagement(true)}
                onMouseLeave={() => setIsOpenManagement(false)}
                className={`${
                  isOpenManagement === true
                    ? "border-l-4 border-red-400"
                    : "bg-white text-blue"
                } flex items-center p-3 cursor-pointer hover:bg-gray-100 rounded-lg relative`}
              >
                <div className="flex items-center gap-3 relative">
                  <FaCar
                    className={`${
                      isOpenManagement === true
                        ? "text-red-400"
                        : "text-black text-sm"
                    }`}
                  />
                  <MdManageSearch
                    className={`${
                      isOpenManagement === true
                        ? "text-red-400"
                        : "text-black text-sm"
                    }`}
                  />
                  <span className="hidden sm:block text-sm">
                    Vehicle Management
                  </span>

                  {/* Dropdown Menu */}
                  {isOpenManagement && (
                    <div className="absolute left-0 ml-4 mt-2 w-full sm:w-[200px] bg-white border border-gray-300 rounded-md shadow-lg z-50">
                      <ul className="grid grid-cols-1 space-y-1 p-3">
                        <li>
                          <Link
                            href="/Dashboard/Models/Manufacturer/GetManufacturers"
                            className="px-4 py-2 rounded hover:bg-gray-200"
                          >
                            All Manufacturers
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/Dashboard/Models/VehicleType/GetVehicleTypes"
                            className="px-4 py-2 rounded hover:bg-gray-200"
                          >
                            All Vehicle Types
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/Dashboard/Models/Enquiry/GetEnquiries"
                            className="px-4 py-2 rounded hover:bg-gray-200"
                          >
                            All Enquiries
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/Dashboard/Models/Firm/GetFirms"
                            className="px-4 py-2 rounded hover:bg-gray-200"
                          >
                            All Firms
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/Dashboard/Models/Signature/GetSignatures"
                            className="px-4 py-2 rounded hover:bg-gray-200"
                          >
                            All Signatures
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/Dashboard/Models/LocalAuthority/GetLocalAuthority"
                            className="px-4 py-2 rounded hover:bg-gray-200"
                          >
                            All Local Authority
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/Dashboard/Models/Supplier/GetSuppliers"
                            className="px-4 py-2 rounded hover:bg-gray-200"
                          >
                            All Suppliers
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/Dashboard/Models/Employee/GetEmployees"
                            className="px-4 py-2 rounded hover:bg-gray-200"
                          >
                            All Employees
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/Dashboard/Models/Badge/GetBadges"
                            className="px-4 py-2 rounded hover:bg-gray-200"
                          >
                            All Badges
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/Dashboard/Models/Insurance/GetInsurances"
                            className="px-4 py-2 rounded hover:bg-gray-200"
                          >
                            All Insurances
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/Dashboard/Models/Payment/GetPayments"
                            className="px-4 py-2 rounded hover:bg-gray-200"
                          >
                            All Payments
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>
            </div>

            {/*  */}
            <div className="">
              <li
                // className="flex items-center p-3 cursor-pointer hover:bg-gray-100 rounded-lg"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className={`${
                  isOpen === true
                    ? "border-l-4 border-red-400"
                    : "bg-white text-blue"
                } flex items-center p-3 cursor-pointer hover:bg-gray-100 rounded-lg`}
              >
                <TbReport
                  className={`${
                    isOpen === true ? "text-red-400" : "text-black text-sm"
                  }`}
                />
                <div className="relative inline-block text-sm">
                  <span className="items-center cursor-pointer hover:bg-gray-100 rounded-lg hidden sm:block ml-2">
                    Reports
                  </span>
                  {isOpen && (
                    <div className="absolute mt-1 w-auto bg-white border border-gray-300 rounded-md shadow-lg z-50">
                      <ul className="grid grid-cols-2 w-[150px] ">
                        {/* System Reports Dropdown */}
                        <li
                          className="relative hover:bg-gray-100 cursor-pointer"
                          onMouseEnter={() => handleMouseEnter("systemReports")}
                          onMouseLeave={handleMouseLeave}
                        >
                          <Link
                            href="#"
                            className="block px-4 py-2 text-gray-800"
                          >
                            System Reports
                          </Link>
                          {openDropdown === "systemReports" && (
                            <ul className="absolute left-5 mt-1 w-[200px] rounded-md shadow-lg space-y-4 z-50">
                              <li>
                                <Link
                                  href="#"
                                  className="px-4 py-3  rounded hover:bg-gray-200"
                                >
                                  Employee Update Reports
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="px-4 py-3 rounded hover:bg-gray-200"
                                >
                                  Rental Invoice Reports
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="px-4 py-3 rounded hover:bg-gray-200"
                                >
                                  Overdue Payment Reports
                                </Link>
                              </li>
                            </ul>
                          )}
                        </li>

                        {/* Vehicle Reports Dropdown */}
                        <li
                          className="relative hover:bg-gray-100 cursor-pointer"
                          onMouseEnter={() =>
                            handleMouseEnter("vehicleReports")
                          }
                          onMouseLeave={handleMouseLeave}
                        >
                          <Link
                            href="#"
                            className="block px-4 py-2 text-gray-800"
                          >
                            Vehicle Reports
                          </Link>
                          {openDropdown === "vehicleReports" && (
                            <ul className="absolute mt-1 w-[180px]  rounded-md shadow-lg space-y-4  z-50">
                              <li>
                                <Link
                                  href="#"
                                  className="px-4 py-3 rounded hover:bg-gray-200"
                                >
                                  Interim Test Expiry
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="px-4 py-3 rounded hover:bg-gray-200"
                                >
                                  Mot Expiry
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="px-4 py-3 rounded hover:bg-gray-200"
                                >
                                  Road Tax Expiry
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="px-4 py-2 rounded hover:bg-gray-200"
                                >
                                  Test Date Expiry
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="px-4 py-2 rounded hover:bg-gray-200"
                                >
                                  Plate Expiry
                                </Link>
                              </li>
                            </ul>
                          )}
                        </li>

                        {/* Driver Reports Dropdown */}
                        <li
                          className="relative hover:bg-gray-100 cursor-pointer"
                          onMouseEnter={() => handleMouseEnter("driverReports")}
                          onMouseLeave={handleMouseLeave}
                        >
                          <Link
                            href="#"
                            className="block px-4 py-2 text-gray-800"
                          >
                            Driver Reports
                          </Link>

                          {openDropdown === "driverReports" && (
                            <ul className="absolute left-5 mt-1 w-[150px] bg-white rounded-md shadow-lg space-y-4 z-50">
                              <li>
                                <Link
                                  href="#"
                                  className="px-4 py-3 rounded hover:bg-gray-200"
                                >
                                  Drivers Holidays
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="px-4 py-3 rounded hover:bg-gray-200"
                                >
                                  Licence Expiry
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="px-4 py-3 rounded hover:bg-gray-200"
                                >
                                  Taxi Badge Expiry
                                </Link>
                              </li>
                            </ul>
                          )}
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>
            </div>
            {/*  */}

            <Link passHref href="#">
              <li className="flex items-center p-3 cursor-pointer  rounded-lg">
                <div className="flex items-center gap-3">
                  <MdFavorite className="text-black text-sm" />
                  <span className="hidden sm:block">Favourites</span>
                </div>
              </li>
            </Link>
          </ul>
        </nav>
      </aside>
      {/* Modals */}
      <FavouriteModal
        isOpen={isOpenFavouriteModal}
        onClose={toggleDropdownFavourite}
      />
    </div>
  );
};

export default Sidebar;
