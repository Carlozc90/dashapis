import Image from "next/image";
import { pokemonTypeColor } from "../data/base";
const PokedexCard = ({ items }) => {
  console.log(items);
  const bgCarta = (tipo, count) => {
    let res = [];
    if (items.types.length > 1) {
      res = pokemonTypeColor.filter(
        (poke) => poke.id === items.types[0].type.name
      );
      const res2 = pokemonTypeColor.filter(
        (poke) => poke.id === items.types[1].type.name
      );
      res = [...res, res2[0]];
    } else {
      res = pokemonTypeColor.filter(
        (poke) => poke.id === items.types[0].type.name
      );
    }
    return tipo === "bg"
      ? res[0].bg
      : items.types.length > 1
      ? res[count].color
      : res[0].color;
  };

  return (
    <div className="PokeCard">
      <div
        className="PokeCard__img"
        style={{
          backgroundImage: `url(${bgCarta("bg")})`,
        }}
      >
        <Image
          src={items.sprites.front_default ? items.sprites.front_default : "/"}
          width={500 / 4}
          height={500 / 4}
          // alt={`imagen de ${items.species.name}`}
          alt={`imagen de `}
        />
      </div>

      <p className="PokeCard__ID">#{items.id}</p>
      <h2 className="PokeCard__titulo">{items.species.name}</h2>
      <div className="PokeCard__statusGrid">
        {items.stats.map((staff, i) => (
          <div key={i}>
            <p>
              {staff.stat.name} <span>{staff.base_stat}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="PokeCard__type">
        {items.types.map((tipo, i) => (
          <p
            style={{ backgroundColor: bgCarta("", i) }}
            className="PokeCard__typeBoton"
            key={i}
          >
            {tipo.type.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PokedexCard;
