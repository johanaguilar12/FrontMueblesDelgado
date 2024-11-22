import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useInventoryStore } from "../../../hooks"
import { DataFornitures } from "./DataFornitures";


export const TablePackingList = () => {
  const [isFurnituresModalOpen, setIsFurnituresModalOpen] = useState(false);
  const [selectedPackingList, setSelectedPackingList] = useState({});
  const { packinglists } = useInventoryStore();

  const findPackingList = ( folio = '') => {
    return packinglists.filter((packinglist) => packinglist.folio === folio);
  }

  const handleShowFornitures = ( folio = '' ) => {
    const packinglist = findPackingList(folio);
    
    setSelectedPackingList(packinglist);
    setIsFurnituresModalOpen(true);
  }

  return (
    <div className="container__admin shadow-custom w-full max-w-6xl">
        <h2 className="text-2xl font-bold text-center text-customBlue mb-6">
            Registros PackingList
        </h2>
        <div className="w-full border"> {/** Table */}
          <div> {/** thead */}
            <div className="grid grid-cols-2 sm:grid-cols-3 text-center border [&>p]:border [&>p]:text-customBlue text-lg font-semibold"> {/** tr */}
              <p>Folio</p>
              <p>Fecha de Llegada</p>
              <p>Acciones</p>
            </div>
          </div>

          <div> {/** tbody */}
            {packinglists?.map((packinglist) => (
              <div key={packinglist.folio} className="grid grid-cols-2 sm:grid-cols-3 text-center border [&>p]:border">
                <p>{packinglist.folio}</p>
                <p>{packinglist.arrivalDate}</p>
                <div className="flex justify-center items-center gap-2">
                  <button
                    onClick={() => handleShowFornitures(packinglist.folio)}
                    className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 w-[36px] h-[36px] flex items-center justify-center"
                    title="Agregar conductor"
                  >
                    <FontAwesomeIcon icon={faBoxOpen} />
                  </button>
                </div>
              </div>
            ))}
          </div>
      </div> {/* fin tabla*/}

      {isFurnituresModalOpen && (
        <DataFornitures packinglist={selectedPackingList} setIsFurnituresModalOpen = {setIsFurnituresModalOpen}/>
      )}
    </div>
  )
}
