import { createContext, useEffect, useState } from "react";
import { apis as obj } from "../data/apis";
import { axiosClimaResp, axiosCrytoResp } from "../helpers/Axios";

const ApisContext = createContext();

const ApisProvider = ({ children }) => {
  const [apis, setApis] = useState("");
  const [monedas, setMonedas] = useState({});

  const [cryptoRes, setCryptoRes] = useState({});
  const [climaRes, setClimaRes] = useState({});

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      axiosCrytoResp(setCryptoRes, monedas);
    }
  }, [monedas]);

  const handleClima = (pais, ciudad) => {
    console.log("click");

    axiosClimaResp(pais, ciudad, setClimaRes);
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
        handleClima,
      }}
    >
      {children}
    </ApisContext.Provider>
  );
};

export { ApisProvider };

export default ApisContext;
