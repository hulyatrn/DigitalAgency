import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import logo from "../img/Dalio-logo.png"


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


  return (
      <nav>
        <div className="nav-header pl-[150px]">
          <div className="flex items-center justify-between">
            <div className="flex">
              <div>
                <img
                className="w-[118px] h-16 pt-[30px]"
                  src={logo}
                />
              </div>
              <div className="hidden md:block pt-[44px]">
                <div className="flex">
                  <a
                    href="#"
                    className="pl-44 text-white font-medium text-lg leading-5"
                  >
                    About us
                  </a>

                  <a
                    href="#"
                    className="pl-[50px] text-white font-medium text-lg leading-5"
                  >
                    What We do
                  </a>

                  <a
                    href="#"
                    className="pl-[50px] text-white font-medium text-lg leading-5"
                  >
                    Our work
                  </a>

                  <a
                    href="#"
                    className="pl-[50px] text-white font-medium text-lg leading-5"
                  >
                    Blog
                  </a>

                  <a
                    href="#"
                    className="pl-[50px] text-white font-medium text-lg leading-5"
                  >
                    Say hi
                  </a>
                </div>
              </div>
            </div>
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className=" inline-flex items-center justify-center p-2 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mt-[46px]"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="lg:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3  sm:px-3">
                <a
                  href="#"
                  className="hover:bg-gray-700 text-white block rounded-md text-base font-medium text-center"
                >
                  Dashboard
                </a>

                <a
                  href="#"
                  className="text-white block rounded-md text-base font-medium text-center"
                >
                  Team
                </a>

                <a
                  href="#"
                  className="text-white block rounded-md text-base font-medium text-center"
                >
                  Projects
                </a>

                <a
                  href="#"
                  className="text-white block rounded-md text-base font-medium text-center"
                >
                  Calendar
                </a>

                <a
                  href="#"
                  className="text-white block rounded-md text-base font-medium text-center"
                >
                  Reports
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
  );
}

export default Navbar;
