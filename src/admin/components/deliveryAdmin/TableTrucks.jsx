import { useState } from "react";
import { faUserMinus, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDriversStore } from "../../../hooks";
import { showErrorAlert, showSuccess } from "../helpers";

export const TableTrucks = ({trucks = [{ id: 0, trackingNumber: "", capacity: 0, mileage: 0, isAvailable: true, driver: null,}], drivers = [{ id: 0, name: "", license: ""}]}) => {
    
    const [showForm, setShowForm] = useState(false);
    const {startAssignDriverToTruck} = useDriversStore();    
    const [selectedTruck, setSelectedTruck] = useState(null);
    const [formData, setFormData] = useState({ driverName: "", truckId: ""});
  
    const findTruck = ( truckId = '' ) => {
      return trucks.find(truck => truck.id === truckId);
    }
  
    const handleAssignDriver = (truckId) => {
      setSelectedTruck(findTruck(truckId));
      setShowForm(true);
    };
  
    const handleRemoveDriver = (truckId) => {
      setSelectedTruck(findTruck(truckId));
    };
  
    const handleFormAssignSubmit = async (e) => {
        e.preventDefault();
  
        if (!selectedTruck) {
          showErrorAlert("Seleccione un Camión");
        }
  
        try {
          await startAssignDriverToTruck(selectedTruck.trackingNumber, formData.driverName);
  
          setShowForm(false);
          showSuccess("Conductor asiganado correctamente");
        } catch (error) {
          setShowForm(false);
          showErrorAlert(error.message);
        }
    }

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
                            className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 w-[36px] h-[36px] flex items-center justify-center"
                            title="Agregar conductor"
                            disabled={!truck.isAvailable}
                        >
                            <FontAwesomeIcon icon={faUserPlus} />
                        </button>
                        <button
                            onClick={() => handleRemoveDriver(truck.id)}
                            className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 w-[36px] h-[36px] flex items-center justify-center"
                            title="Eliminar conductor"
                            disabled={truck.isAvailable}
                        >
                            <FontAwesomeIcon icon={faUserMinus} />
                        </button>
                    </div>
                </div>
            ))}
            </div>
        </div> {/* fin tabla*/}
        {showForm && (
          <div className="mt-6">
            <h3 className="text-base md:text-xl font-bold text-customBlue mb-4">
              Asignar Conductor al Camión
            </h3>
            <form onSubmit={handleFormAssignSubmit} className="space-y-4">
              <div>
                <label htmlFor="selectDriver" className="block text-baseclr font-semibold mb-2">
                  Seleccionar Conductor
                </label>
                <select
                  value={formData.name}
                  id="selectDriver"
                  onChange={(e) =>
                    setFormData({ ...formData, driverName: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-lineclr rounded-lg"
                >
                  <option value="">Seleccionar...</option>
                  {drivers?.map((driver) => (
                    <option key={driver.id} value={driver.name}>
                      {driver.name}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-btnyellow text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 text-sm md:text-base"
              >
                Asignar
              </button>
            </form>
          </div>
        )}
    </div>
  );
};
