import { Navigate } from "react-router-dom";
// import { useAuthStore } from "../hooks/useAuthStore";
// import { useEffect } from "react";
// import { LoadingElement } from "../helpers/LoadingElement";

export const PublicRoutes = ({children}) => {

    // const { status, checkAuthToken } = useAuthStore();

    // useEffect(() => {
    //   checkAuthToken();
    // }, [])

    // if (status === "checking") {
    //     return <LoadingElement />
    // }


    //Si no esta autenticado muestra el login y si esta autenticado redirige al panel de administrador

    const status = "not-authenticated";
    
    
    return status === "not-authenticated" 
    ? children 
    : <Navigate to={"/admin/panel"} />;
}