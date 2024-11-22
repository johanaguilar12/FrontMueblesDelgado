import { useEffect, useState } from "react";
import { useForm, useInventoryStore, useOrdersStore } from "../../../hooks";
import { showErrorAlert, showSuccess } from "../helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";


const initialOrderForm = {
    destination: '',
    deliveryDate: '',
};

const furnitureValidations = {
    destination: [(value) => value.trim() !== '', 'El destino es obligatorio'],
    deliveryDate: [(value) => value.trim() !== '', 'La fecha de entrega es obligatoria'],
};

export const FormAddOrder = () => {
    const [furnitureList, setFurnitureList] = useState([]);
    const [selectedFurnitures, setSelectedFurnitures] = useState([]);
    const {destination, deliveryDate, isFormValid, onInputChange, onResetForm} = useForm(initialOrderForm, furnitureValidations);
    const {furnitures} =  useInventoryStore();
    const {startCreateOrder} = useOrdersStore();

    const handleAssignOrders = () => {
        setFurnitureList([...furnitureList, ...selectedFurnitures]);
        setSelectedFurnitures([]);
    };
    

    const handleQuantityChange = (e, furnitureId) => {
        const newQuantity = parseInt(e.target.value, 10);
    
        setFurnitureList((prevFurnitureList) =>
            prevFurnitureList.map((furniture) => {
                if (furniture.furnitureId === furnitureId) {
                    // Verifica si la nueva cantidad es válida
                    if (newQuantity > furniture.stock) {
                        showErrorAlert(`La cantidad no puede superar el stock disponible (${furniture.stock})`);
                        return furniture;
                    } else if (newQuantity < 1) {
                        showErrorAlert(`La cantidad debe ser al menos 1`);
                        return furniture;
                    }
                    return { ...furniture, quantity: newQuantity };
                }
                return furniture;
            })
        );
    };

    const handleSelectChange = (e) => {
        const options = e.target.options;
        const selected = [];
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                const furniture = JSON.parse(options[i].value);
                selected.push({ ...furniture, quantity: 1, stock: furniture.quantity });
            }
        }
        setSelectedFurnitures(selected);
    };

    const handleDeselectForniture = (furnitureId) => {
        setFurnitureList((prevFurnitureList) =>
            prevFurnitureList.filter((furniture) => furniture.furnitureId !== furnitureId)
        );
    };

    const handleFilterSelected = (furniture) => {
        return !furnitureList.some((assignedFurniture) => assignedFurniture.furnitureId === furniture.furnitureId);
    };

    const handleFormNewOrderSubmit = async (e) => {
        e.preventDefault();
    
        if (!isFormValid) {
            showErrorAlert('Todos los campos son obligatorios');
            return;
        }
    
        try {
            const mappedFurnitureList = furnitureList.map(({ stock, ...furniture }) => ({
                ...furniture,
            }));
    
            const newOrder = {
                destination,
                deliveryDate,
                orderContent: mappedFurnitureList,
            };

            console.log(newOrder);
    
            // await startCreateOrder(newOrder);
            // onResetForm();
            // setFurnitureList([]);
            // setSelectedFurnitures([]);
            // showSuccess('Creado Correctamente');
        } catch (error) {
            showErrorAlert(error.message);
        }
    };

  return (
    <div className="flex flex-col justify-center items-center">
        <div className="container__admin shadow-custom w-full max-w-6xl">
            <h2 className="text-lg md:text-2xl font-bold text-center text-customBlue">
                Registrar Orden
            </h2>

            <form onSubmit={handleFormNewOrderSubmit}>
                <div className="mb-4">
                    <label htmlFor="destination" className="block font-semibold mb-2">
                        Destino
                    </label>
                    <input
                        type="text"
                        name="destination"
                        id="destination"
                        value={destination}
                        onChange={onInputChange}
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="deliveryDate" className="block font-semibold mb-2">
                        Fecha de entrega
                    </label>
                    <input
                        type="date"
                        name="deliveryDate"
                        id="deliveryDate"
                        value={deliveryDate}
                        onChange={onInputChange}
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>
                <div className="my-4">
                    <h3 className="text-lg font-semibold">Muebles Asignados</h3>
                    <ul>
                        {furnitureList.map((furniture, index) => (
                            <li key={furniture.furnitureId}>
                                {`${furniture.furnitureId} - ${furniture.type} - ${furniture.brand} - ${furniture.color} - Existencia: ${furniture.stock}`}
                                
                                <label htmlFor={`quantity-${furniture.furnitureId}`} className="ml-5 font-bold">Cantidad:</label>
                                <input
                                    type="number"
                                    name={`quantity-${furniture.furnitureId}`}
                                    id={`quantity-${furniture.furnitureId}`}
                                    value={furniture.quantity}
                                    onChange={(e) => handleQuantityChange(e, furniture.furnitureId)}
                                    className="mx-5 w-24 px-4 py-2 border rounded-lg"
                                />
                                <button
                                type="button"
                                    className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 w-[36px] h-[36px]"
                                    onClick={() => handleDeselectForniture(furniture.furnitureId)}
                                >
                                    <FontAwesomeIcon icon={faMinus}/>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <label htmlFor="selectOrder" className="block text-baseclr font-semibold mb-2">
                        Seleccionar Mueble
                    </label>
                    <select
                        id="selectOrder"
                        onChange={handleSelectChange}
                        className="w-full px-4 py-2 border border-lineclr rounded-lg"
                        multiple
                        size={10}
                    >
                    <option value="" disabled>Seleccionar...</option>
                    {furnitures?.filter(handleFilterSelected).map((furniture, index) => (
                        <option key={`${furniture.type}-${index}`} value={JSON.stringify(furniture)}>
                            {`${furniture.furnitureId} - ${furniture.type} - ${furniture.brand} - ${furniture.color} - Existencia: ${furniture.quantity}`}
                        </option>
                    ))}
                    </select>

                    <button
                        type="button"
                        className="w-full bg-btnyellow text-white font-bold py-2 px-4 mt-4 rounded-lg hover:bg-yellow-600 text-sm md:text-base"
                        onClick={handleAssignOrders}
                    >
                        Asignar
                    </button>
                </div>

                <button
                    type="submit"
                    disabled={!isFormValid}
                    className={`w-full bg-btnyellow text-white font-bold py-2 px-4 mt-4 rounded-lg ${isFormValid ? 'hover:bg-yellow-600' : ''} focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                >
                    Registrar Orden
                </button>
            </form>

        </div>
    </div>
  )
}
