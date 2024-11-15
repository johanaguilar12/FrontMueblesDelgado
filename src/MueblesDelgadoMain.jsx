import { AppRouter } from './Router/AppRouter'

// Aqui va el store para mantener el estado de la aplicacion como autenticado o no autenticado

export const MueblesDelgadoMain = () => {
  return (
    // <Provider store={store}>
    <AppRouter />
    // </Provider>
  )
}
