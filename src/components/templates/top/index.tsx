import { useQuery } from 'react-query';
import { Category, fetchCategories } from './fetcher';
import { SimpleCard } from '../../molecules/SimpleCard';

export function Top() {
  const { data, isLoading, error } = useQuery<Category[]>(
    'categories',
    fetchCategories,
  );

  if (isLoading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>An error has occurred: {error}</>;
  }

  return (
    <div>
      {data?.map((category) => (
        <SimpleCard
          key={category.id}
          name={category.name}
          thumbnail={category.thumbnail}
        />
      ))}
    </div>
  );
}
