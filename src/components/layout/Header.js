import logo from "../../assets/logo.webp";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import DropDown from "./DropDown";
import { Fragment } from "react";
import { useState } from "react";

function Header({ user }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-white border-b border-gray-300 text-black flex items-center justify-between h-20 px-5 rounded-lg shadow-md">
      <div className="flex items-center shadow-right h-full">
        <img src={logo} alt="Dashboard" className="h-10" />

        <p className="text-3xl font-sans relative bottom-1 right-6 font-semibold ">
          Spehre
        </p>
      </div>
      <div className="flex items-center space-x-4 ">
        <div className="flex items-center bg-gray-100 rounded-md px-2 py-1 border border-grey-400">
          <SearchIcon className="border-r border-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none focus:outline-none ml-2"
          />
        </div>
        <div className="text-gray-600 cursor-pointer hover:text-gray-800 pb-1.5 border border-grey-400 w-14">
          <NotificationsIcon />
        </div>
        <div className="text-gray-600 cursor-pointer hover:text-gray-800 pb-1.5 border border-grey-400 w-14">
          <EmailIcon />
        </div>
        <div className="relative cursor-pointer flex" onClick={toggleDropdown}>
          {isDropdownOpen ? (
            <Fragment>
              <CloseIcon
                onClick={toggleDropdown}
                style={{ cursor: "pointer", color: "red" }}
                className="absolute top-0 right-0 -mt-2 -mr-2 text-red-500"
              />
              <DropDown
                isOpen={isDropdownOpen}
                toggleDropdown={toggleDropdown}
                data={user}
              />
            </Fragment>
          ) : (
            <DropDown image={user.image} />
          )}
          <div className=" relative top-11px right-8px">
            <KeyboardArrowDownIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
