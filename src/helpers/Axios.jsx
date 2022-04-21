import axios from "axios";

export const axiosCryptoConsulta = async (setRespuestaMonedas, setCriptos) => {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
  const { data } = await axios(url);
  setRespuestaMonedas(data.Data);

  const arrayCriptos = data.Data.map((cripto) => {
    const objeto = {
      id: cripto.CoinInfo.Name,
      nombre: cripto.CoinInfo.FullName,
    };
    return objeto;
  });
  setCriptos(arrayCriptos);
};

export const axiosCrytoResp = async (setCryptoRes, monedas) => {
  setCryptoRes({});
  const { moneda, criptomoneda } = monedas;

  const url = `
    https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
  const { data } = await axios(url);
  setCryptoRes(data.DISPLAY[criptomoneda][moneda]);
};
