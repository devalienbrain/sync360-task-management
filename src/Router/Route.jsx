import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Register from "../Pages/JoinUs/Register";
import Login from "../Pages/Login/Login";
import Features from "../Pages/Features/Features";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/DashboardLayout";
import AllTasks from "../Pages/Dashboard/AllTasks/AllTasks";
import CreateTask from "../Pages/Dashboard/CreateTask";
import TaskDragDrop from "../Pages/Dashboard/AllTasks/TaskDragDrop";
import EditTask from "../Pages/Dashboard/EditATask";

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
        path: "/features",
        element: <Features></Features>,
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
        path: "/dashboard",
        element: <AllTasks></AllTasks>,
      },
      {
        path: "allTasks",
        element: <AllTasks></AllTasks>,
      },
      {
        path: "tasksDragDrop",
        element: <TaskDragDrop></TaskDragDrop>,
      },
      {
        path: "createATask",
        element: <CreateTask></CreateTask>,
      },
      {
        path: "editATask/:id",
        element: <EditTask></EditTask>,
        loader: ({ params }) =>
          fetch(
            // `http://localhost:5000/allTasks/${params.id}`
            `https://sync360-task-management-server.vercel.app/${params.id}`
          ),
      },
    ],
  },
]);
export default Router;
