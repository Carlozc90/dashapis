import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { noticiasCategoria, noticiasPais } from "../data/base";
import useApis from "../hooks/useApis";

const Noticias = () => {
  const { handleNoticia, noticiaRes } = useApis();
  const [paisState, setPaisState] = useState("");
  const [categoria, setCategoria] = useState("");
  return (
    <div className="Noticia">
      <div className="Noticia__container">
        <h1 className="Noticia__Titulo1">Buscador de Noticias</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (
              Object.keys(paisState).length > 0 &&
              Object.keys(categoria).length > 0
            ) {
              handleNoticia(paisState, categoria);
            }
          }}
          className="Noticias__Selectores"
        >
          <div>
            <label className="Noticia__Label">Elije un Pais</label>
            <select
              className="Clima__Select"
              onChange={(e) => setPaisState(e.target.value)}
            >
              <option>--Seleccion--</option>
              {noticiasPais.map((items, i) => (
                <option key={i} value={items.id}>
                  {items.nombre}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="Noticia__Label">Elije una Categoria</label>
            <select
              className="Clima__Select"
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option>--Seleccion--</option>
              {noticiasCategoria.map((items, i) => (
                <option key={i} value={items.id}>
                  {items.nombre}
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
        <h2 className="Noticia__Titulo2">Ultimas Noticias</h2>
        <div className="Noticias__Container--card">
          {noticiaRes.length &&
            noticiaRes.map((items, i) => (
              <div className="Noticias__Card" key={i}>
                {items.urlToImage && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={items.urlToImage}
                    alt={`imagen de la noticia ${items.title}`}
                    className="Noticias__img"
                  />
                )}

                <div>
                  <p>{items.source.name}</p>
                  <h5>{items.title}</h5>
                  <p>{items.description}</p>
                </div>
                <button className="Noticias_link">
                  <Link href={items.url} width={"100%"}>
                    <a target="_black"> Leer Noticia</a>
                  </Link>
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Noticias;
