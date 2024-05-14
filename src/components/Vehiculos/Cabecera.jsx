
const Cabecera = () => {
  return (
    <>
      <div>
        <label htmlFor="">Codigo</label>
        <input type="text" />
      </div>

      <div>
        <label htmlFor="">Placa</label>
        <input type="text" name="" id="" />
      </div>

      <div>
        <label htmlFor="">Asientos</label>
        <input type="number" />
      </div>

      <div>
        <label htmlFor="">Fabricacion</label>
        <input type="number" />
      </div>

      <div>
        <label htmlFor="">Color</label>
        <input type="text" />
      </div>

      <div>
        <label htmlFor="">Transmision</label>
        <select name="" id="" className="">
          <option disabled value="">
            Seleccione
          </option>
          <option value="1">Manual</option>
          <option value="2">Automatica</option>
        </select>
      </div>

      <div>
        <label htmlFor="">Tipo Vehiculo</label>
        <select name="" id="">
          <option value="">Camioneta</option>
          <option value="">Auto</option>
          <option value="">Minivan</option>
        </select>
      </div>

      <div>
        <label htmlFor="">Marca</label>
        <select name="" id="">
          <option value="">Toyota</option>
          <option value="">Nisan</option>
          <option value="">Hyundai</option>
        </select>
      </div>

      <div>
        <label htmlFor="">Costo</label>
        <input type="number" />
      </div>

      <div>
        <label htmlFor="">Activo</label>
        <input type="checkbox" />
      </div>

      <div>
        <label htmlFor="">Combustible</label>
        <select name="" id="" multiple>
          <option value="">Gasolina</option>
          <option value="">Petroleo</option>
          <option value="">GLP</option>
          <option value="">GNV</option>
        </select>
      </div>
    </>
  );
}

export default Cabecera