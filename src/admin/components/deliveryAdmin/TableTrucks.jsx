import { faEdit, faMinus, faMinusCircle, faUserMinus, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const TableTrucks = ({trucks = [{ id: 0, trackingNumber: "", capacity: 0, mileage: 0, isAvailable: true, driver: null,}]}) => {
    const [showForm, setShowForm] = useState(false);


  return (
    <div className="container__admin shadow-custom w-full max-w-6xl">
        <h2 className="text-lg md:text-2xl font-bold text-center text-customBlue">
            Gestión de Camiones
        </h2>
        <div className="w-full border"> {/** Table */}
            <div> {/** thead */}
                <div className="grid grid-cols-2 sm:grid-cols-4 text-center border [&>p]:border [&>p]:text-customBlue text-lg font-semibold"> {/** tr */}
                    <p>Camión</p>
                    <p>Capacidad</p>
                    <p>Kilometraje</p>
                    <p>Acciones</p>
                </div>
            </div>
            
            <div> {/** tbody */}
            {trucks?.map((truck) => (
                <div
                    key={truck.id}
                    className="grid grid-cols-2 sm:grid-cols-4 text-center border [&>p]:border"
                > {/** tr */}
                    <p>{truck.trackingNumber}</p>
                    <p>{truck.capacity}</p>
                    <p>{truck.mileage}</p>
                    <div className="flex justify-center items-center gap-2">
                        <button
                            onClick={() => handleAssignDriver(truck.id)}
                            className="p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 w-[36px] h-[36px] flex items-center justify-center"
                            title="Agregar Camión"
                            disabled={!truck.isAvailable}
                        >
                            <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button
                            onClick={() => handleRemoveDriver(truck.id)}
                            className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 w-[36px] h-[36px] flex items-center justify-center"
                            title="Eliminar Camión"
                            disabled={truck.isAvailable}
                        >
                            <FontAwesomeIcon icon={faMinusCircle} />
                        </button>
                    </div>
                </div>
            ))}
            </div>
        </div> {/* fin tabla*/}
    </div>
  );
};
