import { useDispatch, useSelector } from "react-redux"
import mueblesDelgadoApi from "../api/mueblesDelgadoApi";
import { onSetDrivers } from "../store";


export const useInventoryStore = () => {
    const { packinglists, furnitures } = useSelector((state) => state.inventory);
    const dispatch = useDispatch();

    // const startGetDrivers = async () => {
    //     try {
    //         const {data} = await mueblesDelgadoApi.get("/delivery/drivers");
    //         dispatch(onSetDrivers(data.drivers));
    //     } catch (error) {
    //         console.log(error);
    //         throw new Error("Error al obtener a los Conductores");
    //     }
    // }



  return {
    //*Propiedades
    packinglists,
    furnitures,

    //*Métodos

  }
}
