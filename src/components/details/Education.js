import SchoolIcon from "@mui/icons-material/School";
import EducationEditor from "../Users/EduEditor";
import MenuItem from "@mui/material/MenuItem";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import "./About.css";
const Education = ({ education }) => {
   
  const [editoropen, setIsEditing] = useState(false);
  const EditedAddIcon = styled(AddIcon)(({ theme }) => ({
    backgroundColor: " #4a7bbc",
    borderRadius: "20%",
    fontSize: "24px",

    color: "white",
  }));
  const BlueCircularIcon = styled(EditIcon)(({ theme }) => ({
    backgroundColor: " #4a7bbc",
    borderRadius: "20%",
    fontSize: "24px",

    color: "white",
  }));
  const handleEditClick = () => {
    setIsEditing(!editoropen);
  };
  return (
    <div className="Education">
      {!editoropen ? (
        <>
          <div>
            {/* <div className="Employer-data">
              <div className="company-name">
                <MenuItem style={{ paddingBottom: "0px", marginTop: "10px" }}>
                  <SchoolIcon />
                </MenuItem>
                <h4 style={{ marginBottom: "0px" }}>{education.degree}</h4>
              </div>

              <div className="employment-micros">
                <span>{education.graduationYear} </span>
                <p>{education.name}</p>
              </div>

            </div> */}
            <div className="Employer-data">
              <div className="flex">
                <MenuItem>
                  <SchoolIcon />
                </MenuItem>
                <p className="text-sm font-sans ml-1 font-semibold pt-1.5">
                  {education.degree}
                </p>
              </div>

              <div className="employment-micros">
                <p className="text-sm text-slate-400 font-sans">
                
                  {education.graduationYear}
                </p>
                <p className="text-base font-sans  ">{education.name}</p>
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <MenuItem onClick={handleEditClick}>
              <BlueCircularIcon />
            </MenuItem>
            <MenuItem>
              <EditedAddIcon />
            </MenuItem>
          </div>
        </>
      ) : (
        <EducationEditor education={education} closehandle={handleEditClick} />
      )}
    </div>
  );
};

export default Education;
