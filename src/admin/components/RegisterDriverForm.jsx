import { useForm } from "../../hooks"



const initialFormRegisterDriver = {
    driverName: '',
    driverLicense: '',
}

const formValidationsRegisterDriver = {
    driverName: [(value) => value.trim() !== '', 'El nombre del conductor es obligatorio'],
    driverLicense: [(value) => value.trim() !== '', 'La licencia del conductor es obligatoria'],
}
export const RegisterDriverForm = () => {

    const {driverName, driverLicense, onInputChange, onResetForm, isFormValid} = useForm(initialFormRegisterDriver, formValidationsRegisterDriver);

    const handleSubmit = ( e ) => {
        e.preventDefault();
        console.log(driverLicense, driverName)
    
    }


  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-custom w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-customBlue mb-6">
          Registrar Conductor
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="driverName"
              className="block text-baseclr font-semibold mb-2"
            >
              Nombre del Conductor
            </label>
            <input
              type="text"
              name="driverName"
              id="driverName"
              value={driverName}
              onChange={onInputChange}
              className="w-full px-4 py-2 border border-lineclr rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlueLight"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="driverLicense"
              className="block text-baseclr font-semibold mb-2"
            >
              Número de Licencia
            </label>
            <input
              type="number"
              name="driverLicense"
              id="driverLicense"
              value={driverLicense}
              onChange={onInputChange}
              className="w-full px-4 py-2 border border-lineclr rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlueLight"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-btnyellow text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            Registrar Conductor
          </button>
        </form>
      </div>
    </div>
  );
}
