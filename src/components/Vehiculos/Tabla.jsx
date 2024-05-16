import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import Acciones from "./Acciones";



const Tabla = ({ rowData }) => {

  const [gridApi, setGridApi]=useState(null)
  const [gridColumnApi, setGridColumnApi]=useState(null)

  const onGridReady=(params)=> {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  }

  const applyFilter=(event)=>{
    const inputValue=event.target.value;
    if (gridApi){

      const filterModel = {
        Codigo: {
          filterType: "text",
          type: "contains",
          filter: inputValue,
        },
        Placa: {
          filterType: "text",
          type: "contains",
          filter: inputValue,
        },
        Asientos: {
          filterType: "text",
          type: "contains",
          filter: inputValue,
        },
        Fabricacion: {
          filterType: "text",
          type: "contains",
          filter: inputValue,
        },
        Color: {
          filterType: "text",
          type: "contains",
          filter: inputValue,
        },
        Transmision: {
          filterType: "text",
          type: "contains",
          filter: inputValue,
        },
        Marca: {
          filterType: "text",
          type: "contains",
          filter: inputValue,
        },
        Tipo: {
          filterType: "text",
          type: "contains",
          filter: inputValue,
        },
        Costo: {
          filterType: "text",
          type: "contains",
          filter: inputValue,
        },
      };

      gridApi.setQuickFilter(inputValue)
      // gridApi.setFilterModel(filterModel);
    }
  }

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
      maxWidth: 90,
    },
    {
      field: "Fabricacion",
      maxWidth:120
    },
    {
      field: "Color",
      maxWidth:120
    },
    {
      field: "Transmision",
      maxWidth:120
    },
    {
      field: "Marca",
      maxWidth:120
    },
    {
      field: "Tipo",
      maxWidth:120
    },
    {
      field: "Costo",
      maxWidth:120
    },
    {
      field: "Acciones",
      cellRenderer: Acciones,
      maxWidth:100
    },
  ]);

  const onPaginationChange=(pageNumber)=>{
    if (gridApi) {
    gridApi.paginationGoToPage(pageNumber);
    }
  }

  return (
    <>
      <div className="flex flex-col">
        <div className="relative mb-4">
          <FaSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar..."
            className="pl-10 py-2 pr-4 rounded border border-gray-300 focus:outline-none focus:border-indigo-500 dark:text-white text-black dark:bg-[#3e4652] bg-white"
            onChange={applyFilter}
          />
        </div>
      </div>

      <div
        className="ag-theme-quartz-auto-dark"
        style={{ height: 520 }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          onGridReady={onGridReady}
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={[10, 20, 50, 100]}
          onPaginationChanged={(event) =>
            onPaginationChange(event.api.paginationGetCurrentPage() + 1)
          }
        />
      </div>
    </>
  );
};

export default Tabla