import { useState } from "react";
import { TableRoutes } from "../components";

export const RouteCalculator = () => {

  const routes = [
    {id:1, routeNumber: "R001", departureDate: "2024-11-21", duration: "6 horas"},
    {id:2, routeNumber: "R002", departureDate: "2024-11-21", duration: "8 horas"},
  ];
  return (
    <div className="flex flex-col justify-center items-center">
        {/**TableRoutes Component */}
        <TableRoutes routes={routes}/>
    </div>
  );
};
