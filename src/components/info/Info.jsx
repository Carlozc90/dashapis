import NewsletterSubscribe from "../mailchimp/sinback/NewsletterSubscribe";

const Info = () => {
  return (
    <>
      <div className="Info">
        <div className="Info__container">
          <h3>Para mas informacion</h3>
          {[
            {
              id: "Cryto Api",
              url: "https://min-api.cryptocompare.com",
              urlname: "cryptocompare.com",
            },
            {
              id: "Clima Api",
              url: "https://openweathermap.org/api",
              urlname: "openweathermap.org",
            },
            {
              id: "Noticas Api",
              url: "https://newsapi.org",
              urlname: "newsapi.org",
            },
            {
              id: "Bebidas Api",
              url: "https://www.thecocktaildb.com",
              urlname: "thecocktaildb.com",
            },
            {
              id: "Pokemon Api",
              url: "https://pokeapi.co",
              urlname: "pokeapi.co",
            },
          ].map((items, i) => (
            <div className="Info__Link" key={i}>
              <p>{items.id}</p>
              <button className="button-81">
                <a href={items.url} target={"_blank"} rel="noreferrer">
                  {items.urlname}
                </a>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Info;
