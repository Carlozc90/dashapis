import { ApisProvider } from "../src/context/ApisProvider";
import "../styles/globals.css";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <ApisProvider>
      <Component {...pageProps} />
    </ApisProvider>
  );
}

export default MyApp;
