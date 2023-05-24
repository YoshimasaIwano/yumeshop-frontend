import { useQuery } from 'react-query';
import { Category, fetchCategories } from './fetcher';
import { SimpleCard } from '../../molecules/SimpleCard';
import { Headline } from '../../atoms/Headline';
import styles from './styles.module.scss';

export function Top() {
  const { data, isLoading, error } = useQuery<Category[], Error>(
    'categories',
    fetchCategories,
  );

  if (isLoading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>An error has occurred: {error.message}</>;
  }

  return (
    <section className={styles.category_container}>
      <Headline label="カテゴリ" headlineTypes="middle"/>
      <div className={styles.category_card_container}>
        {data?.map((category) => (
          <SimpleCard
            key={category.id}
            name={category.name}
            thumbnail={category.thumbnail}
          />
        ))}
      </div>
    </section>
  );
}
