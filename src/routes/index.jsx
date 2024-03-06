import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "../shared/DashboardLayOut";

import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import CreateTodo from "../pages/CreateTodo";
import AllTodo from "../pages/AllTodo";
import PrivateRoute from "../utils/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
