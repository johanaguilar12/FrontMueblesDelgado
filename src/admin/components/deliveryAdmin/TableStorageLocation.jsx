import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarehouse } from "@fortawesome/free-solid-svg-icons";

export const TableStorageLocation = ({
    storageLocations = [{id: 0, productId: "", rackNumber: "", cellNumber:""}],
}) => {
    const [selectedStorageLocation, setSelectedStorageLocation] = useState(null);

    const handleViewDetail = (storage) => {
    setSelectedRoute(storage);
    alert(`Detalles del almacenamiento seleccionado: ${JSON.stringify(route, null, 2)}`);
    };

    return(
    <div className="container__admin shadow-custom w-full max-w-6x1">
        <h2 className="text-2xl font-bold text-center text-customBlue">
        Gestión de Ubicaciones de Almacenamiento
        </h2>
        <div className="w-full border"> {/** Tabla */}
            <div> {/** Encabezadp */}
                <div className="grid grid-cols-5 sm:grid-cols-5 gap 4 text-center border [&>p]:border [&>p]:text-customBlue text-lg font-semibold">
                <p>Storage ID</p>
                <p>Product ID</p>
                <p>Rack Number</p>
                <p>Cell Number</p>
                <p>Detalles</p>
                </div>
            </div>

            <div> {/**Cuerpo */}
                {storageLocations?.map((storage) =>(
                    <div key={storage.id}
                         className="grid grid-cols-5  sm:grid-cols-5 text-center border [&>p]:border">{/**row */}
                         <p>{storage.id}</p>
                         <p>{storage.productId}</p>
                         <p>{storage.rackNumber}</p>
                         <p>{storage.cellNumber}</p>
                        <div className="flex justify-center items-center gap-2">
                            <button onClick={() => handleViewDetail(route.id)}
                                    className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 w-[36px] h-[36px] flex items-center justify-center"
                                    title = "ver detalles">
                                <FontAwesomeIcon icon={faWarehouse}/>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};