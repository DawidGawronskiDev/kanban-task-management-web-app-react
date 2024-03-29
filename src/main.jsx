import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard, {
  loader as dashboardLoader,
} from "./components/Dashboard/Dashboard.jsx";
import TaskView, {
  loader as taskViewLoader,
} from "./components/TaskView/TaskView.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "board/:boardName",
        element: <Dashboard />,
        loader: dashboardLoader,
        children: [
          {
            path: "task/:taskTitle/view",
            element: <TaskView />,
            loader: taskViewLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
