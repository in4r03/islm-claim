import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/GitHubLink";
import { HaqqNetwork } from "@thirdweb-dev/chains";
import {  useContract } from "@thirdweb-dev/react";

function App() {
  return (
    <ThirdwebProvider 
      activeChain={ HaqqNetwork } 
      clientId="8fd234f018c68e4b3cf9092ef57ee4d0" // You can get a client id from dashboard settings
    ></ThirdwebProvider>
    )
  }
  
  function Component() {
    const { contract, isLoading } = useContract("0xb0dc05176989Fb2ba968be906089f229DBBBF821");
  }
// This is the chain your dApp will work on.


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={HaqqNetwork}>
      <Head>
        <title>GREEN PASS MINT</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="GREEN PASS"
        />
        <meta
          name="keywords"
          content="GREEN PASS"
        />
      </Head>
      <Component {...pageProps} />
      <ThirdwebGuideFooter />
    </ThirdwebProvider>
  );
}

export default MyApp;
