import { useRouter } from 'next/router';
import { Headline } from 'src/components/atoms/Headline';
import { Container, Main } from 'src/styles/Home';
import Head from 'next/head';
import styles from './styles.module.scss';

const CategoryPage = () => {
  const router = useRouter();
  const name = typeof router.query.name === 'string' ? router.query.name : '';

  return (
    <Container>
      <Head>
        <title>{name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <div className={styles.category_page_container}>
          <Headline label={`${name}一覧`} headlineTypes="middle" />
        </div>
      </Main>
    </Container>
  );
};

export default CategoryPage;
