import Head from 'next/head'
import React from 'react'

export default function DefaultHeader({ pageTitle }) {
  return (
    <Head>
      <title>{pageTitle} | Controle Financeiro</title>
      <meta name="description" content="Controle suas despesas" />
      <link rel="icon" href="/fav-2.ico" />
    </Head>
  )
}
