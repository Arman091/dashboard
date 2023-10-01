import "./Dropdown.css";
import dataAvatar from "../../assets/dummy.jpg";

function DropDown({ isOpen, data, image }) {
  return (
    <>
      {!isOpen && (
        <div className="user-avatar ">
          <img src={image} alt="data" className="h-8 w-8 rounded-2.5em" />
        </div>
      )}
      <div className="user-dropdown">
        {isOpen && (
          <div className="dropdown-content">
            <div className="user-info">
              <img src={data.image} alt="data Avatar" />

              <p className="text-sm font-sans ml-1 font-semibold pt-1.5">
                {data.name}
              </p>
            </div>
            <ul className="dropdown-menu">
              <li className="text-sm font-sans ml-1 font-semibold pt-1.5">
                {data.profile}
              </li>
              <li className="text-sm font-sans ml-1 font-semibold pt-1.5">
                Settings
              </li>
              <li className="text-sm font-sans ml-1 font-semibold pt-1.5">
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default DropDown;
