
import Profile from "../details/Profile";
import image from "../../assets/backimage.webp";
import UserDetail from "./UserDetail";
import Sidebar from "./Sidebar";
const Section = ({ user }) => {
  return (
    <div className="main-container flex">
        {/* Your sidebar content */}
        <Sidebar user={user} />
      <div className="w-4/5 m-2">
        <div className="background-image rounded-lg h-32 overflow-hidden relative bg-blue-500">
          <img
            src={image}
            alt="notFound"
            className="w-full h-full object-cover transform -rotate-5 -translate-y-4 -translate-x-1"
          />
        </div>

        <div className="section-right flex">
          <Profile user={user} />
          <UserDetail user={user} />
        </div>
      </div>
    </div>
  );
};

export default Section;
