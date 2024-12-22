import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Registation from "../pages/Registation";

 const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
            path: '/',
            element: <div>Home</div>
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/registation',
            element: <Registation />
        },
        {
            path: 'all-services',
            element: <div>All services</div>
        },
        {
            path: 'services/:id',
            element: <div>Service</div>
        },
        {
            path: 'add-service',
            element: <div>Add service</div>
        },
        {
            path: 'manage-services',
            element: <div>Manage services</div>
        },
        {
            path: 'booked-services',
            element: <div>Booked services</div>
        },
        {
            path: 'service-to-do',
            element: <div>Service to do</div>
        }
      ]
    },
  ]);

export default router;