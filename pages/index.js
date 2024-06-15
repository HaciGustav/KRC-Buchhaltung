import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>KRC Buchhaltung</title>
        <meta name="description" content="Buchaltung" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* <main style={{ padding: "1.5rem" }}></main> */}
      <Footer />
    </>
  );
}
