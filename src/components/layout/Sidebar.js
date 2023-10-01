import React from "react";
import Feeds from "../details/Feeds";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
import ExploreIcon from "@mui/icons-material/Explore";

const Sidebar = ({user}) => {
   const [activeTab, setActiveTab] = useState("Home"); // Default active tab

   // Function to handle tab click
   const handleTabClick = (text) => {
     setActiveTab(text);
   };
  return (
    <div className="w-19 border-r border-gray-200 ">
      <ul className="mt-1 px-2">
        {[
          { text: "Home", icon: <HomeIcon /> },
          { text: "Job Invite", icon: <WorkIcon /> },
          { text: "Analytics", icon: <ShowChartIcon /> },
          { text: "My Profile", icon: <PersonIcon /> },
          { text: "Explore", icon: <ExploreIcon /> },
        ].map((item, index) => (
          <li
            key={item.text}
            className={`flex items-center py-2 transition duration-200 ${
              activeTab === item.text
                ? "bg-gray-200 text-400"
                : " text-gray-300"
            } cursor-pointer pl-0.75 hover:bg-gray-100 mt-11`}
            onClick={() => handleTabClick(item.text)}
          >
            <span className="text-blue-300">{item.icon}</span>
            <span className="ml-1 text-base pb-0 text-left text-slate-400 font-sans">
              {item.text}
            </span>
          </li>
        ))}
      </ul>
      <hr className="m-auto-15 w-4/5" />
      <Feeds user={ user} />
    </div>
  );
};

export default Sidebar;
