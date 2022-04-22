import axios from "axios";

export const axiosCryptoConsulta = async (setRespuestaMonedas, setCriptos) => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};

export const axiosCrytoResp = async (setCryptoRes, monedas) => {
  try {
    setCryptoRes({});
    const { moneda, criptomoneda } = monedas;

    const url = `
    https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
    const { data } = await axios(url);
    setCryptoRes(data.DISPLAY[criptomoneda][moneda]);
  } catch (error) {
    console.log(error);
  }
};

export const axiosClimaResp = async (pais, ciudad, setClimaRes) => {
  try {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${process.env.NEXT_PUBLIC_CLIMA}`;

    const { data } = await axios(url);

    const { lat, lon } = data[0];

    const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_CLIMA}`;

    const { data: clima } = await axios(urlClima);
    setClimaRes(clima);
  } catch (error) {
    console.log(error.response);
  }
};

// const consultarClima = async (datos) => {
//   try {
//     const { ciudad, pais } = datos;

//     const appId = import.meta.env.VITE_API_KEY;

//     const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`;

//     setLoandig(true);
//     const { data } = await axios(url);
//     const { lat, lon } = data[0];

//     const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;

//     const { data: clima } = await axios(urlClima);
//     setLoandig(false);
//     setResultado(clima);
//   } catch (error) {
//     console.log(error);
//   }
// };
