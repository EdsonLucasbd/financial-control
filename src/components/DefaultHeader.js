import Head from "next/head";
import React from "react";

export default function DefaultHeader({ pageTitle }) {
  return (
    <Head>
      <title>{pageTitle} | Controle Financeiro</title>
    </Head>
  );
}
