import { useState } from "react";
import Header from "../components/Header/Header";
import Navigation from "../components/Sidebar/Navigation";
import Cabecera from "../components/Vehiculos/Cabecera";
import Tabla from "../components/Vehiculos/Tabla";

const Vehiculos = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [rowData, setRowData] = useState([
    {
      Codigo: "001",
      Placa: "QWE-345",
      Asientos: 4,
      Fabricacion: 2020,
      Color: "Rojo",
      Transmision: "Automatico",
      Marca: "Toyota",
      Tipo: "Camioneta",
      Costo: 150.0,
    },
    {
      Codigo: "002",
      Placa: "AWE-123",
      Asientos: 4,
      Fabricacion: 2020,
      Color: "Rojo",
      Transmision: "Mecanico",
      Marca: "Nissan",
      Tipo: "Camioneta",
      Costo: 150.01,
    },
  ]);

  const listVehiculos = () => {
    // setRowData
    //
  };

  return (
    <>
      <div className="flex h-screen dark:bg-[#090e16] bg-white">
        <Navigation />
        <div className="w-full mx-5">
          <Header titulo="Vehiculos" />

          {isOpen && (
            <Cabecera setIsOpen={setIsOpen} listVehiculos={listVehiculos} />
          )}
          <section className="text-tremor-default dark:text-dark-tremor-content dark:bg-[#111827] bg-white p-8">
            <div className="flex w-full justify-end">
              <button
                onClick={() => setIsOpen(true)}
                className="text-white bg-green-700 px-3 py-2 rounded-md mb-3"
              >
                AGREGAR
              </button>
            </div>
            <Tabla rowData={rowData} />
          </section>
        </div>
      </div>
    </>
  );
};

export default Vehiculos;
