import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import ErrorPage from "../pages/error/ErrorPage";
import Home from "../pages/home/Home";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Blogs from "../pages/blogs/Blogs";
import Contacts from "../pages/contacts/Contacts";
import BioData from "../pages/biodata/BioDatas";
import AboutUs from "../pages/about/AboutUs";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import UserDashboard from "../pages/dashboard/UserDashboard";
import AdminDashboard from "../pages/dashboard/AdminDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/biodatas", element: <BioData /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/aboutus", element: <AboutUs /> },
      { path: "/contacts", element: <Contacts /> },

      // -----------------
      // DASHBOARD ROUTES
      // -----------------
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        ),
        children: [
          {
            path: "user",
            element: (
              <PrivateRoute requiredRole="user">
                <UserDashboard />
              </PrivateRoute>
            ),
          },
          {
            path: "admin",
            element: (
              <PrivateRoute requiredRole="admin">
                <AdminDashboard />
              </PrivateRoute>
            ),
          },
        ],
      },
    ],
  },
]);
