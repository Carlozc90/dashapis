import Crypto from "../src/components/Crypto";
import DashBoard from "../src/components/DashBoard";
import useApis from "../src/hooks/useApis";
import Layout from "../src/layouts/Layout";

export default function Home() {
  const { apis } = useApis();
  return (
    <>
      <Layout>{apis === 1 ? <Crypto /> : <DashBoard />}</Layout>
    </>
  );
}
