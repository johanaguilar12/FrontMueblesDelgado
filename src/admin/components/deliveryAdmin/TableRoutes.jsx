import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoute } from "@fortawesome/free-solid-svg-icons";

export const TableRoutes = ({
    routes = [{id: 0, routeNumber: "", departureDate: "", duration:""}],
}) => {
    const [selectedRoute, setSelectedRoute] = useState(null);

    const handleViewDetail = (routeId) => {
    setSelectedRoute(routes.find((route) => route.id === routeId));
    alert(`Detalles de la ruta seleccionada: ${JSON.stringify(route, null, 2)}`);
    };

    return(
    <div className="container__admin shadow-custom w-full max-w-6x1">
        <h2 className="text-2xl font-bold text-center text-customBlue">
        Gestión de Rutas
        </h2>
        <div className="w-full border"> {/** Tabla */}
            <div> {/** Encabezadp */}
                <div className="grid grid-cols-4 sm:grid-cols-4 gap 4 text-center border [&>p]:border [&>p]:text-customBlue text-lg font-semibold">
                <p>Número de Ruta</p>
                <p>Fecha de Salida</p>
                <p>Duración Aproximada</p>
                <p>Detalles</p>
                </div>
            </div>

            <div> {/**Cuerpo */}
                {routes?.map((route) =>(
                    <div key={route.id}
                         className="grid grid-cols-4  sm:grid-cols-4 text-center border [&>p]:border">{/**row */}
                         <p>{route.routeNumber}</p>
                         <p>{route.departureDate}</p>
                         <p>{route.duration}</p>
                        <div className="flex justify-center items-center gap-2">
                            <button onClick={() => handleViewDetail(route.id)}
                                    className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 w-[36px] h-[36px] flex items-center justify-center"
                                    title = "ver detalles">
                                <FontAwesomeIcon icon={faRoute}/>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};