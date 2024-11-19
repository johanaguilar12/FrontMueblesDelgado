import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuthStore";
import { LoadingElement } from "../helpers/LoadingElement";
import { useDriversStore, useTrucksStore } from "../hooks";
import { useDispatch, useSelector } from "react-redux";
import { onSetTrucks, onSetDrivers } from "../store";

export const PrivateRoutes = ({ children }) => {
  const [trucksEjemplo, setTrucksEjemplo] = useState([
    {
      id: 1,
      trackingNumber: "Camión A",
      capacity: 100,
      mileage: 100,
      isAvailable: true,
      driver: null,
    },
    {
      id: 2,
      trackingNumber: "Camión B",
      capacity: 100,
      mileage: 100,
      isAvailable: false,
      driver: {
        id: 101,
        name: "Carlos López",
      },
    },
    {
      id: 3,
      trackingNumber: "Camión C",
      capacity: 100,
      mileage: 100,
      isAvailable: true,
      driver: null,
    },
  ]);
  const [drivers, setDrivers] = useState([
    {
      id: 101,
      name: "Carlos López",
      license: "123456",
    },
    {
      id: 102,
      name: "María Pérez",
      license: "789101",
    },
    {
      id: 103,
      name: "Luis Hernández",
      license: "112131",
    },
  ]);

  // const { status, checkAuthToken } = useAuthStore();
  // const { drivers } = useSelector((state) => state.drivers);
  const dispatch = useDispatch();
  dispatch(onSetTrucks(trucksEjemplo));
  dispatch(onSetDrivers(drivers));
  // const {drivers} = useDriversStore();
  // const {trucks} = useTrucksStore();

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