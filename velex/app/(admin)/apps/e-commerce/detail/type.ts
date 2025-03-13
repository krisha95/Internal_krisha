interface Product {
  id: string;
  name: string;
  price: number;
  discountedPrice: number;
  discountPercentage: number;
  images: string[];
  colors: string[];
  sizes: string[];
  reviews: {
    image: string;
    name: string;
    rating: number;
    review: string;
    date: string;
    comment: string;
  }[];
  details: {
    label: string;
    value: string;
  }[];
  offers: string[];
  stock: boolean;
  freeDelivery: boolean;
  saleCode: string;
  rating: number;
  reviewCount: number;
}



