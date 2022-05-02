import DashBoard from "../src/components/dashboard/DashBoard";
import Homee from "../src/components/home/Homee";
import Noticias from "../src/components/dashboard/Noticias";
import useApis from "../src/hooks/useApis";
import Layout from "../src/layouts/Layout";
import Bebidas from "../src/components/dashboard/Bebidas";
import Clima from "../src/components/dashboard/Clima";
import Crypto from "../src/components/dashboard/Crypto";
import Pokedex from "../src/components/dashboard/Pokedex";
import Info from "../src/components/info/Info";
import Mailchimps from "../src/components/mailchimp";

export default function Home() {
  const { apis } = useApis();

  return (
    <Layout>
      {
        {
          home: <Homee />,
          dash: <DashBoard />,
          info: <Info />,
          cryto: <Crypto />,
          clima: <Clima />,
          noticia: <Noticias />,
          bebida: <Bebidas />,
          pokemon: <Pokedex />,
          mail: <Mailchimps />,
        }[apis]
      }
    </Layout>
  );
}
