import { useDispatch, useSelector } from "react-redux";
import mueblesDelgadoApi from "../api/mueblesDelgadoApi";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store";

export const useAuthStore = () => {

  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ username, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await mueblesDelgadoApi.post("/auth", {
        name: username,
        password,            //! Cambiar nombres dependiendo de como se reciba del spring
      });
      localStorage.setItem("token", data.token);
      dispatch(onLogin(data.user));
    } catch (error) {
      dispatch( onLogout('Credenciales incorrectas') );

      setTimeout(() => {
        dispatch( clearErrorMessage() );
      }, 10);
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(onLogout());
      return;
    }

    try {
      const { data } = await mueblesDelgadoApi.get("/auth/renew");
      localStorage.setItem("token", data.token);
      dispatch(onLogin(data.name));

    } catch (error) {
        localStorage.clear();
      dispatch(onLogout());
    }
  }

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
  };

  return {
    //* Propiedades
    status,
    user,
    errorMessage,

    //* Métodos
    startLogin,
    checkAuthToken,
    startLogout,
  };
};