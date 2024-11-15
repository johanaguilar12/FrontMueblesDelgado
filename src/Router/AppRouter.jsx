import { RouterProvider } from "react-router-dom";
import { getRoutes } from "./Routes";


const router = getRoutes();

export const AppRouter = () => {
    // Aqui van cosas que queremos que se ejecuten una sola vez y esten disponibles en toda la aplicacion o desde el inicio

  
  return <RouterProvider router={router} /> ;

}