import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Registation from "../pages/Registation";
import AddService from "../pages/AddService";
import PrivaterRoute from "./PrivaterRoute";
import Home from "../pages/Home";
import ServiceDetails from "../pages/ServiceDetails";
import AllServices from "../pages/AllServices";
import ManageServices from "../pages/ManageServices";

 const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/register',
            element: <Registation />
        },
        {
            path: '/add-service',
            element: <PrivaterRoute><AddService /></PrivaterRoute>
        },
        {
            path: '/services/:id',
            element: <PrivaterRoute><ServiceDetails /></PrivaterRoute>
        },
        {
            path: '/all-services',
            element: <AllServices />
        },
        {
            path: '/services/:id',
            element: <div>Service</div>
        },
        {
            path: '/manage-services',
            element: <PrivaterRoute><ManageServices /></PrivaterRoute>
        },
        {
            path: '/booked-services',
            element: <div>Booked services</div>
        },
        {
            path: '/service-to-do',
            element: <div>Service to do</div>
        }
      ]
    },
  ]);

export default router;