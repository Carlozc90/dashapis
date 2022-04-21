import Head from "next/head";
import DashBoard from "../src/components/DashBoard";
import Layout from "../src/layouts/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <DashBoard />
      </Layout>
    </>
  );
}
