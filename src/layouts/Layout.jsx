import Head from "next/head";
import { useState } from "react";
import Modal from "../components/home/Modal";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Head>
        <title>Apis</title>
        <meta name="description" content="Dashbord de Apis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {modal && <Modal setModal={setModal} modal={modal} />}

      <Header setModal={setModal} modal={modal} />
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
