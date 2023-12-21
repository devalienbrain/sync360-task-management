import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Tasks/Tasks";
import Skills from "../Pages/Login/Login";
import Contact from "../Pages/JoinUs/Register";
import Register from "../Pages/JoinUs/Register";
import Login from "../Pages/Login/Login";
import Tasks from "../Pages/Tasks/Tasks";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/DashboardLayout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/tasks",
        element: <Tasks></Tasks>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);
export default Router;
