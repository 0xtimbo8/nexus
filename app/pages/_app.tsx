import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { withTheme } from "@emotion/react";

const alchemyId = process.env.ALCHEMY_ID;

const client = createClient(
  getDefaultClient({
    appName: "Your App Name",
    alchemyId,
  })
);

/* Theming */
const theme = extendTheme({
  styles: {
    global: {
      "*": {
        fontFamily: "Bai Jamjuree",
        color: "white",
      },
      a: {
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <ChakraProvider theme={theme}>
          <Head>
            <title>Nexus: Metaverse Marketplace</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </ChakraProvider>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
