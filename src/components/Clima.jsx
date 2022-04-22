import Image from "next/image";
import { useState } from "react";
import { pais } from "../data/base";
import useApis from "../hooks/useApis";

const Clima = () => {
  const { handleClima, climaRes } = useApis();
  const [paistate, setPais] = useState("");
  const [ciudadstate, setCiudadState] = useState("");

  const { name, main } = climaRes;
  const kelvin = 273.15;
  console.log(name);

  return (
    <div className="Clima">
      <div className="Clima__container">
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (
                Object.keys(paistate).length > 0 &&
                Object.keys(ciudadstate).length > 0
              ) {
                handleClima(paistate, ciudadstate);
              }
            }}
          >
            <div>
              <label className="Clima__Label">Elije un Pais</label>
              <select
                className="Clima__Select"
                onChange={(e) => setPais(e.target.value)}
              >
                {console.log(pais)}
                <option>--Seleccion--</option>
                {pais.map((items, i) => (
                  <option key={i} value={items.id}>
                    {items.nombre}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="Clima__Label" htmlFor="ciudad">
                Ciudad
              </label>
              <input
                type={"text"}
                id="ciudad"
                name="ciudad"
                onChange={(e) => setCiudadState(e.target.value)}
                value={ciudadstate}
                placeholder="Ciudad"
                className="Cryto__Select"
              />
            </div>
            <input
              className="Clima__boton"
              type="submit"
              value={"Consultar Clima"}
            ></input>
          </form>
        </div>
        <div>
          {name && (
            <>
              <h2>El Clima de {name} </h2>
              <p className="Clima__Parrafo">
                Temperatura Actual: {parseInt(main.temp - kelvin)}{" "}
                <span>&#x2103;</span>
              </p>
              <p className="Clima__Parrafo">
                Temperatura Minima: {parseInt(main.temp_min - kelvin)}{" "}
                <span>&#x2103;</span>
              </p>
              <p className="Clima__Parrafo">
                Temperatura Maxima: {parseInt(main.temp_max - kelvin)}{" "}
                <span>&#x2103;</span>
              </p>
            </>
          )}
        </div>
      </div>
      <div className="Clima__img">
        <Image
          src={"/assets/bgClima.png"}
          width={300}
          height={300}
          alt="imagen clima"
        />
      </div>
    </div>
  );
};

export default Clima;
