import { useDispatch, useSelector } from "react-redux";
import mueblesDelgadoApi from "../api/mueblesDelgadoApi";
import { onSetTrucks } from "../store";


export const useTrucksStore = () => {
    const { trucks } = useSelector((state) => state.trucks);
    const dispatch = useDispatch();

    const startGetTrucks = async () => {
        try {
            const {data} = await mueblesDelgadoApi.get("/logistics/trucks");
            dispatch(onSetTrucks(data.trucks));
        } catch (error) {
            console.log(error);
            throw new Error("Error al obtener a los Conductores");
        }
    }

    const startNewTruck = async (trucks) => {
        try {
            await mueblesDelgadoApi.post("/logistics/trucks", trucks);
            console.log("Camiones actualizados:", data);
        } catch (error) {
            console.error("Error al registrar los camiones:", error.response?.data || error.message);
            throw new Error("Error al actualizar los camiones");
        }
    }



  return {
    //*Propiedades
    trucks,

    //*Métodos
    startGetTrucks,
    startNewTruck,

  }
}
