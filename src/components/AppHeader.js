import React, { useCallback, useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";

const AppHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [categoryItems, setCategoryItems] = useState([]);
  const getData = useCallback(async () => {
    await fetch(`http://localhost:8080/api/category/getEnableCategory`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCategoryItems(data.enableCategory);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [setCategoryItems]);

  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <nav className="bg-indigo-500 fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white my-5">
                <NavLink to="/home">
                  <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="h-10"
                    alt="Flowbite Logo"
                  />
                </NavLink>
              </span>
            </div>
            <div className="md:block mx-5">
              <div className="flex space-x-8 items-center">
                <NavLink
                  to="/home"
                  className="text-gray-300 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className="text-gray-300 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </NavLink>
                <NavLink
                  to="/services"
                  className="text-gray-300 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                </NavLink>
                <NavLink
                  to="/contact"
                  className="text-gray-300 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </NavLink>

                <div className="hidden md:block hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md">
                  <div className="ml-4 flex items-center md:ml-6">
                    <div className="relative">
                      <button
                        onClick={toggleDropdown}
                        className="flex items-center focus:outline-none text-white"
                      >
                        <span>Dropdown</span>
                        <ChevronDownIcon className="h-5 w-5 ml-1" />
                      </button>
                      <Transition
                        show={isOpen}
                        enter="transition duration-100 ease-out"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <div className="origin-top-right absolute right-0 mt-5 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-double">
                          <div className="py-1">
                            {categoryItems.map((enableCategory) => (
                              // <a
                              //   key={enableCategory._id}
                              //   href={enableCategory.categoryURLKey}
                              //   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              // >
                              //   {enableCategory.categoryName}
                              // </a>
                              <NavLink
                                key={enableCategory._id}
                                to={enableCategory.categoryURLKey}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                {enableCategory.categoryName}
                              </NavLink>
                            ))}
                          </div>
                        </div>
                      </Transition>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;
