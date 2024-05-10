// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard';
import Alquileres from './pages/Alquileres';
import Mantenimientos from './pages/Mantenimientos';
import Vehiculos from './pages/Vehiculos';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path='/alquileres' element={<Alquileres/>} />
          <Route path='/mantenimientos' element={<Mantenimientos/>}/>
          <Route path='/vehiculos' element={<Vehiculos/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
