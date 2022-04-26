import Image from "next/image";
import { useEffect, useState } from "react";
import { axiosPokemonesRes, axiosPokemonRes } from "../helpers/Axios";
import PokedexCard from "./PokedexCard";
const Pokedex = () => {
  const [pokemon, setPokemon] = useState("");
  const [pagina, setPagina] = useState(1);
  const [total, setTotal] = useState(Math.ceil(649 / 25));

  //Pokemones
  const [pokemonesRes, setPokemonesRes] = useState({});

  useEffect(() => {
    axiosPokemonesRes(setPokemonesRes, 25, 0, setTotal);
  }, []);

  const handlePokemon = (pokemon) => {
    const res = pokemon.trim().toLowerCase();
    axiosPokemonRes(res, setPokemonesRes);
  };

  const handleLeft = () => {
    if (pagina <= 1) return;
    setPagina(pagina - 1);
    let res = axiosPokemonesRes(
      setPokemonesRes,
      25,
      25 * pagina - 50,
      setTotal
    );
    console.log("click izquierdo");
  };

  const handleRight = () => {
    setPagina(pagina + 1);
    axiosPokemonesRes(setPokemonesRes, 25, 25 * pagina, setTotal);
    console.log("click derecho");
  };

  return (
    <div className="Poke">
      <div className="Poke__container">
        <div className="Poke__imagen">
          <Image
            src={
              "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
            }
            width={600 / 3}
            height={300 / 3}
            alt="Imagen logo pokemon"
          />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (Object.keys(pokemon).length > 0) {
              handlePokemon(pokemon);
            }
          }}
          className="Poke__Form"
        >
          <input
            type={"text"}
            id="ciudad"
            name="ciudad"
            onChange={(e) => setPokemon(e.target.value)}
            value={pokemon}
            placeholder="Buscar Pokemon.."
            className="Poke__Input"
          />
          <input className="Poke__boton" type="submit" value={"Buscar"}></input>
          <div className="Poke__Paginacion">
            <button onClick={handleLeft}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-big-left"
                width="52"
                height="52"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z" />
              </svg>
            </button>
            <p>
              {pagina} de {total}
            </p>
            <button onClick={handleRight}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-big-right"
                width="52"
                height="52"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z" />
              </svg>
            </button>
          </div>
        </form>

        <div className="Poke__Container--Grid">
          {pokemonesRes.length &&
            pokemonesRes.map((items, i) => (
              <PokedexCard items={items} key={i} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
