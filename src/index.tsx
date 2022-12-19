import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/Login";
import Counter from "./pages/Counter";
import logOut from "./counter/logOut";
import addToCounter from "./counter/addToCounter";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const counterProps = { addToCounter, logOut };
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/counter",
    element: <Counter {...counterProps} />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
