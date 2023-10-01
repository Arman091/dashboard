import React, { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../store/store";
import "./AboEdit.css"
function AboutEditor({ initialAbout, closehandle }) {
  const [editedAbout, setEditedAbout] = useState(initialAbout);
  const { user, setUser } = useContext(MyContext);
  const handleTextChange = (e) => {
    setEditedAbout(e.target.value);
  };

  const handleSave = () => {
    let newuser = user;
    newuser.About = editedAbout;
    closehandle();
  };

  const handleCancel = () => {
    closehandle();
  };

 return (
   <div className="about-editor">
     <textarea
       rows="4"
       cols="50"
       value={editedAbout}
       onChange={handleTextChange}
       className="editor-textarea"
     />
     <div className="editor-buttons">
       <button onClick={handleSave} className="editor-button">
         Save
       </button>
       <button onClick={handleCancel} className="editor-button cancel-button">
         Cancel
       </button>
     </div>
   </div>
 );

}

export default AboutEditor;
