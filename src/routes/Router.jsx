import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import ErrorPage from "../pages/error/ErrorPage";
import Home from "../pages/home/Home";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Blogs from "../pages/blogs/Blogs";
import Contacts from "../pages/contacts/Contacts";
import BioData from "../pages/biodata/BioData";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children:[
        {index:true, path:'/', element: <Home/>},
        {path:'/login', element: <Login/>},
        {path:'/register', element: <Register/>},
        {path:'/biodata', element: <BioData/>},
        {path:'/blogs', element: <Blogs/>},
        {path:'/contacts', element: <Contacts/>},
    ]
  },
]);