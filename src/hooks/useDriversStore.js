import { useDispatch, useSelector } from "react-redux"
import mueblesDelgadoApi from "../api/mueblesDelgadoApi";
import { onSetDrivers } from "../store";


export const useDriversStore = () => {
    const { drivers } = useSelector((state) => state.drivers);
    const dispatch = useDispatch();

    const startGetDrivers = async () => {
        try {
            const {data} = await mueblesDelgadoApi.get("/delivery/drivers");
            dispatch(onSetDrivers(data.drivers));
        } catch (error) {
            console.log(error);
            throw new Error("Error al obtener a los Conductores");
        }
    }



  return {
    //*Propiedades
    drivers,

    //*Métodos
    startGetDrivers,

  }
}
