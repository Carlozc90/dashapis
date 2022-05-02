import Image from "next/image";
import { useEffect, useState } from "react";
import { monedas } from "../../data/base";
import { axiosCryptoConsulta } from "../../helpers/Axios";
import useApis from "../../hooks/useApis";
import useCryptoMoneda from "../../hooks/useCryptoMoneda";
import CryptoResultado from "./CryptoResultado";

const Crypto = () => {
  const { setMonedas, cryptoRes } = useApis();

  const [respuestaMonedas, setRespuestaMonedas] = useState("");
  const [criptos, setCriptos] = useState([]);

  const [moneda, SelectMonedas] = useCryptoMoneda("Elige tu Moneda", monedas);
  const [criptomoneda, SelectMCriptomoneda] = useCryptoMoneda(
    "Elige tu Criptomoneda",
    criptos
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([moneda, criptomoneda].includes("")) {
      console.log("error vacio");
      return;
    }

    setMonedas({
      moneda,
      criptomoneda,
    });
  };

  useEffect(() => {
    axiosCryptoConsulta(setRespuestaMonedas, setCriptos);
  }, []);

  return (
    <div className="Cryto">
      <h1>Cotiza Criptomonedas al Instante</h1>
      <div className="Cryto__container">
        <div className="Cryto__container--img">
          <Image
            src={"/assets/bgCrypto1.png"}
            width={600 / 1.5}
            height={300 / 1.5}
            alt="imagen crypto"
          />
        </div>

        <div className="Cryto__container--info">
          <form onSubmit={handleSubmit}>
            <SelectMonedas />
            <SelectMCriptomoneda />
            <input
              className="Cryto__boton"
              type="submit"
              value={"Cotizar"}
            ></input>
          </form>
        </div>
      </div>
      {cryptoRes.PRICE && <CryptoResultado cryptoRes={cryptoRes} />}
    </div>
  );
};

export default Crypto;
