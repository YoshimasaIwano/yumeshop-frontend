import { useQuery } from 'react-query';

export interface Category {
  id: string;
  name: string;
  thumbnail: string;
}

export async function fetchCategories(): Promise<Category[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);

  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  return res.json();
}

export function useCategories() {
  const { data, isLoading, error } = useQuery<Category[], Error>(
    'categories',
    fetchCategories,
  );

  return {
    data,
    isLoading,
    error,
  };
}
