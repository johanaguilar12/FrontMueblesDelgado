import { Navigate } from "react-router-dom";
import { Admin } from "../pages";

export const AdminRoutes = [
  {
    index: true,
    element: <Admin />,
  },
  {
    path: "*",
    element: <Navigate to={"/login"} />,
  },
];
