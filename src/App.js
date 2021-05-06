import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [contador, setContador] = useState(0);
  const [deshabilitarResta, setDeshabilitarResta] = useState(true);
  const [deshabilitarSuma, setDeshabilitarSuma] = useState(false);

  // Use effect => Hace ejecutar la función que se pasa por primer parámetro
  // Cada vez que alguno de los estados que estan en el array de dependencias cambia.
  useEffect(() => {
    if (contador >= 10) {
      setDeshabilitarResta(false);
      setDeshabilitarSuma(true);
    } else {
      setDeshabilitarSuma(false);
    }

    if (contador <= 0) {
      setDeshabilitarResta(true);
    } else {
      setDeshabilitarResta(false);
    }
  }, [contador]);

  function manejadorDeClick(indicador) {
    //  10 < contador > 0
    if (indicador === "suma") setContador(() => contador + 1);
    if (indicador === "resta") setContador(() => contador - 1);
  }

  function manejadorDeOtroClick() {
    setContador(20);
  }

  function manejadorDeOtroClickDos() {
    setContador(-20);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sumador</h1>
        <h2>{contador}</h2>
        <div style={{ display: "flex", marginBottom: "10px" }}>
          <Componente
            nombre="Restar"
            onClick={() => manejadorDeClick("resta")}
            disabled={deshabilitarResta}
          />
          <Componente
            nombre="Sumar"
            onClick={() => manejadorDeClick("suma")}
            disabled={deshabilitarSuma}
          />
        </div>
        <Componente nombre="Otra cosa" onClick={() => manejadorDeOtroClick()} />
        <Componente
          nombre="Otra cosa dos"
          onClick={() => manejadorDeOtroClickDos()}
        />
      </header>
    </div>
  );
}

function Componente(props) {
  const nombre = props.nombre;
  const estaDesabilitado = props.disabled;

  return (
    <div
      onClick={estaDesabilitado ? null : props.onClick}
      style={{
        marginRight: "8px",
        padding: "4px",
        backgroundColor: estaDesabilitado ? "gray" : "#e6255b",
        color: "white",
        userSelect: "none",
      }}
    >
      {nombre}
    </div>
  );
}

export default App;
