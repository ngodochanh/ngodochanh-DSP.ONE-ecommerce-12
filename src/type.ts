export type ProductType = {
  id: string;
  image: string;
  title: string;
  price: number;
  originalPrice: number;
  gender: string[];
  color: string[];
  size: string[];
  slug: string;
  description: string;
  total_reviews: number;
  rating: number;
  category: string;
  isTrending: boolean;
};

export type CartType = {
  id: string;
  quantity: number;
};
