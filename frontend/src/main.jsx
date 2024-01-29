import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Index";
import Data from "./data/Data";
import Error from "./pages/Error";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },

  { path: "/user/:userId", element: <Data /> },

  { path: "*", element: <Error /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
