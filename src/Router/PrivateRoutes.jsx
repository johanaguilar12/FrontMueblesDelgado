import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuthStore";
import { LoadingElement } from "../helpers/LoadingElement";
import { useDriversStore, useInventoryStore, useOrdersStore, useTrucksStore } from "../hooks";
import { useDispatch, useSelector } from "react-redux";
import { onSetTrucks, onSetDrivers, onSetPackingLists, onSetOrders, onSetOrderTruckAssignments, onSetAssignments, onSetFornitures } from "../store";
import { useAdmin } from "../hooks/useAdmin";

export const PrivateRoutes = ({ children }) => {
  const trucksEjemplo = [
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
  ];

  const drivers = [
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
  ]

  const PackingList = [
    {
      folio: "PL-001",
      arrivalDate: "2024-10-30",
      products: [
        {
          type: "Mesa",
          brand: "IKEA",
          color: "Blanco",
          dimension: { width: 120, height: 75, depth: 60 },
          quantity: 10,
          buildTime: 45, // en minutos
        },
        {
          type: "Silla",
          brand: "Herman Miller",
          color: "Negro",
          dimension: { width: 50, height: 100, depth: 50 },
          quantity: 20,
          buildTime: 30, // en minutos
        },
      ],
    },
    {
      folio: "PL-002",
      arrivalDate: "2024-11-05",
      products: [
        {
          type: "Escritorio",
          brand: "OfficePro",
          color: "Cerezo",
          dimension: { width: 140, height: 80, depth: 70 },
          quantity: 5,
          buildTime: 60, // en minutos
        },
      ],
    },
    {
      folio: "PL-003",
      arrivalDate: "2024-11-12",
      products: [
        {
          type: "Cama",
          brand: "Sealy",
          color: "Gris",
          dimension: { width: 200, height: 50, depth: 180 },
          quantity: 2,
          buildTime: 90, // en minutos
        },
        {
          type: "Buró",
          brand: "IKEA",
          color: "Nogal",
          dimension: { width: 40, height: 60, depth: 40 },
          quantity: 4,
          buildTime: 20, // en minutos
        },
      ],
    },
  ];

  const Orders = [
    {
      orderID: "001",
      destination: "Ciudad de México, CDMX",
      deliveryDate: "2024-11-22",
      orderContent: [
        {
          type: "Mesa",
          brand: "IKEA",
          color: "Blanco",
          dimension: { width: 120, height: 75, depth: 60 },
          quantity: 10,
          buildTime: 45, // en minutos
        },
        {
          type: "Silla",
          brand: "Herman Miller",
          color: "Negro",
          dimension: { width: 50, height: 100, depth: 50 },
          quantity: 20,
          buildTime: 30, // en minutos
        },
      ],
    },
    {
      orderID: "002",
      destination: "Guadalajara, Jalisco",
      deliveryDate: "2024-11-23",
      orderContent: [
        {
          type: "Escritorio",
          brand: "OfficePro",
          color: "Cerezo",
          dimension: { width: 140, height: 80, depth: 70 },
          quantity: 5,
          buildTime: 60, // en minutos
        },
      ],
    },
    {
      orderID: "003",
      destination: "Monterrey, Nuevo León",
      deliveryDate: "2024-11-22",
      orderContent: [
        {
          type: "Cama",
          brand: "Sealy",
          color: "Gris",
          dimension: { width: 200, height: 50, depth: 180 },
          quantity: 2,
          buildTime: 90, // en minutos
        },
        {
          type: "Buró",
          brand: "IKEA",
          color: "Nogal",
          dimension: { width: 40, height: 60, depth: 40 },
          quantity: 4,
          buildTime: 20, // en minutos
        },
      ],
    },
  ];

  const OrderTruckAssignment = [
      {
          "assignmentId": 1,
          "orderId": 101,
          "truckId": 1001
      },
      {
          "assignmentId": 2,
          "orderId": 102,
          "truckId": 1002
      }
  ];

  const assignmentsEjemplo = [
    {
      deliveryTruck: {
        id: 1,
        trackingNumber: "Camión A",
        capacity: 100,
        mileage: 100,
        isAvailable: true,
        driver: null,
      },
      truckDriver: {
        id: 102,
        name: "María Pérez",
        license: "789101",
      },
    },
    {
      deliveryTruck: {
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
      truckDriver: {
        id: 101,
        name: "Carlos López",
        license: "123456",
      },
    },
    {
      deliveryTruck: {
        id: 3,
        trackingNumber: "Camión C",
        capacity: 100,
        mileage: 100,
        isAvailable: true,
        driver: null,
      },
      truckDriver: {
        id: 103,
        name: "Luis Hernández",
        license: "112131",
      },
    },
  ];

  const furniture = [
    {
      furnitureId: "xasdas",
      type: "Mesa",
      brand: "IKEA",
      color: "Blanco",
      dimension: { width: 120, height: 75, depth: 60 },
      quantity: 10,
      buildTime: 45, // en minutos
    },
    {
      furnitureId: "xasda",
      type: "Silla",
      brand: "Herman Miller",
      color: "Negro",
      dimension: { width: 50, height: 100, depth: 50 },
      quantity: 20,
      buildTime: 30, // en minutos
    },
    {
      furnitureId: "xasd",
      type: "Cama",
      brand: "Sealy",
      color: "Gris",
      dimension: { width: 200, height: 50, depth: 180 },
      quantity: 2,
      buildTime: 90, // en minutos
    },
    {
      furnitureId: "xas",
      type: "Buró",
      brand: "IKEA",
      color: "Nogal",
      dimension: { width: 40, height: 60, depth: 40 },
      quantity: 4,
      buildTime: 20, // en minutos
    },
  ];
  

  const { status, checkAuthToken } = useAuthStore();
  const [isReady, setIsReady] = useState(false);
  const {status: statusCommand} = useAdmin();
  const {startGetPackingLists, startGetFurnitures} = useInventoryStore();
  const {startGetAccounts} = useAuthStore();
  const {startGetDrivers, startGetAssignments} = useDriversStore();
  const {startGetTrucks} = useTrucksStore();
  const {startGetOrders} = useOrdersStore();

  const dispatch = useDispatch();

  useEffect(() => {
    const initializeData = async () => {
      try {
        await Promise.all([
          checkAuthToken(),
          startGetPackingLists(),
          startGetAccounts(),
          startGetDrivers(),
          startGetTrucks(),
          startGetAssignments(),
          startGetFurnitures(),
          startGetOrders(),
        ]);
        setIsReady(true);
      } catch (error) {
        console.error("Error during initialization:", error);
      }
    };
  
    initializeData();
  }, []);
  


  if (!isReady || status === "checking" || statusCommand === "starting") {
    return <LoadingElement />;
  }
  

  //Si esta autenticado muestra el panel de administrador y si no esta autenticado redirige al login

  return status === "authenticated" ? (
    children
  ) : (
    <Navigate to={"/"} />
  );
};