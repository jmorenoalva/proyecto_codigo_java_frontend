import { MdOutlineDashboard } from "react-icons/md";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavigationItems = ({expanded}) => {

  const [active, setActive] = useState(false);

  console.log(expanded)
  return (
    <>
      <NavLink
        className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }`}
        to="/dashboard"
      >
        <MdOutlineDashboard className="ml-2" size={25}/>
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          Dashboard
        </span>
      </NavLink>
      <NavLink
        className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }`}
        to="/mantenimientos"
      >
        <IoFileTrayFullOutline className="ml-2" size={25}/>
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          Mantenimientos
        </span>
      </NavLink>
      <NavLink
        className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }`}
        to="/vehiculos"
      >
        <FaCar className="ml-2" size={25}/>
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          Vehiculos
        </span>
      </NavLink>
      <NavLink
        className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }`}
        to="/alquileres"
      >
        <LiaFileInvoiceDollarSolid className="ml-2" size={25}/>
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          Alquileres
        </span>
      </NavLink>
    </>
  );
};

export default NavigationItems;
