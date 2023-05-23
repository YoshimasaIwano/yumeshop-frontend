import type { NextPage } from 'next';
import Head from 'next/head';

import { Container, Main } from '../styles/Home';
import { Top } from '../components/templates/top';

const Home: NextPage = () => (
  <Container>
    <Head>
      <title>Yumeshop</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Main>
      <Top />
    </Main>
  </Container>
);

export default Home;
