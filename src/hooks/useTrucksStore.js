import { useDispatch, useSelector } from "react-redux";
import mueblesDelgadoApi from "../api/mueblesDelgadoApi";
import { onSetOrderTruckAssignments, onSetTrucks } from "../store";
import { useAdmin } from "./useAdmin";


export const useTrucksStore = () => {
    const { trucks, orderTruckAssignments } = useSelector((state) => state.trucks);
    const {startCommand, finishedCommand} = useAdmin();
    const dispatch = useDispatch();

    const startGetTrucks = async () => {
        try {
            const {data} = await mueblesDelgadoApi.get("/delivery/trucks");
            dispatch(onSetTrucks(data.trucks));
        } catch (error) {
            console.log(error);
            throw new Error("Error al obtener a los Conductores");
        }
    }

    const startRegisterDeliveryTruck = async (truck) => {
        try {
            startCommand();

            const {data} = await mueblesDelgadoApi.post("/delivery/truck", truck);
            startGetTrucks();

            finishedCommand();
            return data;
        } catch (error) {
            finishedCommand();
            console.log(error);
            throw new Error("Error al agregar el camión");
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

    const startGetOrderTruckAssignments = async () => {
        try {
            const {data} = await mueblesDelgadoApi.get("/logistics/assignments");
            dispatch(onSetOrderTruckAssignments(data.assignments));
        } catch (error) {
            console.error("Error al registrar los camiones:", error.response?.data || error.message);
            throw new Error("Error al actualizar los camiones");
        }
        
    }





  return {
    //*Propiedades
    trucks,
    orderTruckAssignments,

    //*Métodos
    startGetTrucks,
    startRegisterDeliveryTruck,
    startAssignOrderToTruck,
    startGetOrderTruckAssignments,

  }
}
