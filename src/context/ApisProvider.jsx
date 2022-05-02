import { createContext, useEffect, useState } from "react";
import { apis as obj } from "../data/apis";
import {
  axiosBebidaRes,
  axiosClimaResp,
  axiosCrytoResp,
  axiosNoticiaResp,
} from "../helpers/Axios";

const ApisContext = createContext();

const ApisProvider = ({ children }) => {
  const [apis, setApis] = useState("home");
  const [mensaje, setMensaje] = useState("");

  // Cryptomonedas
  const [monedas, setMonedas] = useState({});
  const [cryptoRes, setCryptoRes] = useState({});

  // Clima
  const [climaRes, setClimaRes] = useState({});

  // Noticias
  const [noticiaRes, setNoticiaRes] = useState({});

  // Bebidas
  const [bebidaRes, setBebidaRes] = useState({});

  // Effect
  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      axiosCrytoResp(setCryptoRes, monedas);
    }
  }, [monedas]);

  // handles
  const handleClima = (pais, ciudad) => {
    axiosClimaResp(pais, ciudad, setClimaRes);
  };

  const handleNoticia = (pais, genero) => {
    axiosNoticiaResp(pais, genero, setNoticiaRes);
  };

  const handleBebida = (bebida, categoria) => {
    axiosBebidaRes(bebida, categoria, setBebidaRes);
  };

  return (
    <ApisContext.Provider
      value={{
        obj,
        apis,
        setApis,
        setMonedas,
        cryptoRes,
        climaRes,
        noticiaRes,
        bebidaRes,
        handleClima,
        handleNoticia,
        handleBebida,
        mensaje,
        setMensaje,
      }}
    >
      {children}
    </ApisContext.Provider>
  );
};

export { ApisProvider };

export default ApisContext;
