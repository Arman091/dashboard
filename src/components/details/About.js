
import EditIcon from "@mui/icons-material/Edit";
import MenuItem from "@mui/material/MenuItem";
import Education from "./Education";
import Experience from "./Experience";
import AboutEditor from "../Users/AboutEditor";
import { styled } from "@mui/material/styles";
import { useState } from "react";

function About({ user }) {
  const [isEditAbout, setisEdit] = useState(false);

  const BlueCircularIcon = styled(EditIcon)(({ theme }) => ({
    backgroundColor: " #4a7bbc",
    borderRadius: "20%",
    fontSize: "24px",

    color: "white",
  }));
  const changeAboutHandler = () => {
    setisEdit(!isEditAbout);
  };

  return (
    <div className="about">
      {!isEditAbout ? (
        <>
          <div className="text-left pl-1 mt-9 flex justify-between shadow-md mb-0">
            <p className="text-sm font-sans p-2 rounded-md  ">
              {user.About}
            </p>
            <div>
              <MenuItem onClick={changeAboutHandler}>
                <BlueCircularIcon />
              </MenuItem>
            </div>
          </div>
          <div className="shadow-md pb-6">
            <h2 className="text-lg font-semibold w-1/2 ml-4 h-12 pt-4 text-start">Experience</h2>
            {user.Experiences.map((experience, index) => (
              <Experience key={index} experience={experience} />
            ))}
          </div>
          <div className="education-wrapper shadow-md">
            <h2 className="text-lg font-semibold ">Education</h2>
            {user.Education.map((education, index) => (
              <Education key={index} education={education} />
            ))}
          </div>
        </>
      ) : (
        <AboutEditor
          initialAbout={user.About}
          closehandle={changeAboutHandler}
          id={user._id}
        />
      )}
    </div>
  );
}

export default About;
