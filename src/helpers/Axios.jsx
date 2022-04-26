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

export const axiosNoticiaResp = async (pais, categoria, setNoticiaRes) => {
  try {
    const url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=${process.env.NEXT_PUBLIC_NOTICIA}`;
    const { data } = await axios(url);

    setNoticiaRes(data.articles);
  } catch (error) {
    console.log(error.response);
  }
};

export const axiosBebidaCategoriaRes = async (setCategorias) => {
  try {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
    const { data } = await axios(url);

    setCategorias(data.drinks);
  } catch (error) {
    console.log(error);
  }
};

export const axiosBebidaRes = async (bebida, categoria, setBebidaRes) => {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${bebida}&c=${categoria}`;
    const { data } = await axios(url);
    setBebidaRes(data.drinks);
  } catch (error) {
    console.log(error);
  }
};

export const axiosPokemonesRes = async (
  setPokemonesRes,
  limit = 25,
  offset = 0,
  setTotal
) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const { data } = await axios(url);

    const promesa = data.results.map(async (items) => {
      return await axiosPokemonData(items.url);
    });
    const res = await Promise.all(promesa);

    setPokemonesRes(res);
    setTotal(Math.ceil(data.count / limit));
  } catch (error) {
    console.log(error);
  }
};

export const axiosPokemonData = async (pokemon) => {
  try {
    const url = `${pokemon}`;
    const { data } = await axios(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const axiosPokemonRes = async (pokemon, setPokemonesRes) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const { data } = await axios(url);
    setPokemonesRes([data]);
    return data;
  } catch (error) {
    console.log(error);
  }
};
