import Image from "next/image";
const CryptoResultado = ({ cryptoRes }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    cryptoRes;
  return (
    <div className="Cryto__Container--Result">
      <div>
        <Image
          src={`https://cryptocompare.com/${IMAGEURL}`}
          alt="imagen crypto"
          width={150}
          height={150}
        />
      </div>
      <div>
        <p className="Cryto__Result--p">
          El Precio es de: <span>{PRICE}</span>
        </p>
        <p className="Cryto__Result--p">
          El Precio mas Alto del Dia: <span>{HIGHDAY}</span>
        </p>
        <p className="Cryto__Result--p">
          El Precio mas Bajo del Dia: <span>{LOWDAY}</span>
        </p>
        <p className="Cryto__Result--p">
          Cambio en las ultimas 24H: <span>{CHANGEPCT24HOUR}</span>
        </p>
        <p className="Cryto__Result--p">
          La ultima update: <span>{LASTUPDATE}</span>
        </p>
      </div>
    </div>
  );
};

export default CryptoResultado;
