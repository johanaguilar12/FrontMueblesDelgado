import { faEdit, faMinusCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export const TableDrivers = ({drivers = [{ id: 0, name: "", license: ""}]}) => {

  return (
    <div className="container__admin shadow-custom w-full max-w-6xl">
        <h2 className="text-lg md:text-2xl font-bold text-center text-customBlue">
            Gestión de Conductores
        </h2>
        <div> {/** Table */}
            <div> {/** thead */}
                <div className="grid grid-cols-2 sm:grid-cols-3 text-center border [&>p]:border [&>p]:text-customBlue text-lg font-semibold"> {/** tr */}
                    <p>Nombre</p>
                    <p>Licencia</p>
                    <p>Acciones</p>
                </div>
            </div>

            <div> {/** tbody */}
                {drivers?.map((driver) => (
                    <div key={driver.id} className="grid grid-cols-2 sm:grid-cols-3 text-center border [&>p]:border">
                        <p>{driver.name}</p>
                        <p>{driver.license}</p>
                        <div className="flex justify-center items-center gap-2">
                            <button
                                onClick={() => handleAssignDriver(truck.id)}
                                className="p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 w-[36px] h-[36px] flex items-center justify-center"
                                title="Editar conductor"
                            >
                                <FontAwesomeIcon icon={faEdit} />
                            </button>
                            <button
                                onClick={() => handleRemoveDriver(truck.id)}
                                className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 w-[36px] h-[36px] flex items-center justify-center"
                                title="Eliminar conductor"
                            >
                                <FontAwesomeIcon icon={faMinusCircle} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
