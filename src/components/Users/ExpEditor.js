import React, { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../store/store";
import "./ExpEditor.css"
function ExperienceEditor({ experience, closehandle }) {
  const [editedExperience, setEditedExperience] = useState({ ...experience });
  const { user, setUser } = useContext(MyContext);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedExperience({
      ...editedExperience,
      [name]: value,
    });
  };

  const handleSave = () => {
    const indexToUpdate = user.Experiences.findIndex(
      (exp) => exp.name === experience.name
    );
    if (indexToUpdate !== -1) {
      const updatedUser = { ...user };
      updatedUser.Experiences = [...user.Experiences];

      updatedUser.Experiences[indexToUpdate] = editedExperience;

      setUser([updatedUser]);
    }

    closehandle();
  };

  return (
    <div className="experience-editor">
      <div>
        <label className="editor-label">Name:</label>
        <input
          type="text"
          name="name"
          value={editedExperience.name}
          onChange={handleInputChange}
          className="editor-input"
        />
      </div>
      <div>
        <label className="editor-label">Position:</label>
        <input
          type="text"
          name="position"
          value={editedExperience.position}
          onChange={handleInputChange}
          className="editor-input"
        />
      </div>
      <div>
        <label className="editor-label">Duration:</label>
        <input
          type="text"
          name="duration"
          value={editedExperience.duration}
          onChange={handleInputChange}
          className="editor-input"
        />
      </div>
      <div>
        <label className="editor-label">Detail:</label>
        <textarea
          name="detail"
          value={editedExperience.detail}
          onChange={handleInputChange}
          className="editor-textarea"
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

export default ExperienceEditor;
