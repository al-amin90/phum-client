import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminPaths } from "./admin.routes";
import { routeGenerator } from "../utils/routesGenerator";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/superAdmin",
    element: <App></App>,
    children: routeGenerator(adminPaths)
  },
  {
    path: "/faculty",
    element: <App></App>,
    children: routeGenerator(facultyPaths)
  },
  {
    path: "/student",
    element: <App></App>,
    children: routeGenerator(studentPaths)
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);
