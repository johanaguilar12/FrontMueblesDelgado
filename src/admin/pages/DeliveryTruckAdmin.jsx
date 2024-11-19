import { useState, useEffect } from "react";
import { TableAssignDriver, TableDrivers, TableTrucks } from "../components";
import { useDriversStore, useTrucksStore } from "../../hooks";

export const DeliveryTruckAdmin = () => {
  const {drivers} = useDriversStore();
  const {trucks} = useTrucksStore();

  return (
    <div className="flex flex-col justify-center items-center"> {/* QUITAR ESTO SI HAY PROBLEMAS */}
      <TableAssignDriver trucks={trucks} drivers={drivers} />

      <TableTrucks trucks={trucks} />

      <TableDrivers drivers={drivers} />

    </div>
  );
};
