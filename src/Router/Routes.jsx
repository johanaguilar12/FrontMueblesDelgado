import { Navigate, createBrowserRouter } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { Admin } from "../admin";
import { AuthRouter, AuthRoutes } from "../auth";
 
 
export const getRoutes = () => createBrowserRouter([
    {
        path: "/",
        element: <PublicRoutes children= {<AuthRouter />} />,
        children: AuthRoutes,
    },
    {
        path: "/admin/panel",
        element: <PrivateRoutes children={<Admin />} />,
    },
    {
        path: "/*",
        element: <Navigate to={"/"} />,
    },
]);