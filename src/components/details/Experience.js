import "./Experience.css";
import WorkIcon from "@mui/icons-material/Work";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import ExperienceEditor from "../Users/ExpEditor";
function Experience({ experience }) {
  const [editoropen, setIsEditing] = useState(false);

  const BlueCircularIcon = styled(EditIcon)(({ theme }) => ({
    backgroundColor: " #4a7bbc",
    borderRadius: "20%",
    fontSize: "24px",

    color: "white",
  }));
  const EditedAddIcon = styled(AddIcon)(({ theme }) => ({
    backgroundColor: " #4a7bbc",
    borderRadius: "20%",
    fontSize: "24px",

    color: "white",
  }));
  const handleEditClick = () => {
    setIsEditing(!editoropen);
  };

  return (
    <div className="parent-experience">
      {!editoropen ? (
        <>
          <div className="experience">
            <div className="Employer-data">
              <div className="flex">
                <MenuItem>
                  <WorkIcon />
                </MenuItem>
                <p className="text-sm font-sans ml-1 font-semibold pt-1.5">
                  {experience.name}
                </p>
              </div>

              <div className="employment-micros">
                <p className="text-sm text-slate-400 font-sans">
                  {experience.duration}
                </p>
                <p className="text-base font-sans  ">{experience.position}</p>
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
          </div>
          <p className="text-sm font-sans w-10/12 mt-4 mx-auto pb-2">{experience.detail}</p>
          <hr/>
        </>
      ) : (
        <ExperienceEditor
          experience={experience}
          closehandle={handleEditClick}
        />
      )}
    </div>
  );
}

export default Experience;
