import React from "react";
import "./App.css";
import CuadradoPadre from "./components/CuadradoPadre";

function App() {
  // const [contador, setContador] = useState(0);
  // const [deshabilitarResta, setDeshabilitarResta] = useState(true);
  // const [deshabilitarSuma, setDeshabilitarSuma] = useState(false);

  // // Use effect => Hace ejecutar la función que se pasa por primer parámetro
  // // Cada vez que alguno de los estados que estan en el array de dependencias cambia.
  // useEffect(() => {
  //   if (contador >= 10) {
  //     setDeshabilitarResta(false);
  //     setDeshabilitarSuma(true);
  //   }
  //   if (contador <= 9) setDeshabilitarSuma(false);

  //   if (contador <= 0) setDeshabilitarResta(true);
  //   else setDeshabilitarResta(false);
  // }, [contador]);

  // function manejadorDeClick(cb) {
  //   //  10 < contador > 0
  //   setContador(cb());
  //}

  return (
    <div className="App">
      <header className="App-header">
        <CuadradoPadre />
      </header>
    </div>
  );
}

// function Componente(props) {
//   const nombre = props.nombre;
//   const estaDesabilitado = props.disabled;

//   return (
//     <div
//       onClick={estaDesabilitado ? null : props.onClick}
//       style={{
//         marginRight: "8px",
//         padding: "4px",
//         backgroundColor: estaDesabilitado ? "gray" : "#e6255b",
//         cursor: estaDesabilitado ? "default" : "pointer",
//         color: "white",
//         userSelect: "none",
//       }}
//     >
//       {nombre}
//     </div>
//   );
// }

export default App;
