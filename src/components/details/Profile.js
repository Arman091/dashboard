import image from "../../assets/dummy.jpg";
import GroupsIcon from "@mui/icons-material/Groups";
import { Switch } from "@mui/material";
import  Bar  from "./Bar";
import "react-circular-progressbar/dist/styles.css";
import AddIcon from "@mui/icons-material/Add";
function Profile({ user }) {
  const barCount = Math.floor(user.Rating/11.1);

  return (
    <div className=" flex flex-col items-center w-1/4 border-r-2 border-white shadow-md">
      <div className=" relative bottom-16 flex justify-center items-center w-32 h-32 rounded-full overflow-hidden bg-gray-300 mx-auto">
        <img
          src={user.image}
          alt="User Profile"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <h2 className="text-xl font-sans font-medium relative bottom-10">
        {user.name}
      </h2>
      <p className=" relative bottom-9 text-gray-500 text-base font-sans">
        {user.profile}
      </p>
      <div className=" flex w-11/12 relative bottom-7">
        <GroupsIcon />
        <p
          className="text-base font-sans font-semibold"
          style={{ margin: "0px 5px" }}
        >
          followers&nbsp;{user.followers}
        </p>
        <p className="text-base font-sans font-semibold mt-0 ml-4">
          following&nbsp;{user.following}
        </p>
      </div>
      <div className="font-sans text-xl font-medium flex space-between w-full">
        <p className="text-sm font-sans ml-1 font-semibold">
          Make Profile Visible To Employers
        </p>
        <Switch className="relative bottom-3 left-2" />
      </div>
      <div>
        <p className=" mt-0 ml-1 font-sans text-xs text-left ml-2 text-gray-300">
          Your profile and carrear goals will appear when employers search our
          database
        </p>
      </div>

      <div>
        <div className="flex justify-between items-center mt-8 w-11/12">
          <h2 className="text-xl font-semibold ml-3">Online Links</h2>
          <div className="bg-blue-500 rounded-full w-7 ">
            <AddIcon className=" w-7 text-white text-2xl rounded-full  " />
          </div>
        </div>
        <p className=" mt-1 ml-1 font-sans text-sm text-left ml-2 text-gray-300">
          Add your online Portfolio links to increase your profile strength
        </p>
        <div className="w-11/12 bg-gray-200 my-4 ml-2 h-8 border border-dotted border-gray-500">
          <p className="pt-2  font-sans  text-xs ">Upload here</p>
        </div>
      </div>
      <div className=" w-11/12 border border-solid border-gray-300  mt-4 p-4 rounded-lg">
        <h4 className="m-0 p-0 mt-3 w-220 text-lg font-semibold font-sans">
          Wheel of Opportunity
        </h4>
        <div className="w-11/12 mx-auto mt-2 mb-8 p-4">
          <div className=" mx-auto">
            <Bar value={user.Rating} text={`Sphere Rating`} barCount={ barCount} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
