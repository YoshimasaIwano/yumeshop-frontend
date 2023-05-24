export interface Category {
  id: number;
  name: string;
  thumbnail: string;
}

export async function fetchCategories(): Promise<Category[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);

  // Check if the request was successful
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  return res.json();
}
