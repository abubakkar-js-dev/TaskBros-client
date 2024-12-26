import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router.jsx";
import AuthProvider from "./contexts/authcontext/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import MyServicesProvider from "./contexts/myservicesContext/MyServicesProvider.jsx";
import { HelmetProvider } from "react-helmet-async";
import ThemeProvider from "./contexts/ThemeContext/ThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <HelmetProvider>
        <MyServicesProvider>
          <AuthProvider>
            <RouterProvider router={router} />
            <Toaster position="top-center" reverseOrder={false} />
          </AuthProvider>
        </MyServicesProvider>
      </HelmetProvider>
    </ThemeProvider>
  </StrictMode>
);
