import { useForm } from "../../../hooks";
import { showErrorAlert } from "../helpers";



const initialFurnitureForm = {
    type: '',
    brand: '',
    color: '',
    dimension: '',
    quantity: '',
    buildTime: '',
};
  
const furnitureValidations = {
    type: [(value) => value.trim() !== '', 'El tipo es obligatorio'],
    brand: [(value) => value.trim() !== '', 'La marca es obligatoria'],
    color: [(value) => value.trim() !== '', 'El color es obligatorio'],
    dimension: [(value) => value.trim() !== '', 'Las dimensiones son obligatorias'],
    quantity: [(value) => !isNaN(value) && Number(value) > 0, 'La cantidad debe ser un número válido mayor a 0'],
    buildTime: [(value) => value.trim() !== '', 'El tiempo de construcción es obligatorio'],
};

export const FormAddForniture = ({handleAddFurniture, setIsFurnitureFormOpen}) => {
    const {
        type,
        brand,
        color,
        dimension,
        quantity,
        buildTime,
        onInputChange: onFurnitureChange,
        isFormValid: isFurnitureValid,
        onResetForm: resetFurnitureForm,
    } = useForm(initialFurnitureForm, furnitureValidations);

    const newForniture = ( ) => {
        return { type, brand, color, dimension, quantity: Number(quantity), buildTime };
    }

    const handleSendNewForniture = () => {
        if (!isFurnitureValid) {
          showErrorAlert('Por favor, completa todos los campos del mueble correctamente');
          return;
        }
        
        handleAddFurniture(newForniture());
        resetFurnitureForm();
    }


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h3 className="font-bold text-xl mb-4">Agregar Mueble</h3>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label htmlFor="type" className="block font-semibold mb-2">
              Tipo del Mueble
            </label>
            <input
              type="text"
              name="type"
              id="type"
              value={type}
              onChange={onFurnitureChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="brand" className="block font-semibold mb-2">
              Marca del Mueble
            </label>
            <input
              type="brand"
              name="brand"
              id="brand"
              value={brand}
              onChange={onFurnitureChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="color" className="block font-semibold mb-2">
              Color del Mueble
            </label>
            <input
              type="text"
              name="color"
              id="color"
              value={color}
              onChange={onFurnitureChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dimension" className="block font-semibold mb-2">
              Dimensión del Mueble
            </label>
            <input
              type="dimension"
              placeholder="Largo, Alto, Ancho"
              name="dimension"
              id="dimension"
              value={dimension}
              onChange={onFurnitureChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="quantity" className="block font-semibold mb-2">
              Cantidad de Muebles
            </label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              value={quantity}
              onChange={onFurnitureChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="buildTime" className="block font-semibold mb-2">
                Tiempo aproximado de montaje
            </label>
            <input
              type="number"
              placeholder="En minutos"
              name="buildTime"
              id="buildTime"
              value={buildTime}
              onChange={onFurnitureChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <button
            type="button"
            onClick={handleSendNewForniture}
            className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 mr-2"
          >
            Agregar
          </button>
          <button
            type="button"
            onClick={() => setIsFurnitureFormOpen(false)}
            className="bg-gray-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-600"
          >
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};
