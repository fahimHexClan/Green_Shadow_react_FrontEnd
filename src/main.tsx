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
import MonitoringLog from "./Components/Pagess/MonitoringLog.tsx";
import Vehicles from "./Components/Pagess/Vehicles.tsx";
import { Provider } from 'react-redux';
import store from './store.ts';
import Equipment from "./Components/Pagess/Equipment.tsx";
import Login from "./Components/Pagess/Login.tsx";
import Signup from "./Components/Pagess/Signup.tsx";
import Dashboard from "./Components/Pagess/DashBoard.tsx"; 


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />, // ✅ Set proper Dashboard route
  },
  {
     path: "/dashboard",
      element: <Dashboard /> 
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
  },
{
  path: "/equipment",
  element: <Equipment />,
},
{
  path: "/login",
  element: <Login />,
},
{
  path: "/signup",
  element: <Signup />,
},
{
  path: "/*",
  element: <Login/>,
}
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
