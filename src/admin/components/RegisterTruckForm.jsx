import { useForm } from "../../hooks"
import { showErrorAlert } from "../../auth/components";
import { onlyLettersOnKeyDown, onlyNumbersOnKeyDown } from "./helpers";
import { Link } from "react-router-dom";

const initialFormRegisterDriver = {
  trackingNumber: '',
  capacity: '',
  mileage: '',
}

const formValidationsRegisterDriver = {
  trackingNumber: [(value) => value.trim() !== '', 'El número de rastreo es obligatorio'],
  capacity: [(value) => value.trim() !== '', 'La capacidad es obligatoria'],
  mileage: [(value) => value.trim() !== '', 'El kilometraje es obligatorio'],
}

export const RegisterTruckForm = () => {
  const {trackingNumber, capacity, mileage, onInputChange, onResetForm, isFormValid} = useForm(initialFormRegisterDriver, formValidationsRegisterDriver);

  const onSubmitFormDriverRegister = ( e ) => {
    e.preventDefault();

    if (!isFormValid) {
      showErrorAlert("Todos los campos son obligatorios");
      return;
    }

    console.log(capacity, trackingNumber, mileage)
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-custom w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-customBlue mb-6">
          Registrar Camión
        </h2>
        <form onSubmit={onSubmitFormDriverRegister}>
          <div className="mb-4">
            <label
              htmlFor="trackingNumber"
              className="block text-baseclr font-semibold mb-2"
            >
              Número de Rastreo
            </label>
            <input
              type="text"
              name="trackingNumber"
              id="trackingNumber"
              value={trackingNumber}
              onChange={onInputChange}
              onKeyDown={onlyLettersOnKeyDown}
              className="w-full px-4 py-2 border border-lineclr rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlueLight"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="capacity"
              className="block text-baseclr font-semibold mb-2"
            >
              Capacidad
            </label>
            <input
              type="number"
              name="capacity"
              id="capacity"
              value={capacity}
              onChange={onInputChange}
              onKeyDown={onlyNumbersOnKeyDown}
              className="w-full px-4 py-2 border border-lineclr rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlueLight"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="mileage"
              className="block text-baseclr font-semibold mb-2"
            >
              Kilometraje
            </label>
            <input
              type="number"
              name="mileage"
              id="mileage"
              value={mileage}
              onChange={onInputChange}
              onKeyDown={onlyNumbersOnKeyDown}
              className="w-full px-4 py-2 border border-lineclr rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlueLight"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-btnyellow text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            Registrar Camión
          </button>
        </form>
        <Link to={'/admin/panel/deliveryadmin'}>
          <button
            type="button"
            className="mt-5 w-full bg-btnyellow text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            Asignarle Un Chófer
          </button>
        </Link>
      </div>
    </div>
  )
}
