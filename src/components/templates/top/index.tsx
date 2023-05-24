import Link from 'next/link';
import { SimpleCard } from 'src/components/molecules/SimpleCard';
import { Headline } from 'src/components/atoms/Headline';
import { useCategories, Category } from 'src/hooks/useCategories';
import styles from './styles.module.scss';

export function Top() {
  const { data, isLoading, error } = useCategories();

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
          <Link href={`/list/${category.id}`} key={category.id}>
            <SimpleCard name={category.name} thumbnail={category.thumbnail} />
          </Link>
        ))}
      </div>
    </section>
  );
}
