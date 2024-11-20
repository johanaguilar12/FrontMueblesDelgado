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

    const startAssignOrderToTruck = async (orderId, trackingNumber) => {
        try {
            const numericOrderId = parseInt(orderId, 10);
            const numericTrackingNumber = parseInt(trackingNumber, 10);
    
            if (isNaN(numericOrderId) || isNaN(numericTrackingNumber)) {
                throw new Error("Los valores de orderId y trackingNumber deben ser números.");
            }

            const { data } = await mueblesDelgadoApi.post("/logistics/assign", {
                orderId: numericOrderId,
                trackingNumber: numericTrackingNumber,
            });
            console.log("Camiones actualizados:", data);
        } catch (error) {
            console.error(
                "Error al registrar los camiones:",
                error.response?.data || error.message
            );
            throw new Error("Error al actualizar los camiones");
        }
    };



  return {
    //*Propiedades
    trucks,

    //*Métodos
    startGetTrucks,
    startNewTruck,
    startAssignOrderToTruck,

  }
}
