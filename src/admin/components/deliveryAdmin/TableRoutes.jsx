import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { useLogisticRoute } from "../../../hooks";
import { DataFurnituresOrders } from "../orderAdmin/DataFurnituresOrders";
import { showErrorAlert } from "../helpers";

export const TableRoutes = ({
    orders = [{orderID: 0, destination: "", deliveryDate: "", orderContent:[{}]}],
}) => {
    const {startPlanRoutes} = useLogisticRoute();
    const [isFurnituresOrderModalOpen, setIsFurnituresOrderModalOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState([]);
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [todayDate, setTodayDate] = useState("");

    const handleShowFornitures = ( order ) => {
        setSelectedOrder(order)
        setIsFurnituresOrderModalOpen(true);
    }

    useEffect(() => {
        const today = new Date().toLocaleDateString("en-CA"); // Formato "YYYY-MM-DD"
        setTodayDate(today);

        // Filtrar órdenes cuya fecha de entrega sea hoy
        const todayOrders = orders.filter((order) => order.deliveryDate === today);
        setFilteredOrders(todayOrders);
    }, [orders]);

    const handleGenerateRoute = async ( e ) => {
        if (filteredOrders.length < 2) {
            showErrorAlert("No hay suficientes Ordenes");
        }
        
        try {
            await startPlanRoutes(filteredOrders);
            
        } catch (error) {
            showErrorAlert(error.message);
        }
    }
    

    return(
    <div className="container__admin shadow-custom w-full max-w-6x1">
        <h2 className="text-2xl font-bold text-center text-customBlue mb-4">
            Ordenes para Hoy ({todayDate})
        </h2>
        <div className="w-full border"> {/** Tabla */}
            <div> {/** Encabezadp */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap 4 text-center border [&>p]:border [&>p]:text-customBlue text-lg font-semibold">
                    <p>ID de la orden</p>
                    <p>Destino</p>
                    <p>Fecha de Entrega</p>
                    <p>Detalles</p>
                </div>
            </div>

            <div> {/** tbody */}
                {filteredOrders?.map((order) => (
                    <div key={order.orderID} className="grid grid-cols-2 sm:grid-cols-4 text-center border [&>p]:border">
                        <p>{order.orderID}</p>
                        <p>{order.destination}</p>
                        <p>{order.deliveryDate}</p>
                        <div className="flex justify-center items-center gap-2">
                            <button
                                onClick={() => handleShowFornitures(order.orderContent)}
                                className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 w-[36px] h-[36px] flex items-center justify-center"
                                title="Agregar conductor"
                            >
                                <FontAwesomeIcon icon={faBoxOpen} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <button 
                type="button" 
                className="w-full bg-btnyellow text-white font-bold py-2 px-4 mt-4 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                onClick={handleGenerateRoute}
            >
                Generar Ruta
            </button>
        </div> {/* fin tabla*/}

        {isFurnituresOrderModalOpen && (
                <DataFurnituresOrders selectedOrder={selectedOrder} setIsFurnituresOrderModalOpen={setIsFurnituresOrderModalOpen}/>
            )}
    </div>
  );
};