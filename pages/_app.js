import { LiveStateProvider } from "livestate";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <LiveStateProvider uri="wss://try.livestate.io/socket">
      <Component {...pageProps} />
    </LiveStateProvider>
  );
}

export default MyApp;
