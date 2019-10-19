import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import DataTable from '../components/DataTable';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <meta name="description" content="CRUD home page" />
    </Head>

    <Header />
    <DataTable />
  </div>
);

export default Home;
