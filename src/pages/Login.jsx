import { BrowserRouter } from 'react-router-dom';
import Contenedor from '../components/LoginContenedor/Contenedor'
import LoginFondo from "../components/LoginFondo/Loginfondo";

const Login = () => {
  return (
    <>
      {/* <BrowserRouter> */}
        <LoginFondo/>
        <Contenedor/>
      {/* </BrowserRouter> */}
    </>
  )
}

export default Login