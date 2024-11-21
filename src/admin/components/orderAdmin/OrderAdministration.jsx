import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useOrdersStore } from "../../../hooks"
import { faBoxOpen, faMinus } from "@fortawesome/free-solid-svg-icons";
import { DataFornitures } from "../inventoryAdmin";


export const OrderAdministration = () => {
    const [isFurnituresModalOpen, setIsFurnituresModalOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState({});
    const {orders} = useOrdersStore();

    const handleShowFornitures = ( order ) => {
        setSelectedOrder(order)
        setIsFurnituresModalOpen(true);
    }

  return (
    <div className="flex flex-col justify-center items-center">
        <div className="container__admin shadow-custom w-full max-w-6xl">
            <h2 className="text-2xl font-bold text-center text-customBlue mb-6">
                Administrar Ordenes
            </h2>

            <div className="w-full border"> {/** Table */}
                <div> {/** thead */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 text-center border [&>p]:border [&>p]:text-customBlue text-lg font-semibold"> {/** tr */}
                    <p>ID de la orden</p>
                    <p>Destino</p>
                    <p>Fecha de Entrega</p>
                    <p>Acciones</p>
                    </div>
                </div>

                <div> {/** tbody */}
                    {orders?.map((order) => (
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
                        <button
                            // onClick={() => handleRemoveDriver(truck.id)}
                            className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 w-[36px] h-[36px] flex items-center justify-center"
                            title="Eliminar conductor"
                        >
                            <FontAwesomeIcon icon={faMinus} />
                        </button>
                        </div>
                    </div>
                    ))}
                </div>
            </div> {/* fin tabla*/}

            {isFurnituresModalOpen && (
                <DataFornitures packinglist={selectedOrder} setIsFurnituresModalOpen = {setIsFurnituresModalOpen}/>
            )}

        </div>
    </div>
  )
}
