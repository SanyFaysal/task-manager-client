import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "../layout/DashboardLayOut";

import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import CreateTodo from "../pages/CreateTodo";
import AllTodo from "../pages/AllTodo";
import PrivateRoute from "../utils/PrivateRoute";
import Profile from "../pages/Profile";
import TargetAudienceSection from "../pages/TargetAudience";
import Layout from "../layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/audience",
    element: (
      <Layout>
        <TargetAudienceSection />,
      </Layout>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Profile />,
      },
      {
        path: "profile",
        element: <CreateTodo />,
      },
      {
        path: "create-todo",
        element: <CreateTodo />,
      },
      {
        path: "all-todo",
        element: <AllTodo />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
