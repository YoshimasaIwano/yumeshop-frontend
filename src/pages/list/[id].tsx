import { Container, Main } from 'src/styles/Home';
import Head from 'next/head';
import { List } from 'src/components/templates/list';

const CategoryPage = () => (
  <Container>
    <Head>
      <title>List</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Main>
      <List />
    </Main>
  </Container>
);

export default CategoryPage;
