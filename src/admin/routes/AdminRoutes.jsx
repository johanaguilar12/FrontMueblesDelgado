import { Navigate } from "react-router-dom";
import { Admin, DeliveryTruckAdmin, InventoryAdmin, RouteCalculator, SearchFurniture } from "../pages";
import { CreateAccountForm, DeleteAccountForm, FormAddOrder, FormAssignmnetOrderToTruck, RegisterDriverForm, RegisterTruckForm } from "../components";


export const AdminRoutes = [
  {
    index: true,
    element: <Admin />,
  },
  {
    path: 'routecalculator',
    element: <RouteCalculator />,
  },
  {
    path: 'inventoryadmin',
    element: <InventoryAdmin />,
  },
  {
    path: 'searchfurniture',
    element: <SearchFurniture />,
  },
  {
    path: 'createaccount',
    element: <CreateAccountForm />,
  },
  {
    path: 'deleteaccount',
    element: <DeleteAccountForm />,
  },
  {
    path: 'registerdriver',
    element: <RegisterDriverForm />,
  },
  {
    path: 'registertruck',
    element: <RegisterTruckForm />,
  },
  {
    path: 'deliveryAdmin',
    element: <DeliveryTruckAdmin />,
  },
  {
    path: 'orderassignment',
    element: <FormAssignmnetOrderToTruck />,
  },
  {
    path: 'addorder',
    element: <FormAddOrder />,
  },
  {
    path: "*",
    element: <Navigate to={"/login"} />,
  },
];
