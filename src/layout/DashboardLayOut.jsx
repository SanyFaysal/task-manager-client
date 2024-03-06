import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  HomeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const pathname = useLocation();
  console.log({ pathname });

  const items = [
    getItem(
      <Link to={"/"} className="mb-5">
        Home
      </Link>,
      "/",
      <HomeOutlined />
    ),
    getItem(
      <Link to={"/dashboard"}>Profile</Link>,
      "/dashboard",
      <UserOutlined />
    ),
    getItem(
      <Link to={"/dashboard/all-todo"}>All Todo</Link>,
      "/dashboard/all-todo",
      <DesktopOutlined />
    ),
    getItem(
      <Link to={"/dashboard/create-todo"}>Create New Todo</Link>,
      "/dashboard/create-todo",
      <UserOutlined />
    ),
  ];
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          className="sticky top-0"
          defaultSelectedKeys={[pathname?.pathname]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default DashboardLayout;
