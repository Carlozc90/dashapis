import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Apis</title>
        <meta name="description" content="Dashbord de Apis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="containerMain">
        <aside className="aside">
          <SideBar />
        </aside>

        <main className="main">{children}</main>
      </div>
    </>
  );
};

export default Layout;
