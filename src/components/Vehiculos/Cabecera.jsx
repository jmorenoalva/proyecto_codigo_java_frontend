import PropTypes from "prop-types";
import { useState } from "react";
import { createVehiculo } from "../../services/vehiculo";
import Swal from "sweetalert2";

const Cabecera = ({ action = "Creacion", setIsOpen }) => {

  const [form, setForm] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setForm({ ...form, [name]: Number(checked) });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await createVehiculo(form);
    if (data) {
      Swal.fire({
        title: "Operación exitosa",
        text: "Se guardó el vehiculo exitosamente",
      });
    }
    console.log(form);
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8">
              <div className="dark:bg-[#111827] bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 dark:text-white text-black">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    {/* FORMULARIO */}
                    <form
                      className="container"
                      onSubmit={handleSubmit}
                      id="vehiculosForm"
                    >
                      <h3 className="text-[24px] mb-5">{action}</h3>

                      <div className="flex flex-row">
                        <div className="px-2 flex flex-col w-4/6">
                          <label htmlFor="">Codigo</label>
                          <input
                            className="dark:text-white text-black dark:bg-[#3e4652] bg-white"
                            name="codigo"
                            type="text"
                            onChange={handleChange}
                            value={form.codigo}
                          />
                        </div>
                        <div className="px-2 flex flex-col w-4/6">
                          <label htmlFor="">Placa</label>
                          <input
                            className="dark:text-white text-black dark:bg-[#3e4652] bg-white"
                            name="placa"
                            type="text"
                            id="placa"
                            onChange={handleChange}
                            value={form.placa}
                          />
                        </div>
                        <div className="px-2 flex flex-col w-4/6">
                          <label htmlFor="">Asientos</label>
                          <input
                            className="dark:text-white text-black dark:bg-[#3e4652] bg-white"
                            name="asientos"
                            type="number"
                            onChange={handleChange}
                            value={form.asientos}
                          />
                        </div>
                      </div>

                      <div className="flex flex-row mt-3">
                        <div className="px-2 flex flex-col w-4/6">
                          <label htmlFor="">Fabricacion</label>
                          <input
                            className="dark:text-white text-black dark:bg-[#3e4652] bg-white"
                            name="anioFabricacion"
                            type="number"
                            onChange={handleChange}
                            value={form.anioFabricacion}
                          />
                        </div>
                        <div className="px-2 flex flex-col w-4/6">
                          <label htmlFor="">Color</label>
                          <input
                            className="dark:text-white text-black dark:bg-[#3e4652] bg-white"
                            name="color"
                            type="text"
                            onChange={handleChange}
                            value={form.color}
                          />
                        </div>
                        <div className="px-2 flex flex-col w-4/6">
                          <label htmlFor="">Transmision</label>
                          <select
                            name="transmision"
                            id=""
                            className="w-full dark:text-white text-black dark:bg-[#3e4652] bg-white"
                            onChange={handleChange}
                            value={form.transmision}
                          >
                            <option disabled value="">
                              Seleccione
                            </option>
                            <option value="1">Manual</option>
                            <option value="2">Automatica</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex flex-row mt-3">
                        <div className="px-2 flex flex-col w-4/6">
                          <label htmlFor="">Tipo Vehiculo</label>
                          <select
                            className="dark:text-white text-black dark:bg-[#3e4652] bg-white"
                            name="tipoVehiculo"
                            id=""
                            onChange={handleChange}
                            value={form.tipoVehiculo}
                          >
                            <option value="1">Camioneta</option>
                            <option value="2">Auto</option>
                            <option value="3">Minivan</option>
                          </select>
                        </div>
                        <div className="px-2 flex flex-col w-4/6">
                          <label htmlFor="">Marca</label>
                          <select
                            className="dark:text-white text-black dark:bg-[#3e4652] bg-white"
                            name="marca"
                            id=""
                            onChange={handleChange}
                            value={form.marca}
                          >
                            <option value="1">Toyota</option>
                            <option value="2">Nisan</option>
                            <option value="3">Hyundai</option>
                          </select>
                        </div>
                        <div className="px-2 flex flex-col w-4/6">
                          <label htmlFor="">Costo</label>
                          <input
                            className="dark:text-white text-black dark:bg-[#3e4652] bg-white"
                            name="costoAlquiler"
                            type="number"
                            onChange={handleChange}
                            value={form.costoAlquiler}
                          />
                        </div>
                      </div>

                      <div className="flex flex-row mt-3">
                        <div className="px-2 flex flex-col w-4/6">
                          <label htmlFor="">Combustible</label>
                          <select
                            className="dark:text-white text-black dark:bg-[#3e4652] bg-white"
                            name="combustible"
                            id=""
                            multiple
                            onChange={handleChange}
                            value={form.combustible}
                          >
                            <option value="1">Gasolina</option>
                            <option value="2">Petroleo</option>
                            <option value="3">GLP</option>
                            <option value="4">GNV</option>
                          </select>
                        </div>
                        <div className="px-2 flex flex-row mt-3">
                          <label htmlFor="">Activo</label>
                          <input
                            name="estado"
                            type="checkbox"
                            className="ms-2"
                            onChange={handleCheckboxChange}
                            value={form.estado}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <hr className="bg-[#6a7280]" />
              <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 dark:bg-[#111827] bg-white">
                <button
                  type="submit"
                  form="vehiculosForm"
                  className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                >
                  Guardar
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-500 sm:mt-0 sm:w-auto"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Cabecera.propTypes = {
  action: PropTypes.string,
};

export default Cabecera;
