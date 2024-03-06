import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "../shared/DashboardLayOut";

import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import CreateTodo from "../pages/CreateTodo";
import AllTodo from "../pages/AllTodo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
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
