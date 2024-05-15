import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useState } from "react";

import Acciones from "./Acciones";



const Tabla = ({ rowData }) => {

  const [colDefs, setColDefs] = useState([
    {
      field: "Codigo",
      maxWidth: 80,
    },
    {
      field: "Placa",
      maxWidth: 120,
    },
    {
      field: "Asientos",
      maxWidth: 120,
    },
    {
      field: "Fabricacion",
    },
    {
      field: "Color",
    },
    {
      field: "Transmision",
    },
    {
      field: "Marca",
    },
    {
      field: "Tipo",
    },
    {
      field: "Costo",
    },
    {
      field: "Acciones",
      cellRenderer: Acciones,
    },
  ]);

  return (
    <>
      <div
        className="ag-theme-quartz-auto-dark" // applying the grid theme
        style={{ height: 500 }}
      >
        <AgGridReact rowData={rowData} columnDefs={colDefs} />
      </div>
    </>
  );
};

export default Tabla