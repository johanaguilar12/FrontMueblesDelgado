import { useDispatch, useSelector } from "react-redux"
import mueblesDelgadoApi from "../api/mueblesDelgadoApi";
import { onSetFornitures, onSetPackingLists } from "../store";
import { useAdmin } from "./useAdmin";


export const useLogisticRoute = () => {
    // const { packinglists, furnitures } = useSelector((state) => state.inventory);
    const {startCommand, finishedCommand} = useAdmin();
    const dispatch = useDispatch();

    const startPlanRoutes = async (orders) => {
        try {
          startCommand();
          
          const { data } = await mueblesDelgadoApi.post("/logistics/planRoutes", orders);
          console.log(data)
        //   Asignar al store
          finishedCommand();
        } catch (error) {
          finishedCommand();
          console.log(error);
          throw new Error("Error al Crear Las rutas");
        }
    }
    



  return {
    //*Propiedades
    // packinglists,
    // furnitures,

    //*Métodos
    startPlanRoutes,

  }
}
