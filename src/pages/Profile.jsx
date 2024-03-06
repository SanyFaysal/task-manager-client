import { Avatar, Badge } from "antd";
import { useSelector } from "react-redux";

export default function Profile() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="flex justify-center flex-col items-center">
      <Avatar style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}>
        {user?.fullName?.slice(0, 1)}
      </Avatar>

      <h1 className="text-xl ">{user?.fullName}</h1>
      <h1 className="">{user?.email}</h1>
      <p className="uppercase">
        {user?.profession ? user?.profession : "NULL"}
      </p>
    </div>
  );
}
