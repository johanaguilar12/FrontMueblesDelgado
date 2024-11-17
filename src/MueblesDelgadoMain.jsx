import { Provider } from "react-redux"
import { AppRouter } from './Router/AppRouter'
import { store } from './store'

// Aqui va el store para mantener el estado de la aplicacion como autenticado o no autenticado

export const MueblesDelgadoMain = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}
