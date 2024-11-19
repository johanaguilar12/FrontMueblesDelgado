import { useState, useEffect } from "react";
import { TableAssignDriver, TableDrivers, TableTrucks } from "../components";

export const DeliveryTruckAdmin = () => {
  // const [trucks, setTrucks] = useState([]);
  // const [drivers, setDrivers] = useState([]);
  const [trucks, setTrucks] = useState([
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
  const [selectedTruck, setSelectedTruck] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    driverId: "",
    truckId: "",
  });

  // Simulate fetching data
  useEffect(() => {
    // Fetch data from API
    // const fetchTrucks = async () => {
    //   const truckData = await fetch("/api/trucks").then((res) => res.json());
    //   setTrucks(truckData);
    // };

    // const fetchDrivers = async () => {
    //   const driverData = await fetch("/api/drivers").then((res) => res.json());
    //   setDrivers(driverData);
    // };

    // fetchTrucks();
    // fetchDrivers();
  }, []);

  const handleAssignDriver = (truckId) => {
    setSelectedTruck(truckId);
    setShowForm(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // await fetch("/api/assign-driver", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // });
    // setShowForm(false);
    // setSelectedTruck(null);
  };

  const handleDeleteTruck = async (truckId) => {
    // await fetch(`/api/trucks/${truckId}`, { method: "DELETE" });
    // setTrucks((prev) => prev.filter((truck) => truck.id !== truckId));
  };

  

  return (
    <div className="flex flex-col justify-center items-center"> {/* QUITAR ESTO SI HAY PROBLEMAS */}
      <TableAssignDriver trucks={trucks} drivers={drivers} />

      <TableTrucks trucks={trucks} />

      <TableDrivers drivers={drivers} />

    </div>
  );
};
