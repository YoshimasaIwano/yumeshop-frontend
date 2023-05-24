import { useQuery } from 'react-query';
import Link from 'next/link';
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
      <Headline label="カテゴリ" headlineTypes="middle" />
      <div className={styles.category_card_container}>
        {data?.map((category: Category) => (
          <Link
            href={`/category/${category.id}/${category.name}`}
            key={category.id}
          >
            <SimpleCard name={category.name} thumbnail={category.thumbnail} />
          </Link>
        ))}
      </div>
    </section>
  );
}
