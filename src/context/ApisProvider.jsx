import { createContext, useEffect, useState } from "react";
import { axiosCrytoResp } from "../helpers/Axios";

const ApisContext = createContext();
const obj = [
  {
    titulo: "CrytoApi",
    img: "/assets/cripto.avif",
    descripcion: "Api de Cryptomonedas",
  },
];

const ApisProvider = ({ children }) => {
  const [apis, setApis] = useState(1);
  const [monedas, setMonedas] = useState({});
  const [cryptoRes, setCryptoRes] = useState({});

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      axiosCrytoResp(setCryptoRes, monedas);
    }
  }, [monedas]);

  return (
    <ApisContext.Provider value={{ obj, apis, setMonedas, cryptoRes }}>
      {children}
    </ApisContext.Provider>
  );
};

export { ApisProvider };

export default ApisContext;
