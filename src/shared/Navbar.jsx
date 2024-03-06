import { Layout, Menu } from "antd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logOut } from "../redux/slices/authSlice";

const { Header, Content, Footer } = Layout;

export default function Navbar() {
  const pathname = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logOut());
    localStorage.removeItem("accessToken");
  };
  const items = !user?.email
    ? [
        {
          key: "/audience",
          label: <Link to={"/audience"}>Audience</Link>,
        },
        {
          key: "/login",
          label: <Link to={"/login"}>Login</Link>,
        },
        {
          key: "/register",
          label: <Link to={"/register"}>Register</Link>,
        },
      ]
    : [
        {
          key: "/dashboard",
          label: <Link to={"/dashboard"}>Dashboard</Link>,
        },
        {
          key: 2,
          label: <button onClick={handleLogout}>Logout</button>,
        },
      ];
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="text-white">
        <Link to={"/"}>Logo</Link>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[pathname?.pathname]}
        items={items}
        style={{
          flex: 1,
          minHeight: "",
          justifyContent: "end",
          alignItems: "end",
        }}
      />
    </Header>
  );
}
