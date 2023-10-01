import React, { useState, useContext } from "react";
import { MyContext } from "../store/store";
import "./Edu.css"
function EducationEditor({ education, closehandle }) {
  const [editedEducation, setEditedEducation] = useState({ ...education });
  const { user, setUser } = useContext(MyContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedEducation({
      ...editedEducation,
      [name]: value,
    });
  };

  const handleSave = () => {
    // Find the index of the education to update
    const indexToUpdate = user.Education.findIndex(
      (edu) => edu.name === education.name // Assuming the name is a unique identifier for education
    );

    if (indexToUpdate !== -1) {
      // Clone the user object and the Education array
      const updatedUser = { ...user };
      updatedUser.Education = [...user.Education];

      // Update the specific education at the found index
      updatedUser.Education[indexToUpdate] = editedEducation;

      // Update the user object in the context
      setUser([updatedUser]);
    }

    closehandle();
  };

  return (
    <div className="education-editor">
      <div>
        <label className="editor-label">Degree:</label>
        <input
          type="text"
          name="degree"
          value={editedEducation.degree}
          onChange={handleInputChange}
          className="editor-input"
        />
      </div>

      <div>
        <label className="editor-label">Graduation Year:</label>
        <input
          type="text"
          name="graduationYear"
          value={editedEducation.graduationYear}
          onChange={handleInputChange}
          className="editor-input"
        />
      </div>
      <div>
        <label className="editor-label">Institute:</label>
        <input
          type="text"
          name="name"
          value={editedEducation.name}
          onChange={handleInputChange}
          className="editor-input"
        />
      </div>
      <button onClick={handleSave} className="editor-button">
        Save
      </button>
      <button onClick={closehandle} className="editor-button">
        close
      </button>
    </div>
  );

}

export default EducationEditor;
