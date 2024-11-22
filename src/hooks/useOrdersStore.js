import { useDispatch, useSelector } from "react-redux";
import mueblesDelgadoApi from "../api/mueblesDelgadoApi";
import { onSetOrders, onSetPackingListOrderID } from "../store";
import { useAdmin } from "./useAdmin";


export const useOrdersStore = () => {
    const { orders, packingListOrderID } = useSelector((state) => state.orders);
    const dispatch = useDispatch();
    const {startCommand,finishedCommand} = useAdmin();

    const startGetOrders = async () => {
        try {
            const { data } = await mueblesDelgadoApi.get("/orders");
            dispatch(onSetOrders(data));
        } catch (error) {
            const message = error.response?.data?.message || "Error al obtener los pedidos";
            console.error("startGetOrders Error:", message);
            throw new Error(message);
        }
    };

    const startCreateOrder = async (order) => {
        try {
            startCommand();
            const { data } = await mueblesDelgadoApi.post("/orders", order);
            console.log("Pedido creado exitosamente:", data.order);

            startGetOrders();
            finishedCommand();
        } catch (error) {
            finishedCommand();
            const message = error.response?.data?.message || "Error al crear el pedido";
            console.error("startCreateOrder Error:", message);
            throw new Error(message);
        }
    };

    const startUpdateOrder = async (orderId, updatedOrder) => {
        try {
            const { data } = await mueblesDelgadoApi.put(`/orders/${orderId}`, updatedOrder);
            console.log("Pedido actualizado:", data);
            startGetOrders();
        } catch (error) {
            const message = error.response?.data?.message || "Error al actualizar el pedido";
            console.error("startUpdateOrder Error:", message);
            throw new Error(message);
        }
    };

    const startRemoveOrder = async (orderId) => {
        try {
            await mueblesDelgadoApi.delete(`/orders/${orderId}`);
            console.log("Pedido eliminado exitosamente");
            startGetOrders();
        } catch (error) {
            const message = error.response?.data?.message || "Error al eliminar el pedido";
            console.error("startRemoveOrder Error:", message);
            throw new Error(message);
        }
    };


    const startSetOrders = async (ordersList) => {
        try {
            await mueblesDelgadoApi.post("/orders/orders", ordersList);
            console.log("Lista de pedidos establecida exitosamente");
            startGetOrders();
        } catch (error) {
            const message = error.response?.data?.message || "Error al establecer los pedidos";
            console.error("startSetOrders Error:", message);
            throw new Error(message);
        }
    };

    const setPackingListOrderID = (ordersId = []) => {
        dispatch(onSetPackingListOrderID(ordersId));
    }

    return {
        //* Propiedades
        orders,
        packingListOrderID,

        //* Métodos
        startGetOrders,
        startCreateOrder,
        startUpdateOrder,
        startRemoveOrder,
        startSetOrders,
        setPackingListOrderID,
    };
}
