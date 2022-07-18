import React, { createContext, useState } from "react";

export const DataContext = createContext()

  
  
  const DataProvaider = ({ children }) => {

    const [selectSede, setSelectSede] = useState('Sede 1')

    const [datos, setDatos] = useState({
      cedulaCiudadania: '',
      numeroDocumento: '',
      primerNombre: '',
      segundoNombre: '',
      primerApellido: '',
      segundoApellido: ''
    });
    


    return (
      <DataContext.Provider value={{
        selectSede, setSelectSede, datos, setDatos
      }}>
        { children }
      </DataContext.Provider>
    )
  }
  
  export default DataProvaider