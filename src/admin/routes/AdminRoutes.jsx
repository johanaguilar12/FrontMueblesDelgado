import { Navigate } from "react-router-dom";
import { AddPackingList, Admin, RouteCalculator, SearchFurniture } from "../pages";
import { CreateAccountForm, DeleteAccountForm, RegisterDriverForm, RegisterTruckForm } from "../components";

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
    path: 'addpackinglist',
    element: <AddPackingList />,
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
    path: "*",
    element: <Navigate to={"/login"} />,
  },
];
