import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import App from "./App.tsx";
import Crop from "./Components/Pagess/Crop.tsx";
import Fields from "./Components/Pagess/Fields.tsx";
import Staff from "./Components/Pagess/Staff.tsx";
import Vehicle from "./Components/Pagess/Vehicles.tsx";
import MonitoringLog from "./Components/Pagess/MonitoringLog.tsx";
import Vehicles from "./Components/Pagess/Vehicles.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/monitorLog",
    element: <MonitoringLog />,
  },
  {
    path: "/Crop",
    element: <Crop />,
  },
  {
    path: "/field",
    element: <Fields />,
  },
  {
    path: "/staff",
    element: <Staff />,
  },
  {
    path: "/vehicle",
    element: <Vehicles />,
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
