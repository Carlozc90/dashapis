import Clima from "../src/components/Clima";
import Crypto from "../src/components/Crypto";
import DashBoard from "../src/components/DashBoard";
import Homee from "../src/components/Homee";
import Noticias from "../src/components/Noticias";
import useApis from "../src/hooks/useApis";
import Layout from "../src/layouts/Layout";

export default function Home() {
  const { apis } = useApis();
  return (
    <Layout>
      {
        {
          home: <Homee />,
          dash: <DashBoard />,
          cryto: <Crypto />,
          clima: <Clima />,
          noticia: <Noticias />,
        }[apis]
      }
    </Layout>
  );
}
