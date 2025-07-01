import React, { useState } from "react";
import { SidebarImg, assests } from "@assets/assets";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar = ({collapsed, setCollapsed}) => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  return (
    <>
      {/* Navigation Toggle */}
 <div className="flex justify-between px-10 py-2 bg-white h-auto border-b border-gray-300 max-lg:px-5">

      </div>
      {/* End Navigation Toggle */}

      {/* Sidebar */}
      <div
        id="hs-sidebar-footer"
        className={`hs-overlay [--auto-close:lg] lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 ${
          collapsed ? "w-24" : "w-64"
        }
        hs-overlay-open:translate-x-0
        -translate-x-full transition-all duration-300 transform
        h-full
        hidden
        fixed top-0 start-0 bottom-0 z-60
        bg-white border-e border-gray-200`}
        role="dialog"
        tabIndex="-1"
        aria-label="Sidebar"
      >
        <div className="relative flex flex-col h-full max-h-full">
          {/* Header */}
          <header className="p-4 flex justify-between items-center gap-x-2">
            <a
              className={`flex items-center font-semibold text-2xl text-primary-blue font-inter focus:outline-hidden focus:opacity-80`}
              href="#"
              aria-label="Brand"
            >
              <img className="w-14" src={assests.logo} alt="" />
              {collapsed ? "" : "OS-BIZ"}
            </a>
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
              title={collapsed ? "Expand" : "Collapse"}
            >
              <div className="max-lg:none max-lg:opacity-0 bg-primary-blue hover:shadow-[1px_1px_17px_0px_rgba(70,53,177,0.6)] text-white p-1 rounded-4xl -mr-7">
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {collapsed ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  )}
                </svg>
              </div>
            </button>

            <div className="lg:hidden -me-2">
              {/* Close Button */}
              <button
                type="button"
                className="flex justify-center items-center gap-x-3 size-6 bg-white border border-gray-200 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
                data-hs-overlay="#hs-sidebar-footer"
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                <span className="sr-only">Close</span>
              </button>
              {/* End Close Button */}
            </div>
          </header>
          {/* End Header */}
          <footer className="mt-auto  flex p-2">
            {/* Account Dropdown */}
            <div className="hs-dropdown [--strategy:absolute] [--auto-close:inside] relative w-full inline-flex">
              <button
                id="hs-sidebar-footer-example-with-dropdown"
                type="button"
                className={`w-full inline-flex justify-center shrink-0 items-center gap-x-2 p-2 text-sm text-white bg-primary-blue font-inter rounded-sm hover:shadow-[1px_1px_17px_0px_rgba(70,53,177,0.6)] focus:outline-hidden focus:#D9D9D9 ${
                  collapsed ? "" : "px-3"
                }`}
                aria-haspopup="menu"
                aria-expanded="false"
                aria-label="Dropdown"
              >
                {collapsed ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                ) : (
                  <>
                    <span>NEW</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </>
                )}
              </button>

              {/* Account Dropdown */}
              <div
                className={`hs-dropdown-menu hs-dropdown-open:opacity-100 w-96 transition-all duration-300 ease-in-out opacity-0 hidden z-30 bg-white border border-gray-300 rounded-xl shadow-2xl
    lg:${collapsed ? "hs-dropdown-open:left-24" : "hs-dropdown-open:left-64"}
    hs-dropdown-open:absolute hs-dropdown-open:-top-10 font-inter
  `}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="hs-sidebar-footer-example-with-dropdown"
              >
                <div className="p-4 space-y-2">
                  {/* Company */}
                  <div>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase mb-1">
                      Company
                    </h3>
                    <ul className="space-y-0">
                      {["Business Partner", "Promotion"].map((item) => (
                        <li key={item}>
                          <a
                            className="group flex w-fit items-center gap-3 py-2 px-2 rounded-lg text-sm font-medium text-gray-700 hover:text-primary-blue hover:font-semibold hover:bg-gray-100"
                            href="#"
                          >
                            <svg
                              className="w-4 h-4 text-current transition-all duration-200"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M12 5v14m-7-7h14"
                                stroke="currentColor"
                                strokeLinecap="round"
                                className="transition-all group-hover:[stroke-width:3] stroke-[2]"
                              />
                            </svg>
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-12">
                    {/* Sales */}
                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase mb-1">
                        Sales
                      </h3>
                      <ul className="space-y-0">
                        {["Invoice", "Transaction", "Catalogue"].map((item) => (
                          <li key={item}>
                            <a
                              className="group flex w-fit items-center gap-3 py-2 px-2 rounded-lg text-sm font-medium text-gray-700 hover:text-primary-blue hover:font-semibold hover:bg-gray-100"
                              href="#"
                            >
                              <svg
                                className="w-4 h-4 text-current transition-all duration-200"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M12 5v14m-7-7h14"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  className="transition-all group-hover:[stroke-width:3] stroke-[2]"
                                />
                              </svg>
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Accounts */}
                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase mb-1">
                        Accounts
                      </h3>
                      <ul className="space-y-0">
                        {["Payments", "Aments", "Expenses"].map((item) => (
                          <li key={item}>
                            <a
                              className="group flex w-fit items-center gap-3 py-2 px-2 rounded-lg text-sm font-medium text-gray-700 hover:text-primary-blue hover:font-semibold hover:bg-gray-100"
                              href="#"
                            >
                              <svg
                                className="w-4 h-4 text-current transition-all duration-200"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M12 5v14m-7-7h14"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  className="transition-all group-hover:[stroke-width:3] stroke-[2]"
                                />
                              </svg>
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    {/* Inventory */}
                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase mb-1">
                        Inventory
                      </h3>
                      <ul className="space-y-0">
                        {[
                          "Purchase Order",
                          "Purchase Return",
                          "Payables",
                          "Inventory",
                          "Indent",
                        ].map((item) => (
                          <li key={item}>
                            <a
                              className="group flex w-fit items-center gap-3 py-2 px-2 rounded-lg text-sm font-medium text-gray-700 hover:text-primary-blue hover:font-semibold hover:bg-gray-100"
                              href="#"
                            >
                              <svg
                                className="w-4 h-4 text-current transition-all duration-200"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M12 5v14m-7-7h14"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  className="transition-all group-hover:[stroke-width:3] stroke-[2]"
                                />
                              </svg>
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Payroll */}
                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                        Payroll
                      </h3>
                      <ul className="space-y-1">
                        {[
                          "Employees",
                          "TimeSheets",
                          "Salary Process",
                          "Payslip",
                        ].map((item) => (
                          <li key={item}>
                            <a
                              className="group flex w-fit items-center gap-3 py-2 px-2 rounded-lg text-sm font-medium text-gray-700 hover:text-primary-blue hover:font-semibold hover:bg-gray-100"
                              href="#"
                            >
                              <svg
                                className="w-4 h-4 text-current transition-all duration-200"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M12 5v14m-7-7h14"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  className="transition-all group-hover:[stroke-width:3] stroke-[2]"
                                />
                              </svg>
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* End Account Dropdown */}
            </div>
            {/* End Account Dropdown */}
          </footer>
          {/* Body */}
          <nav className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
            <div
              className="hs-accordion-group pb-0 px-2 w-full flex flex-col flex-wrap"
              data-hs-accordion-always-open
            >
              <ul className="space-y-2">
                <li>
                  <Link to='/dashboard'
                    className={`group flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-inter rounded-lg font-medium transition-colors duration-200 ${
      collapsed ? "justify-center" : ""
    } ${
      activeItem === 'Dashboard' 
        ? "text-white font-semibold bg-primary-blue group" 
        : "text-black hover:text-primary-blue hover:font-semibold hover:text-md"
    }`}
                     onClick={() => setActiveItem('Dashboard')}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="transition-colors duration-200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.2988 13.5498L18.4717 13.5586C18.8724 13.5989 19.2489 13.7764 19.5361 14.0635C19.8643 14.3916 20.0489 14.8368 20.0498 15.3008V18.2998C20.0488 18.7638 19.8641 19.2081 19.5361 19.5361C19.2079 19.8644 18.7632 20.049 18.2988 20.0498H15.3008C14.8367 20.0489 14.3916 19.8643 14.0635 19.5361C13.7764 19.2489 13.5989 18.8723 13.5586 18.4717L13.5498 18.2988V15.3008C13.5507 14.8367 13.7353 14.3916 14.0635 14.0635C14.3916 13.7353 14.8368 13.5507 15.3008 13.5498H18.2988ZM9.49902 13.5498L9.67188 13.5586C10.0724 13.599 10.4491 13.7763 10.7363 14.0635C11.0235 14.3506 11.2008 14.7274 11.2412 15.1279L11.25 15.3008V18.2998C11.249 18.7637 11.0642 19.2082 10.7363 19.5361C10.4081 19.8644 9.96313 20.049 9.49902 20.0498H6.50098C6.03672 20.049 5.59185 19.8643 5.26367 19.5361C4.97649 19.2489 4.7991 18.8724 4.75879 18.4717L4.75 18.2988V15.3008C4.7509 14.8367 4.93553 14.3916 5.26367 14.0635C5.59184 13.7354 6.03681 13.5506 6.50098 13.5498H9.49902ZM18.2988 4.75L18.4717 4.75879C18.8724 4.79912 19.2489 4.9765 19.5361 5.26367C19.8643 5.59185 20.049 6.03674 20.0498 6.50098V9.5C20.0487 9.96378 19.8641 10.4084 19.5361 10.7363C19.2079 11.0645 18.7631 11.2492 18.2988 11.25H15.3008C14.8367 11.2491 14.3916 11.0645 14.0635 10.7363C13.7763 10.4491 13.5989 10.0724 13.5586 9.67188L13.5498 9.49902V6.50098C13.5507 6.03679 13.7354 5.59182 14.0635 5.26367C14.3506 4.97651 14.7274 4.7992 15.1279 4.75879L15.3008 4.75H18.2988ZM9.49902 4.75L9.67188 4.75879C10.0725 4.79913 10.4491 4.97644 10.7363 5.26367C11.0645 5.59184 11.2491 6.03672 11.25 6.50098V9.5C11.2489 9.96376 11.0643 10.4083 10.7363 10.7363C10.4081 11.0645 9.96317 11.2492 9.49902 11.25H6.50098C6.03676 11.2492 5.59184 11.0645 5.26367 10.7363C4.97647 10.4491 4.79916 10.0725 4.75879 9.67188L4.75 9.49902V6.50098C4.75082 6.03675 4.9355 5.59185 5.26367 5.26367C5.55085 4.9765 5.92745 4.79919 6.32812 4.75879L6.50098 4.75H9.49902Z"
                        className={`stroke-current fill-none ${
          activeItem === 'Dashboard' 
            ? "fill-[#A7B2D6] stroke-white" 
            : "group-hover:fill-[#A7B2D6] group-hover:stroke-primary-blue"
        }`}
                        strokeWidth="1.4"
                      />
                    </svg>
                    {!collapsed && "Dashboard"}
                  </Link>
                </li>

                <li>
                  <a
                    className={`group flex items-center gap-x-3.5 py-2 px-2.5  text-sm font-inter text-black rounded-lg font-medium transition-colors duration-200 ${
                      collapsed ? "justify-center" : ""
                    } ${
      activeItem === 'Business Partner' 
        ? "text-white font-semibold bg-primary-blue group" 
        : "text-black hover:text-primary-blue hover:font-semibold hover:text-md"
    }`}
                    href="#"
                    onClick={() => setActiveItem('Business Partner')}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="transition-colors duration-200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.75 6C15.75 6.99456 15.3549 7.94839 14.6516 8.65165C13.9484 9.35491 12.9945 9.75 12 9.75C11.0054 9.75 10.0516 9.35491 9.34833 8.65165C8.64506 7.94839 8.24998 6.99456 8.24998 6C8.24998 5.00544 8.64506 4.05161 9.34833 3.34835C10.0516 2.64509 11.0054 2.25 12 2.25C12.9945 2.25 13.9484 2.64509 14.6516 3.34835C15.3549 4.05161 15.75 5.00544 15.75 6ZM4.50098 20.118C4.53311 18.1503 5.33731 16.2742 6.74015 14.894C8.14299 13.5139 10.0321 12.7405 12 12.7405C13.9679 12.7405 15.857 13.5139 17.2598 14.894C18.6626 16.2742 19.4668 18.1503 19.499 20.118C17.1464 21.1968 14.5881 21.7535 12 21.75C9.32398 21.75 6.78398 21.166 4.50098 20.118Z"
                        stroke-width="1.4"
                        stroke-linecap="round"
                        className="stroke-current fill-none group-hover:fill-[#A7B2D6] group-hover:stroke-primary-blue"
                        stroke-linejoin="round"
                      />
                    </svg>
                    {!collapsed && "Business Partner"}
                  </a>
                </li>

                <li className="hs-accordion group" id="account-accordion">
                  {" "}
                  {/* Added group here */}
                  <button
                    type="button"
                    className={`hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-inter text-black rounded-lg font-medium hover:text-primary-blue hover:font-semibold hover:text-md transition-colors duration-200 focus:outline-hidden focus:bg-gray-400 ${
                      collapsed ? "justify-center" : ""
                    }`}
                    aria-expanded="true"
                    aria-controls="account-accordion-sub-1-collapse-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                    >
                      <path
                        d="M22.713,4.077A2.993,2.993,0,0,0,20.41,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.82-2h11.92a5,5,0,0,0,4.921-4.113l.785-4.354A2.994,2.994,0,0,0,22.713,4.077Z"
                        className="stroke-current fill-none group-hover:fill-[#A7B2D6] group-hover:stroke-primary-blue"
                        strokeWidth="2"
                      />
                      <circle cx="7" cy="22" r="2" />
                      <circle cx="17" cy="22" r="2" />
                    </svg>
                    {!collapsed && (
                      <>
                        Sales
                        <svg
                          className="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-primary-blue"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m18 15-6-6-6 6" />
                        </svg>
                        <svg
                          className="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-primary-blue"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </>
                    )}
                  </button>
                  <div
                    id="account-accordion-sub-1-collapse-1"
                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    role="region"
                    aria-labelledby="account-accordion"
                  >
                    <ul className="pt-1 ps-7 space-y-1">
                      <li>
                        <a
                          className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-inter text-black rounded-lg font-medium hover:text-primary-blue hover:font-semibold hover:text-md transition-colors duration-200 focus:outline-hidden focus:bg-gray-100 ${
                            collapsed ? "justify-center" : ""
                          }`}
                          href="#"
                        >
                          {!collapsed && "Invoice"}
                        </a>
                      </li>
                      <li>
                        <a
                          className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-inter text-black rounded-lg font-medium hover:text-primary-blue hover:font-semibold hover:text-md transition-colors duration-200 focus:outline-hidden focus:bg-gray-100 ${
                            collapsed ? "justify-center" : ""
                          }`}
                          href="#"
                        >
                          {!collapsed && "Transaction"}
                        </a>
                      </li>
                      <li>
                        <a
                          className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-inter text-black rounded-lg font-medium hover:text-primary-blue hover:font-semibold hover:text-md transition-colors duration-200 focus:outline-hidden focus:bg-gray-100 ${
                            collapsed ? "justify-center" : ""
                          }`}
                          href="#"
                        >
                          {!collapsed && "Catalogue"}
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="hs-accordion group" id="account-accordion">
                  {" "}
                  {/* Added group here */}
                  <button
                    type="button"
                    className={`hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-inter text-black rounded-lg font-medium hover:text-primary-blue hover:font-semibold hover:text-md transition-colors duration-200 focus:outline-hidden focus:bg-gray-400 ${
                      collapsed ? "justify-center" : ""
                    }`}
                    aria-expanded="true"
                    aria-controls="account-accordion-sub-1-collapse-1"
                  >
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.559 0.863273C13.7018 0.919935 13.8305 0.993999 13.9621 1.07275C14.0003 1.09477 14.0385 1.11678 14.0778 1.13947C14.1626 1.18849 14.2471 1.23788 14.3314 1.28757C14.4885 1.38013 14.6461 1.47166 14.8038 1.5631C15.1003 1.73527 15.3962 1.90835 15.6919 2.08202C15.5508 2.2338 15.4156 2.33646 15.234 2.43551C15.1837 2.46326 15.1334 2.49101 15.0815 2.5196C15.0274 2.54906 14.9732 2.57853 14.9174 2.60888C14.8017 2.67273 14.6861 2.73667 14.5705 2.8007C14.5411 2.81697 14.5116 2.83324 14.4813 2.85001C14.1893 3.01182 13.9009 3.17944 13.613 3.34838C13.5119 3.40763 13.4108 3.46688 13.3097 3.52612C13.2591 3.55577 13.2085 3.58542 13.1563 3.61598C12.887 3.77326 12.6169 3.929 12.3466 4.08471C12.2921 4.11618 12.2375 4.14764 12.1812 4.18006C12.0703 4.24399 11.9593 4.30791 11.8484 4.37182C11.621 4.5028 11.3937 4.63388 11.1665 4.765C11.0552 4.82917 10.9439 4.89331 10.8327 4.95741C10.5766 5.10496 10.3209 5.25298 10.0661 5.40244C9.99859 5.44189 9.99859 5.44189 9.92976 5.48214C9.84632 5.53098 9.76297 5.58 9.67975 5.62922C9.40632 5.78906 9.40632 5.78906 9.29342 5.78906C9.27164 6.1541 9.25674 6.51877 9.25014 6.88442C9.24687 7.05453 9.24075 7.22337 9.23057 7.39328C9.18794 8.05167 9.18794 8.05167 9.3442 8.68359C9.63509 9.004 10.0266 9.17456 10.4214 9.33515C10.5456 9.38726 10.6579 9.44449 10.7734 9.51327C10.9051 9.60617 10.9051 9.60617 11.02 9.59765C11.0181 9.56476 11.0163 9.53188 11.0144 9.49799C10.9962 9.15278 10.986 8.80797 10.9803 8.46233C10.9772 8.33377 10.972 8.20525 10.9648 8.07685C10.9085 7.04254 10.9085 7.04254 11.1747 6.73566C11.4412 6.52295 11.739 6.38417 12.0521 6.25338C12.2254 6.17932 12.3789 6.0893 12.5395 5.99099C12.6381 5.9342 12.7367 5.87746 12.8354 5.82079C12.9473 5.75639 13.0592 5.69199 13.171 5.62759C13.2268 5.59553 13.2825 5.56347 13.34 5.53044C13.6163 5.37145 13.8923 5.21207 14.1684 5.05273C14.2784 4.98925 14.3885 4.92577 14.4985 4.8623C14.553 4.83088 14.6074 4.79946 14.6635 4.76708C14.8286 4.67187 14.9936 4.57665 15.1587 4.48144C15.2132 4.44993 15.2677 4.41843 15.3239 4.38596C15.4331 4.32303 15.5426 4.26042 15.6522 4.19814C15.9103 4.05102 16.1654 3.90146 16.4146 3.73992C16.5318 3.66425 16.6501 3.59039 16.7685 3.51664C16.8512 3.46407 16.9323 3.40893 17.0134 3.35374C17.1676 3.25834 17.2925 3.19 17.4692 3.14843C17.7025 3.20404 17.88 3.32194 18.0786 3.45312C18.1822 3.51182 18.2862 3.57001 18.3904 3.62768C18.4939 3.68778 18.5973 3.74809 18.7006 3.80859C18.7526 3.83857 18.8046 3.86855 18.8581 3.89944C19.688 4.38367 19.688 4.38367 19.8051 4.67187C19.8181 4.80546 19.8181 4.80546 19.8184 4.96029C19.8187 5.01909 19.8191 5.0779 19.8195 5.13848C19.8193 5.2028 19.8192 5.26712 19.8191 5.33339C19.8193 5.40197 19.8196 5.47054 19.8199 5.53912C19.8206 5.72525 19.8206 5.91138 19.8205 6.09751C19.8204 6.25298 19.8206 6.40845 19.8209 6.56392C19.8215 6.93079 19.8215 7.29765 19.8212 7.66452C19.8209 8.04274 19.8215 8.42096 19.8226 8.79918C19.8235 9.12411 19.8238 9.44902 19.8236 9.77395C19.8235 9.96792 19.8236 10.1619 19.8244 10.3559C19.825 10.5383 19.8249 10.7208 19.8242 10.9033C19.8241 11.002 19.8246 11.1006 19.8252 11.1993C19.8219 11.7505 19.8219 11.7505 19.6528 11.9844C19.5331 12.0712 19.4232 12.1403 19.2942 12.2097C19.2157 12.2539 19.1373 12.298 19.0589 12.3422C19.0159 12.3661 18.9728 12.3899 18.9285 12.4145C18.7257 12.5278 18.525 12.6445 18.324 12.761C18.1546 12.8591 17.985 12.9569 17.8153 13.0545C17.4798 13.2478 17.1444 13.4412 16.809 13.6348C16.4778 13.8259 16.1466 14.017 15.8152 14.2078C15.7602 14.2396 15.7051 14.2713 15.6484 14.304C15.5385 14.3673 15.4285 14.4305 15.3185 14.4936C15.0403 14.6533 14.7643 14.8157 14.4908 14.9832C14.4087 15.0329 14.4087 15.0329 14.3251 15.0835C14.2216 15.1463 14.1186 15.2098 14.0162 15.2743C13.7758 15.4191 13.5631 15.5438 13.2761 15.5214C12.9892 15.4444 12.7412 15.2795 12.4895 15.1265C12.4264 15.0891 12.3632 15.0519 12.3 15.0147C12.1713 14.9389 12.0431 14.8626 11.915 14.7858C11.6989 14.6563 11.481 14.5296 11.2631 14.4031C11.1139 14.3164 10.965 14.2293 10.8161 14.1422C10.4975 13.956 10.178 13.7714 9.85836 13.5872C9.80391 13.5558 9.74945 13.5244 9.69334 13.492C9.40956 13.3284 9.12569 13.1651 8.84175 13.0018C8.56597 12.8432 8.29052 12.684 8.01526 12.5244C7.8854 12.4494 7.75515 12.3751 7.62478 12.301C7.55573 12.2611 7.4867 12.2211 7.41769 12.1811C7.36068 12.1486 7.30366 12.116 7.24492 12.0824C7.09502 11.9736 7.03907 11.8954 6.95749 11.7305C6.93832 11.5897 6.93832 11.5897 6.93814 11.4337C6.93771 11.3743 6.93728 11.3149 6.93684 11.2537C6.9373 11.1567 6.9373 11.1567 6.93777 11.0577C6.93757 10.9885 6.9373 10.9194 6.93697 10.8502C6.93627 10.6627 6.93654 10.4752 6.93702 10.2877C6.93741 10.0914 6.93705 9.89503 6.93681 9.69868C6.93654 9.36895 6.9369 9.03923 6.93763 8.7095C6.93845 8.32847 6.93819 7.94746 6.93735 7.56643C6.93666 7.2391 6.93656 6.91176 6.93696 6.58443C6.93719 6.38901 6.93723 6.1936 6.93672 5.99818C6.93628 5.81444 6.93659 5.63072 6.93747 5.44699C6.93777 5.34752 6.93731 5.24805 6.93684 5.14859C6.93727 5.08921 6.9377 5.02984 6.93814 4.96867C6.9382 4.91718 6.93826 4.86569 6.93832 4.81264C6.96603 4.60916 7.04687 4.47123 7.20315 4.33901C7.23827 4.31689 7.2734 4.29476 7.30958 4.27197C7.35016 4.24631 7.39074 4.22065 7.43254 4.19421C7.67961 4.04534 7.92882 3.90065 8.17941 3.75781C8.29759 3.69006 8.41574 3.62228 8.53389 3.55448C8.57851 3.52891 8.57851 3.52891 8.62403 3.50281C8.91374 3.33664 9.20201 3.16805 9.4902 2.99926C9.96064 2.72408 10.4333 2.4529 10.9068 2.18312C11.3882 1.90884 11.8675 1.63136 12.3454 1.35095C12.4364 1.2976 12.5275 1.2445 12.6189 1.19169C12.7031 1.14252 12.7867 1.09227 12.8697 1.04088C13.1076 0.897726 13.2738 0.815896 13.559 0.863273Z" stroke="black" stroke-width="1.2" className="stroke-current fill-none group-hover:fill-[#A7B2D6] group-hover:stroke-primary-blue"/>
<path d="M21.5825 12.8475C21.7111 12.9113 21.7111 12.9113 21.8471 12.9919C21.8974 13.0215 21.9478 13.0511 21.9996 13.0816C22.0526 13.1133 22.1055 13.1449 22.1601 13.1776C22.2415 13.2259 22.2415 13.2259 22.3245 13.2752C22.4332 13.3397 22.5418 13.4044 22.6503 13.4692C22.7812 13.5466 22.9128 13.6221 23.0454 13.6965C23.0804 13.7164 23.1153 13.7364 23.1514 13.7569C23.2421 13.8086 23.3332 13.8597 23.4243 13.9107C23.5985 14.0423 23.6397 14.1134 23.7153 14.3202C23.7378 14.5448 23.7361 14.7684 23.735 14.994C23.7352 15.0627 23.7355 15.1314 23.7358 15.2C23.7365 15.386 23.7362 15.5719 23.7358 15.7578C23.7354 15.9526 23.7357 16.1474 23.736 16.3422C23.7362 16.6692 23.7359 16.9962 23.7352 17.3233C23.7343 17.7011 23.7346 18.079 23.7354 18.4569C23.7361 18.7816 23.7362 19.1064 23.7358 19.4311C23.7356 19.625 23.7356 19.8188 23.7361 20.0126C23.7365 20.1948 23.7362 20.377 23.7353 20.5592C23.735 20.6578 23.7355 20.7564 23.7359 20.855C23.7353 20.9434 23.7353 20.9434 23.7346 21.0335C23.7346 21.0845 23.7345 21.1355 23.7345 21.1881C23.7054 21.3998 23.618 21.5344 23.4577 21.6727C23.1358 21.8901 22.8056 22.0844 22.4648 22.2706C22.0355 22.508 21.6088 22.749 21.1858 22.9974C20.7442 23.2565 20.3008 23.5121 19.8559 23.7655C19.3446 24.0568 18.835 24.351 18.3274 24.6489C18.2364 24.7022 18.1452 24.7553 18.0539 24.8082C17.9697 24.8573 17.886 24.9076 17.8031 24.959C17.5646 25.1024 17.3984 25.1908 17.1137 25.1366C16.9116 25.0471 16.7232 24.9377 16.5329 24.8255C16.4771 24.7934 16.4212 24.7613 16.3637 24.7282C16.1901 24.6281 16.0171 24.527 15.8442 24.4256C15.7416 24.366 15.639 24.3064 15.5363 24.2469C15.3355 24.1302 15.135 24.0131 14.9347 23.8956C14.6145 23.708 14.2932 23.5223 13.9716 23.337C13.9171 23.3056 13.8626 23.2742 13.8064 23.2418C13.5818 23.1123 13.357 22.9829 13.1323 22.8534C12.7991 22.6616 12.466 22.4694 12.1331 22.2769C11.9946 22.1969 11.856 22.1173 11.7172 22.0377C11.6393 21.9927 11.5613 21.9476 11.4834 21.9024C11.449 21.8828 11.4146 21.8633 11.3791 21.8431C11.1437 21.706 10.9558 21.5926 10.8676 21.328C10.8631 21.2423 10.8615 21.1564 10.8615 21.0706C10.8614 20.9908 10.8614 20.9908 10.8613 20.9094C10.8615 20.8511 10.8617 20.7927 10.8619 20.7326C10.8619 20.6712 10.8619 20.6098 10.8619 20.5465C10.8619 20.378 10.8621 20.2095 10.8625 20.041C10.8628 19.8649 10.8628 19.6889 10.8629 19.5128C10.8631 19.1793 10.8635 18.8459 10.864 18.5125C10.8646 18.1329 10.8648 17.7533 10.8651 17.3737C10.8656 16.5928 10.8665 15.812 10.8676 15.0311C11.0698 15.1096 11.2517 15.2025 11.4395 15.3114C11.4695 15.3287 11.4995 15.346 11.5304 15.3638C11.6259 15.4188 11.7213 15.4741 11.8166 15.5294C12.4876 15.9372 12.4876 15.9372 13.2036 16.2498C13.1985 16.3092 13.1934 16.3685 13.1881 16.4297C13.0661 17.4564 13.0661 17.4564 13.3102 18.4219C13.5827 18.7304 13.9953 18.8761 14.3793 18.9933C14.5276 19.0441 14.6443 19.1142 14.7778 19.1952C14.8451 19.2136 14.9128 19.2309 14.9809 19.2459C14.9799 19.2123 14.9789 19.1786 14.9778 19.1439C14.9677 18.793 14.9608 18.4421 14.9558 18.0911C14.9535 17.9602 14.9504 17.8292 14.9464 17.6983C14.9409 17.51 14.9383 17.3218 14.9363 17.1334C14.9339 17.075 14.9316 17.0165 14.9291 16.9564C14.9289 16.5589 14.9289 16.5589 15.0767 16.4023C15.1938 16.323 15.3102 16.2595 15.438 16.1991C15.4841 16.1714 15.5302 16.1437 15.5777 16.1152C15.6359 16.0829 15.6359 16.0829 15.6952 16.0499C15.7626 16.0122 15.7626 16.0122 15.8314 15.9737C15.8785 15.9476 15.9257 15.9214 15.9743 15.8944C16.387 15.6632 16.7976 15.4288 17.2058 15.1898C17.6292 14.9419 18.0534 14.6953 18.4785 14.4503C18.533 14.4189 18.5875 14.3874 18.6437 14.3551C18.8684 14.2256 19.0931 14.0961 19.3178 13.9667C19.4332 13.9003 19.5485 13.8339 19.6638 13.7674C19.7758 13.7029 19.8878 13.6385 19.9999 13.5741C20.2455 13.4329 20.4899 13.2906 20.7311 13.1421C20.7907 13.1057 20.7907 13.1057 20.8516 13.0685C20.9236 13.0243 20.9953 12.9796 21.0665 12.934C21.2659 12.8122 21.3599 12.7816 21.5825 12.8475Z" stroke="black" stroke-width="1.2" className="stroke-current fill-none group-hover:fill-[#A7B2D6] group-hover:stroke-primary-blue"/>
<path d="M6.19577 6.90625C6.21255 7.28204 6.22408 7.65774 6.23203 8.03383C6.23534 8.16163 6.23984 8.2894 6.24557 8.41712C6.2916 9.4706 6.2916 9.4706 6.07623 9.75615C5.90198 9.86408 5.72852 9.93825 5.53561 10.0039C5.2155 10.1166 4.88423 10.2341 4.67233 10.5117C4.53047 10.9033 4.54822 11.3263 4.55978 11.7371C4.56442 11.9336 4.55983 12.1284 4.5543 12.3248C4.53317 12.9259 4.53317 12.9259 4.75615 13.4626C4.95665 13.633 5.17792 13.7315 5.42383 13.8196C5.60758 13.8914 5.77112 13.9951 5.93869 14.0981C6.13182 14.2242 6.13182 14.2242 6.34811 14.2695C6.36487 13.6327 6.38163 12.9959 6.39889 12.3398C6.55124 12.3906 6.55124 12.3906 6.65042 12.4995C6.85988 12.7172 7.139 12.8419 7.40182 12.9841C7.51724 13.0477 7.63262 13.1113 7.74797 13.175C7.80414 13.2059 7.86031 13.2368 7.91819 13.2686C8.11926 13.3802 8.31805 13.4953 8.51583 13.6126C8.54858 13.632 8.58133 13.6514 8.61507 13.6714C8.68373 13.7122 8.75237 13.753 8.82099 13.7939C8.95953 13.8761 9.0984 13.9578 9.23728 14.0394C9.34063 14.1003 9.44398 14.1611 9.54733 14.2219C9.59686 14.251 9.64639 14.2801 9.69743 14.3101C9.7432 14.3371 9.78898 14.3641 9.83615 14.3919C9.87719 14.4161 9.91823 14.4402 9.96052 14.4651C10.0551 14.5234 10.0551 14.5234 10.1059 14.5742C10.1108 14.7273 10.1123 14.8791 10.1117 15.0322C10.1117 15.0802 10.1117 15.1283 10.1117 15.1778C10.1117 15.3374 10.1113 15.4971 10.1109 15.6567C10.1108 15.7671 10.1107 15.8774 10.1107 15.9878C10.1105 16.2789 10.11 16.57 10.1094 16.8611C10.1089 17.1579 10.1087 17.4547 10.1084 17.7515C10.1079 18.3344 10.107 18.9172 10.1059 19.5C9.92172 19.6117 9.73627 19.7211 9.5505 19.8301C9.49862 19.8616 9.44675 19.8931 9.3933 19.9255C9.08719 20.1035 8.83886 20.2351 8.48092 20.1602C8.31947 20.0977 8.31947 20.0977 8.17167 20.0092C8.11579 19.9765 8.05992 19.9437 8.00234 19.91C7.94287 19.8739 7.8834 19.8377 7.82394 19.8015C7.76109 19.7643 7.69819 19.7272 7.63522 19.6902C7.50586 19.6139 7.3768 19.5372 7.24796 19.4601C6.96489 19.2911 6.67853 19.1277 6.39254 18.9636C6.28342 18.9007 6.17432 18.8376 6.06524 18.7746C5.79146 18.6164 5.51759 18.4583 5.24368 18.3003C5.1341 18.2371 5.02453 18.1739 4.91497 18.1106C4.63186 17.9472 4.34861 17.7841 4.06514 17.6213C3.78869 17.4625 3.51269 17.303 3.23702 17.1429C3.11633 17.073 2.99522 17.004 2.87396 16.9352C2.81428 16.9004 2.75464 16.8657 2.69504 16.8308C2.62365 16.7899 2.62365 16.7899 2.55082 16.7481C2.39718 16.6231 2.35588 16.5401 2.28561 16.3516C2.26291 16.127 2.26481 15.9033 2.2659 15.6777C2.26569 15.609 2.26542 15.5404 2.26509 15.4717C2.2644 15.2858 2.26466 15.0999 2.26515 14.914C2.26553 14.7192 2.26518 14.5244 2.26494 14.3296C2.26466 14.0025 2.26502 13.6755 2.26575 13.3485C2.26658 12.9706 2.26631 12.5927 2.26547 12.2148C2.26478 11.8901 2.26468 11.5653 2.26508 11.2406C2.26532 11.0468 2.26535 10.8529 2.26485 10.6591C2.26441 10.4769 2.26471 10.2947 2.26559 10.1125C2.26589 10.0139 2.26544 9.9153 2.26496 9.81668C2.26539 9.75781 2.26582 9.69894 2.26627 9.63828C2.26632 9.58723 2.26638 9.53618 2.26644 9.48359C2.29428 9.28056 2.37551 9.14263 2.5315 9.01078C2.56668 8.98863 2.60186 8.96648 2.6381 8.94365C2.6787 8.91798 2.71929 8.89231 2.76112 8.86587C3.00598 8.71824 3.25285 8.57456 3.50119 8.43286C3.58828 8.38289 3.67538 8.33292 3.76246 8.28294C3.85269 8.23118 3.94295 8.17949 4.03323 8.1278C4.32917 7.95828 4.62449 7.78767 4.91989 7.61719C4.97258 7.58682 5.02527 7.55645 5.07956 7.52516C5.13043 7.49583 5.18129 7.4665 5.2337 7.43628C5.28298 7.40787 5.33225 7.37946 5.38302 7.35019C5.5988 7.22509 5.81363 7.09838 6.02837 6.97151C6.14499 6.90625 6.14499 6.90625 6.19577 6.90625Z" stroke="black" stroke-width="1.2" className="stroke-current fill-none group-hover:fill-[#A7B2D6] group-hover:stroke-primary-blue"/>
</svg>

                    {!collapsed && (
                      <>
                        Inventory
                        <svg
                          className="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-primary-blue"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m18 15-6-6-6 6" />
                        </svg>
                        <svg
                          className="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-primary-blue"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </>
                    )}
                  </button>
                  <div
                    id="account-accordion-sub-1-collapse-1"
                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    role="region"
                    aria-labelledby="account-accordion"
                  >
                    <ul className="pt-1 ps-7 space-y-1">
                      <li>
                        <a
                          className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-inter text-black rounded-lg font-medium hover:text-primary-blue hover:font-semibold hover:text-md transition-colors duration-200 focus:outline-hidden focus:bg-gray-100 ${
                            collapsed ? "justify-center" : ""
                          }`}
                          href="#"
                        >
                          {!collapsed && "Purchase Orders"}
                        </a>
                      </li>
                      <li>
                        <a
                          className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-inter text-black rounded-lg font-medium hover:text-primary-blue hover:font-semibold hover:text-md transition-colors duration-200 focus:outline-hidden focus:bg-gray-100 ${
                            collapsed ? "justify-center" : ""
                          }`}
                          href="#"
                        >
                          {!collapsed && "Purchase Returns"}
                        </a>
                      </li>
                      <li>
                        <a
                          className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-inter text-black rounded-lg font-medium hover:text-primary-blue hover:font-semibold hover:text-md transition-colors duration-200 focus:outline-hidden focus:bg-gray-100 ${
                            collapsed ? "justify-center" : ""
                          }`}
                          href="#"
                        >
                          {!collapsed && "Payables"}
                        </a>
                      </li>
                      <li>
                        <a
                          className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-inter text-black rounded-lg font-medium hover:text-primary-blue hover:font-semibold hover:text-md transition-colors duration-200 focus:outline-hidden focus:bg-gray-100 ${
                            collapsed ? "justify-center" : ""
                          }`}
                          href="#"
                        >
                          {!collapsed && "Inventory"}
                        </a>
                      </li>
                      <li>
                        <a
                          className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-inter text-black rounded-lg font-medium hover:text-primary-blue hover:font-semibold hover:text-md transition-colors duration-200 focus:outline-hidden focus:bg-gray-100 ${
                            collapsed ? "justify-center" : ""
                          }`}
                          href="#"
                        >
                          {!collapsed && "Indent"}
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="hs-accordion group" id="account-accordion">
                  {" "}
                  {/* Added group here */}
                  <button
                    type="button"
                    className={`hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-inter text-black rounded-lg font-medium hover:text-primary-blue hover:font-semibold hover:text-md transition-colors duration-200 focus:outline-hidden focus:bg-gray-400 ${
                      collapsed ? "justify-center" : ""
                    }`}
                    aria-expanded="true"
                    aria-controls="account-accordion-sub-1-collapse-1"
                  >
                    <svg width="20" height="24" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.3529 13.2294V6.59059C19.3529 4.6337 19.3529 3.65525 18.9779 2.90782C18.648 2.25036 18.1216 1.71583 17.4741 1.38084C16.7379 1 15.7744 1 13.8471 1H6.50588C4.57864 1 3.61502 1 2.87892 1.38084C2.23141 1.71583 1.70498 2.25036 1.37507 2.90782C1 3.65525 1 4.6337 1 6.59059V18.7035C1 20.6605 1 21.6388 1.37507 22.3863C1.70498 23.0438 2.23141 23.5783 2.87892 23.9133C3.61502 24.2941 4.57859 24.2941 6.50572 24.2941H10.75M12.4706 11.4824H5.58824M7.88235 16.1412H5.58824M14.7647 6.82353H5.58824M13.6176 20.8L17.0588 24.2941M17.0588 24.2941L20.5 20.8M17.0588 24.2941V17.3059" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="stroke-current fill-none group-hover:fill-[#A7B2D6] group-hover:stroke-primary-blue"/>
</svg>
                    {!collapsed && (
                      <>
                        Accounts
                        <svg
                          className="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-primary-blue"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m18 15-6-6-6 6" />
                        </svg>
                        <svg
                          className="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-primary-blue"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </>
                    )}
                  </button>
                  <div
                    id="account-accordion-sub-1-collapse-1"
                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    role="region"
                    aria-labelledby="account-accordion"
                  >
                    <ul className="pt-1 ps-7 space-y-1">
                      <li>
                        <a
                          className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-inter text-black rounded-lg font-medium hover:text-primary-blue hover:font-semibold hover:text-md transition-colors duration-200 focus:outline-hidden focus:bg-gray-100 ${
                            collapsed ? "justify-center" : ""
                          }`}
                          href="#"
                        >
                          {!collapsed && "Payments"}
                        </a>
                      </li>
                      <li>
                        <a
                          className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-inter text-black rounded-lg font-medium hover:text-primary-blue hover:font-semibold hover:text-md transition-colors duration-200 focus:outline-hidden focus:bg-gray-100 ${
                            collapsed ? "justify-center" : ""
                          }`}
                          href="#"
                        >
                          {!collapsed && "Aments"}
                        </a>
                      </li>
                      <li>
                        <a
                          className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-inter text-black rounded-lg font-medium hover:text-primary-blue hover:font-semibold hover:text-md transition-colors duration-200 focus:outline-hidden focus:bg-gray-100 ${
                            collapsed ? "justify-center" : ""
                          }`}
                          href="#"
                        >
                          {!collapsed && "Expenses"}
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="hs-accordion group" id="account-accordion">
                  {" "}
                  {/* Added group here */}
                  <button
                    type="button"
                    className={`hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-inter text-black rounded-lg font-medium hover:text-primary-blue hover:font-semibold hover:text-md transition-colors duration-200 focus:outline-hidden focus:bg-gray-400 ${
                      collapsed ? "justify-center" : ""
                    }`}
                    aria-expanded="true"
                    aria-controls="account-accordion-sub-1-collapse-1"
                  >
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2505_11556)">
<path d="M15.2734 10.7002C14.0682 11.7435 13.2998 13.2802 13.2998 15V19C13.2998 20.7198 14.0682 22.2565 15.2734 23.2998H0.700195V10.7002H15.2734ZM7.2998 0.700195V2.7002H16.7002V0.700195H17.2998V2.7002H21C22.2674 2.7002 23.2998 3.7326 23.2998 5V7.2998H0.700195V5C0.700195 3.7326 1.7326 2.7002 3 2.7002H6.7002V0.700195H7.2998ZM19.7002 21.2998H19C17.9768 21.2998 17.1078 20.6265 16.8105 19.7002H17.4521C17.7192 20.2894 18.3112 20.7002 19 20.7002H21C21.9386 20.7002 22.7002 19.9386 22.7002 19C22.7002 18.324 22.2444 17.7433 21.6006 17.5762L21.4697 17.5488L18.4297 17.043C17.4268 16.8762 16.7002 16.0171 16.7002 15C16.7002 13.7326 17.7326 12.7002 19 12.7002H19.7002V10.7002H20.2998V12.7002H21C22.0232 12.7002 22.8922 13.3735 23.1895 14.2998H22.5479C22.2808 13.7106 21.6888 13.2998 21 13.2998H19C18.0614 13.2998 17.2998 14.0614 17.2998 15C17.2998 15.676 17.7556 16.2567 18.3994 16.4238L18.5303 16.4512L21.5703 16.957C22.5732 17.1238 23.2998 17.9829 23.2998 19C23.2998 20.2674 22.2674 21.2998 21 21.2998H20.2998V23.2998H19.7002V21.2998Z" stroke="black" stroke-width="1.4" className="stroke-current fill-none group-hover:fill-[#A7B2D6] group-hover:stroke-primary-blue"/>
</g>
<defs>
<clipPath id="clip0_2505_11556">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

                    {!collapsed && (
                      <>
                        Payroll
                        <svg
                          className="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-primary-blue"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m18 15-6-6-6 6" />
                        </svg>
                        <svg
                          className="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-primary-blue"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </>
                    )}
                  </button>
                  <div
                    id="account-accordion-sub-1-collapse-1"
                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    role="region"
                    aria-labelledby="account-accordion"
                  >
                    <ul className="pt-1 ps-7 space-y-1">
                      <li>
                        <a
                          className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-inter text-black rounded-lg font-medium hover:text-primary-blue hover:font-semibold hover:text-md transition-colors duration-200 focus:outline-hidden focus:bg-gray-100 ${
                            collapsed ? "justify-center" : ""
                          }`}
                          href="#"
                        >
                          {!collapsed && "Employees"}
                        </a>
                      </li>
                      <li>
                        <a
                          className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-inter text-black rounded-lg font-medium hover:text-primary-blue hover:font-semibold hover:text-md transition-colors duration-200 focus:outline-hidden focus:bg-gray-100 ${
                            collapsed ? "justify-center" : ""
                          }`}
                          href="#"
                        >
                          {!collapsed && "TimeSheets"}
                        </a>
                      </li>
                      <li>
                        <a
                          className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-inter text-black rounded-lg font-medium hover:text-primary-blue hover:font-semibold hover:text-md transition-colors duration-200 focus:outline-hidden focus:bg-gray-100 ${
                            collapsed ? "justify-center" : ""
                          }`}
                          href="#"
                        >
                          {!collapsed && "Salary Process"}
                        </a>
                      </li>
                      <li>
                        <a
                          className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-inter text-black rounded-lg font-medium hover:text-primary-blue hover:font-semibold hover:text-md transition-colors duration-200 focus:outline-hidden focus:bg-gray-100 ${
                            collapsed ? "justify-center" : ""
                          }`}
                          href="#"
                        >
                          {!collapsed && "Payslip"}
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="hs-accordion group" id="account-accordion">
                  {" "}
                  {/* Added group here */}
                  <button
                    type="button"
                    className={`hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-inter text-black rounded-lg font-medium hover:text-primary-blue hover:font-semibold hover:text-md transition-colors duration-200 focus:outline-hidden focus:bg-gray-400 ${
                      collapsed ? "justify-center" : ""
                    }`}
                    aria-expanded="true"
                    aria-controls="account-accordion-sub-1-collapse-1"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#191D23" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="stroke-current fill-none group-hover:fill-[#A7B2D6] group-hover:stroke-primary-blue"/>
<path d="M16 17H8" stroke="#191D23" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="stroke-current fill-none group-hover:fill-[#A7B2D6] group-hover:stroke-primary-blue"/>
<path d="M16 13H8" stroke="#191D23" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="stroke-current fill-none group-hover:fill-[#A7B2D6] group-hover:stroke-primary-blue"/>
<path d="M10 9H9H8" stroke="#191D23" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="stroke-current fill-none group-hover:fill-[#A7B2D6] group-hover:stroke-primary-blue"/>
<path d="M14 2V8H20" stroke="#191D23" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="stroke-current fill-none group-hover:fill-[#A7B2D6] group-hover:stroke-primary-blue"/>
</svg>
                    {!collapsed && (
                      <>
                        Report
                        <svg
                          className="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-primary-blue"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m18 15-6-6-6 6" />
                        </svg>
                        <svg
                          className="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-primary-blue"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </>
                    )}
                  </button>
                  <div
                    id="account-accordion-sub-1-collapse-1"
                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    role="region"
                    aria-labelledby="account-accordion"
                  >
                    <ul className="pt-1 ps-7 space-y-1">
                      <li>
                        <a
                          className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-inter text-black rounded-lg font-medium hover:text-primary-blue hover:font-semibold hover:text-md transition-colors duration-200 focus:outline-hidden focus:bg-gray-100 ${
                            collapsed ? "justify-center" : ""
                          }`}
                          href="#"
                        >
                          {!collapsed && "Category wise Reports"}
                        </a>
                      </li>
                      <li>
                        <a
                          className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-inter text-black rounded-lg font-medium hover:text-primary-blue hover:font-semibold hover:text-md transition-colors duration-200 focus:outline-hidden focus:bg-gray-100 ${
                            collapsed ? "justify-center" : ""
                          }`}
                          href="#"
                        >
                          {!collapsed && "Customize Reports"}
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <a
                    className={`group flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-inter text-black rounded-lg font-medium hover:text-primary-blue hover:font-semibold hover:text-md transition-colors duration-200 focus:outline-hidden focus:bg-gray-400 ${
                      collapsed ? "justify-center" : ""
                    }`}
                    href="#"
                  >
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.25466 15.698C2.31568 15.6533 1.51362 14.9837 1.32669 13.9908L1.28007 13.7432C1.09313 12.7502 1.57884 11.7398 2.41269 11.2258L3.25466 15.698Z"  stroke-width="1" className="stroke-current fill-none group-hover:fill-[#A7B2D6] group-hover:stroke-primary-blue"/>
<path d="M18.1963 11.6833C19.0122 11.1257 19.4598 10.0831 19.232 9.09376L19.1798 8.86727C18.9518 7.87781 18.1192 7.24908 17.1774 7.26104L18.1963 11.6833Z" stroke-width="1" className="stroke-current fill-none group-hover:fill-[#A7B2D6] group-hover:stroke-primary-blue"/>
<path d="M3.75209 9.35638L6.11629 8.68741L7.66731 16.3952L5.3031 17.0642C4.63887 17.2521 3.98998 16.8558 3.85373 16.1791L2.7959 10.9221C2.65971 10.2454 3.08781 9.54434 3.75209 9.35638Z"  stroke-width="1" className="stroke-current fill-none group-hover:fill-[#A7B2D6] group-hover:stroke-primary-blue"/>
<mask id="path-4-inside-1_2498_76592" fill="white">
<path d="M4.25488 17.3008L7.20737 16.2878L8.60491 22.0154C8.73583 22.5519 8.41848 23.1322 7.89609 23.3114L6.83535 23.6753C6.31296 23.8546 5.78335 23.5649 5.65243 23.0284L4.25488 17.3008Z"/>
</mask>
<path d="M4.25488 17.3008L7.20737 16.2878L8.60491 22.0154C8.73583 22.5519 8.41848 23.1322 7.89609 23.3114L6.83535 23.6753C6.31296 23.8546 5.78335 23.5649 5.65243 23.0284L4.25488 17.3008Z" stroke="#8E8E93" stroke-width="2" mask="url(#path-4-inside-1_2498_76592)" className="stroke-current fill-none group-hover:fill-[#A7B2D6] group-hover:stroke-primary-blue"/>
<path d="M12.0651 3.66152C12.208 3.55192 12.4029 3.61741 12.4413 3.78821L15.2423 16.2461C15.2802 16.4153 15.1414 16.5842 14.9723 16.5742L8.45502 16.1878C8.35375 16.1818 8.27069 16.1102 8.24701 16.0091L6.41664 8.19436C6.39292 8.09308 6.43352 7.98263 6.51833 7.91734L12.0651 3.66152Z" stroke="#8E8E93" stroke-width="1" className="stroke-current fill-none group-hover:fill-[#A7B2D6] group-hover:stroke-primary-blue"/>
<rect x="0.880478" y="0.503417" width="2.44733" height="16.6378" rx="1.22366" transform="matrix(0.952677 -0.303985 0.221293 0.975207 11.7008 1.47996)" stroke="#8E8E93" stroke-width="1" className="stroke-current fill-none group-hover:fill-[#A7B2D6] group-hover:stroke-primary-blue"/>
<path d="M20.2627 5.35132L21.9797 3.31532" stroke="#8E8E93" stroke-width="1" stroke-linecap="round" className="stroke-current fill-none group-hover:fill-[#A7B2D6] group-hover:stroke-primary-blue"/>
<path d="M21.4248 7.74805L24.0002 6.73005" stroke="#8E8E93" stroke-width="1" stroke-linecap="round" className="stroke-current fill-none group-hover:fill-[#A7B2D6] group-hover:stroke-primary-blue"/>
<path d="M21.4248 10.8017L24.0002 11.8197" stroke="#8E8E93" stroke-width="1" stroke-linecap="round" className="stroke-current fill-none group-hover:fill-[#A7B2D6] group-hover:stroke-primary-blue"/>
</svg>

                    {!collapsed && "Promotion"}
                  </a>
                </li>
                 {/* Business Configurations */}
                <li className="hs-accordion group" id="account-accordion">
                  {" "}
                  {/* Added group here */}
                  <button
                    type="button"
                    className={`hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-inter text-black rounded-lg font-medium hover:text-primary-blue hover:font-semibold hover:text-md transition-colors duration-200 focus:outline-hidden focus:bg-gray-400 ${
                      collapsed ? "justify-center" : ""
                    }`}
                    aria-expanded="true"
                    aria-controls="account-accordion-sub-1-collapse-1"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="stroke-current fill-none group-hover:fill-[#A7B2D6] group-hover:stroke-primary-blue"/>

<path d="M18.7273 14.7273C18.6063 15.0015 18.5702 15.3056 18.6236 15.6005C18.6771 15.8954 18.8177 16.1676 19.0273 16.3818L19.0818 16.4364C19.2509 16.6052 19.385 16.8057 19.4765 17.0265C19.568 17.2472 19.6151 17.4838 19.6151 17.7227C19.6151 17.9617 19.568 18.1983 19.4765 18.419C19.385 18.6397 19.2509 18.8402 19.0818 19.0091C18.913 19.1781 18.7124 19.3122 18.4917 19.4037C18.271 19.4952 18.0344 19.5423 17.7955 19.5423C17.5565 19.5423 17.3199 19.4952 17.0992 19.4037C16.8785 19.3122 16.678 19.1781 16.5091 19.0091L16.4545 18.9545C16.2403 18.745 15.9682 18.6044 15.6733 18.5509C15.3784 18.4974 15.0742 18.5335 14.8 18.6545C14.5311 18.7698 14.3018 18.9611 14.1403 19.205C13.9788 19.4489 13.8921 19.7347 13.8909 20.0273V20.1818C13.8909 20.664 13.6994 21.1265 13.3584 21.4675C13.0174 21.8084 12.5549 22 12.0727 22C11.5905 22 11.1281 21.8084 10.7871 21.4675C10.4461 21.1265 10.2545 20.664 10.2545 20.1818V20.1C10.2475 19.7991 10.1501 19.5073 9.97501 19.2625C9.79991 19.0176 9.55521 18.8312 9.27273 18.7273C8.99853 18.6063 8.69437 18.5702 8.39947 18.6236C8.10456 18.6771 7.83244 18.8177 7.61818 19.0273L7.56364 19.0818C7.39478 19.2509 7.19425 19.385 6.97353 19.4765C6.7528 19.568 6.51621 19.6151 6.27727 19.6151C6.03834 19.6151 5.80174 19.568 5.58102 19.4765C5.36029 19.385 5.15977 19.2509 4.99091 19.0818C4.82186 18.913 4.68775 18.7124 4.59626 18.4917C4.50476 18.271 4.45766 18.0344 4.45766 17.7955C4.45766 17.5565 4.50476 17.3199 4.59626 17.0992C4.68775 16.8785 4.82186 16.678 4.99091 16.5091L5.04545 16.4545C5.25503 16.2403 5.39562 15.9682 5.4491 15.6733C5.50257 15.3784 5.46647 15.0742 5.34545 14.8C5.23022 14.5311 5.03887 14.3018 4.79497 14.1403C4.55107 13.9788 4.26526 13.8921 3.97273 13.8909H3.81818C3.33597 13.8909 2.87351 13.6994 2.53253 13.3584C2.19156 13.0174 2 12.5549 2 12.0727C2 11.5905 2.19156 11.1281 2.53253 10.7871C2.87351 10.4461 3.33597 10.2545 3.81818 10.2545H3.9C4.2009 10.2475 4.49273 10.1501 4.73754 9.97501C4.98236 9.79991 5.16883 9.55521 5.27273 9.27273C5.39374 8.99853 5.42984 8.69437 5.37637 8.39947C5.3229 8.10456 5.18231 7.83244 4.97273 7.61818L4.91818 7.56364C4.74913 7.39478 4.61503 7.19425 4.52353 6.97353C4.43203 6.7528 4.38493 6.51621 4.38493 6.27727C4.38493 6.03834 4.43203 5.80174 4.52353 5.58102C4.61503 5.36029 4.74913 5.15977 4.91818 4.99091C5.08704 4.82186 5.28757 4.68775 5.50829 4.59626C5.72901 4.50476 5.96561 4.45766 6.20455 4.45766C6.44348 4.45766 6.68008 4.50476 6.9008 4.59626C7.12152 4.68775 7.32205 4.82186 7.49091 4.99091L7.54545 5.04545C7.75971 5.25503 8.03183 5.39562 8.32674 5.4491C8.62164 5.50257 8.9258 5.46647 9.2 5.34545H9.27273C9.54161 5.23022 9.77093 5.03887 9.93245 4.79497C10.094 4.55107 10.1807 4.26526 10.1818 3.97273V3.81818C10.1818 3.33597 10.3734 2.87351 10.7144 2.53253C11.0553 2.19156 11.5178 2 12 2C12.4822 2 12.9447 2.19156 13.2856 2.53253C13.6266 2.87351 13.8182 3.33597 13.8182 3.81818V3.9C13.8193 4.19253 13.906 4.47834 14.0676 4.72224C14.2291 4.96614 14.4584 5.15749 14.7273 5.27273C15.0015 5.39374 15.3056 5.42984 15.6005 5.37637C15.8954 5.3229 16.1676 5.18231 16.3818 4.97273L16.4364 4.91818C16.6052 4.74913 16.8057 4.61503 17.0265 4.52353C17.2472 4.43203 17.4838 4.38493 17.7227 4.38493C17.9617 4.38493 18.1983 4.43203 18.419 4.52353C18.6397 4.61503 18.8402 4.74913 19.0091 4.91818C19.1781 5.08704 19.3122 5.28757 19.4037 5.50829C19.4952 5.72901 19.5423 5.96561 19.5423 6.20455C19.5423 6.44348 19.4952 6.68008 19.4037 6.9008C19.3122 7.12152 19.1781 7.32205 19.0091 7.49091L18.9545 7.54545C18.745 7.75971 18.6044 8.03183 18.5509 8.32674C18.4974 8.62164 18.5335 8.9258 18.6545 9.2V9.27273C18.7698 9.54161 18.9611 9.77093 19.205 9.93245C19.4489 10.094 19.7347 10.1807 20.0273 10.1818H20.1818C20.664 10.1818 21.1265 10.3734 21.4675 10.7144C21.8084 11.0553 22 11.5178 22 12C22 12.4822 21.8084 12.9447 21.4675 13.2856C21.1265 13.6266 20.664 13.8182 20.1818 13.8182H20.1C19.8075 13.8193 19.5217 13.906 19.2778 14.0676C19.0339 14.2291 18.8425 14.4584 18.7273 14.7273Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="stroke-current fill-none group-hover:fill-[#A7B2D6] group-hover:stroke-primary-blue"/>
</svg>

                    {!collapsed && (
                      <>
                        Business Configurations
                        <svg
                          className="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-primary-blue"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m18 15-6-6-6 6" />
                        </svg>
                        <svg
                          className="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-primary-blue"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </>
                    )}
                  </button>
                  <div
                    id="account-accordion-sub-1-collapse-1"
                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    role="region"
                    aria-labelledby="account-accordion"
                  >
                    <ul className="pt-1 ps-7 space-y-1">
                      <li>
                        <a
                          className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-inter text-black rounded-lg font-medium hover:text-primary-blue hover:font-semibold hover:text-md transition-colors duration-200 focus:outline-hidden focus:bg-gray-100 ${
                            collapsed ? "justify-center" : ""
                          }`}
                          href="#"
                        >
                          {!collapsed && "Business Setup"}
                        </a>
                      </li>
                      <li>
                        <a
                          className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-inter text-black rounded-lg font-medium hover:text-primary-blue hover:font-semibold hover:text-md transition-colors duration-200 focus:outline-hidden focus:bg-gray-100 ${
                            collapsed ? "justify-center" : ""
                          }`}
                          href="#"
                        >
                          {!collapsed && "General Ledger"}
                        </a>
                      </li>
                      <li>
                        <a
                          className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-inter text-black rounded-lg font-medium hover:text-primary-blue hover:font-semibold hover:text-md transition-colors duration-200 focus:outline-hidden focus:bg-gray-100 ${
                            collapsed ? "justify-center" : ""
                          }`}
                          href="#"
                        >
                          {!collapsed && "Number Range"}
                        </a>
                      </li>
                      <li>
                        <a
                          className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-inter text-black rounded-lg font-medium hover:text-primary-blue hover:font-semibold hover:text-md transition-colors duration-200 focus:outline-hidden focus:bg-gray-100 ${
                            collapsed ? "justify-center" : ""
                          }`}
                          href="#"
                        >
                          {!collapsed && "User Creation"}
                        </a>
                      </li>
                      <li>
                        <a
                          className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-inter text-black rounded-lg font-medium hover:text-primary-blue hover:font-semibold hover:text-md transition-colors duration-200 focus:outline-hidden focus:bg-gray-100 ${
                            collapsed ? "justify-center" : ""
                          }`}
                          href="#"
                        >
                          {!collapsed && "General Settings"}
                        </a>
                      </li>
                      <li>
                        <a
                          className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-inter text-black rounded-lg font-medium hover:text-primary-blue hover:font-semibold hover:text-md transition-colors duration-200 focus:outline-hidden focus:bg-gray-100 ${
                            collapsed ? "justify-center" : ""
                          }`}
                          href="#"
                        >
                          {!collapsed && "Email Template"}
                        </a>
                      </li>
                      <li>
                        <a
                          className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-inter text-black rounded-lg font-medium hover:text-primary-blue hover:font-semibold hover:text-md transition-colors duration-200 focus:outline-hidden focus:bg-gray-100 ${
                            collapsed ? "justify-center" : ""
                          }`}
                          href="#"
                        >
                          {!collapsed && "Invoice Template"}
                        </a>
                      </li>
                      <li>
                        <a
                          className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-inter text-black rounded-lg font-medium hover:text-primary-blue hover:font-semibold hover:text-md transition-colors duration-200 focus:outline-hidden focus:bg-gray-100 ${
                            collapsed ? "justify-center" : ""
                          }`}
                          href="#"
                        >
                          {!collapsed && "Payment Integrations"}
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          {/* End Body */}

          {/* Footer */}
          <div className="flex item-center border-t border-gray-200 flex-col pb-4 px-4 py-2">
            <button className="group flex justify-center items-center gap-2 bg-[#e4e2e2] mt-4 py-1 font-semibold hover:text-primary-blue">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m23 2.5v19c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5v-19c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm-6.5 8h-10.929c.95-1.022 2.029-1.946 3.25-2.744.693-.454.888-1.384.435-2.077-.453-.692-1.383-.886-2.076-.435-2.439 1.596-4.438 3.597-5.943 5.947-.315.493-.315 1.124 0 1.617 1.504 2.351 3.504 4.352 5.943 5.947.683.449 1.62.263 2.076-.435.454-.693.259-1.623-.435-2.077-1.221-.798-2.3-1.722-3.25-2.744h10.929c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5z" className=" group-hover:fill-[#A7B2D6] group-hover:stroke-primary-blue"/>
              </svg>
              {!collapsed && (
                <span className="text-sm font-medium">Logout</span>
              )}
            </button>
          </div>
          {/* End Footer */}
        </div>
      </div>
      {/* End Sidebar */}
    </>
  );
};

export default Sidebar;
