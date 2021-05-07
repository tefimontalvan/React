import colores from "../colores";
import { useState, useEffect } from "react";

export default function Cuadrado(props) {
  let [valorRandom, setValorRandom] = useState(
    Math.floor(Math.random() * (9 - 0 + 1) + 0)
  );

  while (props.valorPadre === valorRandom)
    valorRandom = Math.floor(Math.random() * (9 - 0 + 1) + 0);

  useEffect(() => {
    setValorRandom(4);
  }, []);

  return (
    <div
      style={{
        backgroundColor: colores[valorRandom],
        width: "150px",
        height: "150px",
      }}
    >
      {valorRandom}
    </div>
  );
}
