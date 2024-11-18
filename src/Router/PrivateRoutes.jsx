import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuthStore";
import { LoadingElement } from "../helpers/LoadingElement";

export const PrivateRoutes = ({ children }) => {
  // const { status, checkAuthToken } = useAuthStore();

  // useEffect(() => {
  //   checkAuthToken();
  // }, [])

  // if (status === "checking") {
  //   return <LoadingElement />
  // }


  //Si esta autenticado muestra el panel de administrador y si no esta autenticado redirige al login

  const status = "authenticated";

  return status === "authenticated" ? (
    children
  ) : (
    <Navigate to={"/"} />
  );
};