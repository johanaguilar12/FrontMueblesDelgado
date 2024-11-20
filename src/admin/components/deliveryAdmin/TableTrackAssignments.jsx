import { faCheck, faEdit } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const TableTrackAssignments = ({orderTruckAssignments}) => {

  return (
    <div className="container__admin shadow-custom w-full max-w-6xl">
        <h2 className="text-2xl font-bold text-center text-customBlue mb-6">
            Ordenes Activas
        </h2>

        <div className="w-full border">
            <div> {/** thead */}
                <div className="grid grid-cols-2 sm:grid-cols-4 text-center border [&>p]:border [&>p]:text-customBlue text-lg font-semibold"> {/** tr */}
                    <p>ID de asignación</p>
                    <p>ID de Orden</p>
                    <p>Número de Rastreo del Camión</p>
                    <p>Acciones</p>
                </div>
            </div>

            <div>
                {orderTruckAssignments?.map((assignment) => (
                    <div key={assignment.assignmentId} className="grid grid-cols-2 sm:grid-cols-4 text-center border [&>p]:border">
                        <p>{assignment.assignmentId}</p>
                        <p>{assignment.orderId}</p>
                        <p>{assignment.truckId}</p>
                        <div className="flex justify-center items-center gap-2">
                            <button
                                onClick={() => handleAssignOrder(truck.id)}
                                className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 w-[36px] h-[36px] flex items-center justify-center"
                                title="Entregado"
                            >
                                <FontAwesomeIcon icon={faCheck} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}
