import { createContext, useEffect, useState } from "react";
import { apis as obj } from "../data/apis";
import {
  axiosClimaResp,
  axiosCrytoResp,
  axiosNoticiaResp,
} from "../helpers/Axios";

const ApisContext = createContext();

const ApisProvider = ({ children }) => {
  const [apis, setApis] = useState("");

  // Cryptomonedas
  const [monedas, setMonedas] = useState({});
  const [cryptoRes, setCryptoRes] = useState({});

  // Clima
  const [climaRes, setClimaRes] = useState({});

  // Noticias
  const [noticiaRes, setNoticiaRes] = useState({});

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
        handleClima,
        handleNoticia,
      }}
    >
      {children}
    </ApisContext.Provider>
  );
};

export { ApisProvider };

export default ApisContext;
