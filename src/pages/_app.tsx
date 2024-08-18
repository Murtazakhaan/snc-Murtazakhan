import { LogsProvider } from "@/context/LogsContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LogsProvider>
      <Component {...pageProps} />;
    </LogsProvider>
  );
}
