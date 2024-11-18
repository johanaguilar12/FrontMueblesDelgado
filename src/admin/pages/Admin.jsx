import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faPlus, faBell } from '@fortawesome/free-solid-svg-icons';



export const Admin = () => {
  return (
    <>
      <div className="home">
        <h1>Bienvenido al Panel de Administración</h1>
        <div className="dashboard">
          <div className="card">
            <FontAwesomeIcon icon={faChartLine} className="icon" />
            <h2>Estadísticas Clave</h2>
            <p>Usuarios: 1200</p>
            <p>Ventas: $45,000</p>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faPlus} className="icon" />
            <h2>Accesos Rápidos</h2>
            <button>Agregar Nuevo Producto</button>
            <button>Ver Reportes</button>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faBell} className="icon" />
            <h2>Notificaciones</h2>
            <p>Tienes 5 nuevas notificaciones</p>
          </div>
        </div>
      </div>
    </>
  )
}
