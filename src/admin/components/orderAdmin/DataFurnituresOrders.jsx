

export const DataFurnituresOrders = ({selectedOrder, setIsFurnituresOrderModalOpen}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h3 className="font-bold text-xl mb-4">Muebles</h3>
            <div>
                    <ul>
                        {selectedOrder.map((furniture, furnitureIndex) => (
                            <li key={`${furniture.type}-${furniture.brand}-${furnitureIndex}`} className="flex justify-between items-center border my-4">
                                <div>
                                    <span>{`ID: ${furniture?.furnitureId}`}</span>
                                    <br />
                                    <span>{`Tipo: ${furniture.type}`}</span>
                                    <br />
                                    <span>{`Marca: ${furniture.brand}`}</span>
                                    <br />
                                    <span>{`Color: ${furniture.color}`}</span>
                                    <br />
                                    <span>{`Dimensión: largo: ${furniture.dimension.depth} x alto: ${furniture.dimension.height} x ancho: ${furniture.dimension.width}`}</span>
                                    <br />
                                    <span>{`Cantidad: ${furniture.quantity}`}</span>
                                    <br />
                                    <span>{`Tiempo de Montaje: ${furniture.buildTime} minutos`}</span>
                                    <br />
                                </div>
                            </li>
                        ))}
                    </ul>
            </div>
            <button
                type="button"
                onClick={() => setIsFurnituresOrderModalOpen(false)}
                className="bg-gray-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-600"
            >
            Cerrar
          </button>
        </div>
    </div>
  )
}
