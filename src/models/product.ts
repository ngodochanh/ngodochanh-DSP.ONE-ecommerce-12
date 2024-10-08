export type IProduct = {
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

export type IProductGallery = {
  id: IProduct['id'];
  image: IProduct['image'];
};
