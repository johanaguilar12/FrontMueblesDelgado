import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPray, faUserMinus, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useDriversStore } from "../../../hooks/useDriversStore";
import { showErrorAlert, showSuccess } from "../helpers";


export const TableAssignDriver = ({ 
    trucks = [{ id: 0, trackingNumber: "", capacity: 0, mileage: 0, isAvailable: true, driver: null,}], 
    drivers = [{ id: 0, name: "", license: ""}],
    assignments, 
  }) => {
    
  const {startAssignDriverToTruck} = useDriversStore();    
  const [selectedTruck, setSelectedTruck] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ driverName: "", truckId: ""});

  const findTruck = ( truckId = '' ) => {
    return trucks.find(truck => truck.id === truckId);
  }

  const handleAssignDriver = (truckId) => {
    setSelectedTruck(findTruck(truckId));
    setShowForm(true);
  };




  return (
    <div className="container__admin shadow-custom w-full max-w-6xl">
      <h2 className="text-lg md:text-2xl font-bold text-center text-customBlue">
        Gestión de Camiones y Conductores
      </h2>
      <div className="w-full border"> {/** Table */}
        <div> {/** thead */}
          <div className="grid grid-cols-2 sm:grid-cols-3 text-center border [&>p]:border [&>p]:text-customBlue text-lg font-semibold"> {/** tr */}
            <p>Camión</p>
            <p>Conductor</p>
            <p>Acciones</p>
          </div>
        </div>

        <div> {/** tbody */}
          {assignments?.map((assignment) => (
            <div
              key={assignment.deliveryTruck.id}
              className="grid grid-cols-2 sm:grid-cols-3 text-center border [&>p]:border"
            > {/** tr */}
            <p>{assignment.deliveryTruck.trackingNumber}</p>
            <p>{assignment.truckDriver ? assignment.truckDriver.name : "Sin Asignar"}</p>
              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={() => handleAssignDriver(assignment.deliveryTruck.id)}
                  className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 w-[36px] h-[36px] flex items-center justify-center"
                  title="Agregar conductor"
                >
                  <FontAwesomeIcon icon={faPray} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div> {/* fin tabla*/}
    </div>
  );
};
