import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useState } from "react";

import Acciones from "./Acciones";



const Tabla = () => {

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

    const [colDefs, setColDefs] = useState([
      {
        field: "Codigo",
      },
      {
        field: "Placa",
      },
      {
        field: "Asientos",
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




}

export default Tabla