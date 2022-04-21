import { useState } from "react";
const useCryptoMoneda = (labeel, opciones) => {
  const [state, setState] = useState("");

  const SelectMonedas = () => (
    <>
      <label className="Cryto__Label">{labeel}</label>
      <select
        className="Cryto__Select"
        value={state}
        onChange={(e) => setState(e.target.value)}
      >
        <option>--Seleccion--</option>
        {opciones.map((items, i) => (
          <option key={i} value={items.id}>
            {items.nombre}
          </option>
        ))}
      </select>
    </>
  );

  return [state, SelectMonedas];
};

export default useCryptoMoneda;
