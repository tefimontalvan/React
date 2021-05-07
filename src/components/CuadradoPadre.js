import CuadradoHijo from "./Cuadrado";
import colores from "../colores";
import { useState } from "react";

export default function CuadradoPadre() {
  const [valorRandom] = useState(Math.floor(Math.random() * (9 - 0 + 1) + 0)); // 2
  const [miEstado, setMiEstado] = useState("hola");
  const unaPalabra = "Joaquin";

  const cambiadora = () => {
    setMiEstado("chauuu");
  };

  return (
    <div
      style={{
        backgroundColor: colores[valorRandom],
        width: "300px",
        height: "300px",
      }}
    >
      <CuadradoHijo valorPadre={valorRandom}></CuadradoHijo>
      <button onClick={cambiadora}>Cambiar mi estado</button>
      <p>{miEstado}</p>
      <p>{unaPalabra}</p>
    </div>
  );
}
