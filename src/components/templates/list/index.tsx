import { useRouter } from 'next/router';
import { Headline } from 'src/components/atoms/Headline';
import { useCategories } from 'src/hooks/useCategories';
import styles from './styles.module.scss';

export function List() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, error } = useCategories();

  if (isLoading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>An error has occurred: {error.message}</>;
  }

  const selectedCategory = data?.find((category) => category.id === id);
  if (!selectedCategory) {
    //  TODO: 404ページを作成する
    return <>Not Found</>;
  }

  return (
    <div className={styles.category_page_container}>
      <Headline
        label={`${selectedCategory.name}一覧`}
        headlineTypes="middle"
      />
    </div>
  );
}
