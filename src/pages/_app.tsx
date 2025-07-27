import AntDesignConfiguration from "@/components/AntDesignConfiguration";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AntDesignConfiguration>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AntDesignConfiguration>
  );
}
