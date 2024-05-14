import { useState } from 'react';
import {login} from '../../services/auth'
import bg from './car.svg'
import logo from './logo.png'
import Swal from "sweetalert2"
import { Link, useNavigate } from "react-router-dom"

const Contenedor = () => {

  const focoInLogin =(props)=>{
    const inputDiv =document.getElementById(props)
    inputDiv.classList.add("focus")
  }

  const focoOutLogin = (props)=>{
    const inputDiv=document.getElementById(props)
    if (props==="div-input-user"){
      if (document.getElementById("usuario").value===""){
        inputDiv.classList.remove("focus")
      }
    } else {
      if (document.getElementById("password").value===""){
        inputDiv.classList.remove("focus")
      }
    }
  }

  // const contenedorInfoUsuario = useRef(null)

  const [usuario, setUsuario]=useState("")
  const [password, setPassword]=useState("")

  const obtenerUsuario = () => {
    // let datosUsuario=null;
    // let usuarioValido=false;
    // let passwordValido=false;

    return "";
  }

  const iniciarSesion=()=>{
    const user = obtenerUsuario();
    if (user){
      alertaExitosa();
      ingresaSistema();
    }else {
      alertaErronea();
      bloqueoSistema();
    }
  }

  const navigate=useNavigate()
  const ingresaSistema=()=>{
    navigate('/dashboard')
  }

  const bloqueoSistema=()=>{
    navigate('/')
  }

  const alertaExitosa=()=>{
    const Toast=Swal.mixin({
      toast:true,
      position:"top-end",
      showConfirmButton: false,
      timer:3000,
      timerProgressBar: true,
      didOpen:(toast)=>{
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTmer)
      }
    });
    Toast.fire({
      icon:"success",
      title:"Bienvenido",
    })
  }

  const alertaErronea=()=>{
    const Toast =Swal.mixin({
      toast:true,
      position:"top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    Toast.fire({
      icon:"error",
      title:"Usuario o contraseña incorrectos",
    })
  }

  const initialState={
    // username:'',
    // password:''
  }

  const [form, setForm]=useState(initialState)
  const [token, setToken]=useState('')

  const handleChange=(event)=>{
    const {name, value}= event.target;
    setForm({...form, [name]:value})
  }

  const handleLogin = async (event)=>{
    event.preventDefault();
    console.log('Estoy enviando las credenciales del usuario', form)
    const data= await login(form);
    console.log(data)
    setToken(data.token)
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen gap-10">
        <div className="hidden md:flex justify-center items-center h-full w-1/2">
          <img src={bg} alt="" className="w-3/4 md:w-auto" />
        </div>

        <div className="flex flex-col justify-center items-center h-full space-y-4 w-full md:w-1/2 max-w-md">
          <form
            className="w-full md:w-90 max-w-xs"
            action=""
            onSubmit={handleLogin}
          >
            {/* <form className="w-full" action=""> */}
            <img src={logo} alt="" />
            <h2 className="text-center w-80">Renta de autos</h2>
            <div className="flex flex-col">
              <h5 className="text-gray-700 font-bold mt-2">Usuario</h5>
              <input
                type="text"
                id="usuario"
                name="usuario"
                className="border border-gray-300 py-2 px-4 rounded-md mt-1 w-full"
                autoComplete="usuario"
                onChange={handleChange}
                value={form.usuario}
              />
            </div>

            <div>
              <h5 className="text-gray-700 font-bold mt-2 ">Password</h5>
              <input
                type="password"
                id="password"
                name="password"
                className="border border-gray-300 py-2 px-4 rounded-md mt-1 w-full"
                autoComplete="current-password"
                onChange={handleChange}
                value={form.password}
              />
            </div>
            <Link className="text-blue-500 hover:underline">
              ¿Olvido su Contraseña?
            </Link>
            <p className="text-center">Renta Autos SAC</p>
            <p className="text-center">Telf: 987 654 321</p>
            <p className="text-center">Mail: rcar@rcar.com</p>
            <button
              type="submit"
              id="sesion"
              defaultValue="Iniciar Sesion"
              className="border p-3 bg-sky-700 text-white rounded-md cursor-pointer w-full"
            >
              Iniciar Sesion
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contenedor