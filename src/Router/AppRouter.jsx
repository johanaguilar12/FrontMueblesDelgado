import { RouterProvider } from "react-router-dom";
import { getRoutes } from "./Routes";


const router = getRoutes();

export const AppRouter = () => {
    // Aqui van cosas que queremos que se ejecuten una sola vez y esten disponibles en toda la aplicacion o desde el inicio

  
  return <RouterProvider router={router} 
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    }}
  /> ;

}