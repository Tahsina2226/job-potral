import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,  
    errorElement: <h2>Route not found</h2>,
    children: [
      {
        path: "/",  
        element: <Home />,  
      },
      {
        path: "/Register",  
        element: <Register />,  
      },
      {
        path: "/Signin",  
        element: <SignIn />,  
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
