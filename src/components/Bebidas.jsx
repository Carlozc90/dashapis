import { useEffect, useState } from "react";
import { axiosBebidaCategoriaRes } from "../helpers/Axios";
import useApis from "../hooks/useApis";
import Image from "next/image";

const Bebidas = () => {
  const { handleBebida, bebidaRes } = useApis();

  const [categorias, setCategorias] = useState("");
  const [categoria, setCategoria] = useState("");
  const [bebida, setBebida] = useState("");

  useEffect(() => {
    axiosBebidaCategoriaRes(setCategorias);
  }, []);

  return (
    <div className="Bebida">
      <div className="Bebida__container">
        <h1>Buscador de Bebidas</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (
              Object.keys(bebida).length > 0 &&
              Object.keys(categoria).length > 0
            ) {
              handleBebida(bebida, categoria);
            }
          }}
          className="Bebida__Selectores"
        >
          <div>
            <label className="Bebida__Label">Elije un Pais</label>
            <input
              type={"text"}
              id="bebida"
              name="bebida"
              onChange={(e) => setBebida(e.target.value)}
              value={bebida}
              placeholder="Ej: Tequila, Vodka, etc"
              className="Bebida__Select"
            />
          </div>
          <div>
            <label className="Bebida__Label">Categoria Bebida</label>
            <select
              className="Bebida__Select"
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option>--Seleccion--</option>
              {categorias &&
                categorias.map((items, i) => (
                  <option key={i} value={items.strCategory}>
                    {items.strCategory}
                  </option>
                ))}
            </select>
          </div>
          <input
            className="Noticias__Boton"
            type="submit"
            value={"Buscar"}
          ></input>
        </form>
        <div className="Bebida__Container--card">
          {bebidaRes.length &&
            bebidaRes.map((items, i) => (
              <div className="Bebida__Card" key={i}>
                {items.strDrinkThumb && (
                  <Image
                    src={items.strDrinkThumb}
                    width={500}
                    height={500}
                    className="Noticias__img"
                    alt={`imagen de la noticia ${items.strDrink}
                    `}
                  />
                )}

                <div>
                  <h5>{items.strDrink}</h5>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Bebidas;
