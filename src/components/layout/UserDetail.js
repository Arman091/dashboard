import "./main.css";
import UserTab from "../details/UserTab";
function UserDetail({user}) {
  return (
    <div className="user-detail">
      <UserTab user={ user} />
    </div>
  );
}

export default UserDetail;
