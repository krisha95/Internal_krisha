import product1 from "@/assets/images/product/p-1.png";
import product2 from "@/assets/images/product/p-2.png";
import product3 from "@/assets/images/product/p-3.png";
import product4 from "@/assets/images/product/p-4.png";
import product5 from "@/assets/images/product/p-5.png";
import product6 from "@/assets/images/product/p-6.png";
import product7 from "@/assets/images/product/p-7.png";
import product8 from "@/assets/images/product/p-8.png";
import product9 from "@/assets/images/product/p-9.png";
import product10 from "@/assets/images/product/p-10.png";
import product11 from "@/assets/images/product/p-11.png";
import product12 from "@/assets/images/product/p-12.png";
import { StaticImageData } from "next/image";

export interface Item {
  id: number;
  name: string;
  image: StaticImageData;
  rating: number;
  reviews: number;
  price: number;
  discount: string;
  wishlist: boolean;
  seller: string;
  productCode: string;
  stock: number;
}

export const products: Item[] = [
  {
    id: 1,
    name: "Men Black Slim Fit T-shirt",
    image: product1,
    rating: 4.5,
    reviews: 55,
    price: 80,
    discount: "30% Off",
    wishlist: false,
    seller: "Seller",
    productCode: "FS16276",
    stock: 46233,
  },
  {
    id: 2,
    name: "Women Red Dress",
    image: product2,
    rating: 4.3,
    reviews: 120,
    price: 150,
    discount: "25% Off",
    wishlist: false,
    seller: "Admin",
    productCode: "HB73029",
    stock: 2739,
  },
  {
    id: 3,
    name: "Black Leather Wallet",
    image: product3,
    rating: 4.0,
    reviews: 75,
    price: 45,
    discount: "15% Off",
    wishlist: false,
    seller: "Admin",
    productCode: "RS19534",
    stock: 1200,
  },
  {
    id: 4,
    name: "Men Grey Jeans",
    image: product4,
    rating: 4.2,
    reviews: 95,
    price: 65,
    discount: "10% Off",
    wishlist: false,
    seller: "Seller",
    productCode: "SG43567",
    stock: 2300,
  },
  {
    id: 5,
    name: "Women White Sneakers",
    image: product5,
    rating: 4.4,
    reviews: 110,
    price: 85,
    discount: "30% Off",
    wishlist: false,
    seller: "Admin",
    productCode: "DJ47261",
    stock: 1520,
  },
  {
    id: 6,
    name: "Sporty Backpack",
    image: product6,
    rating: 4.2,
    reviews: 60,
    price: 45,
    discount: "25% Off",
    wishlist: false,
    seller: "Seller",
    productCode: "WH37284",
    stock: 5240,
  },
  {
    id: 7,
    name: "Leather Messenger Bag",
    image: product7,
    rating: 4.6,
    reviews: 90,
    price: 120,
    discount: "20% Off",
    wishlist: false,
    seller: "Admin",
    productCode: "SW68342",
    stock: 8420,
  },
  {
    id: 8,
    name: "Men Casual Watch",
    image: product8,
    rating: 4.3,
    reviews: 80,
    price: 55,
    discount: "10% Off",
    wishlist: false,
    seller: "Seller",
    productCode: "LW98347",
    stock: 3240,
  },
  {
    id: 9,
    name: "Stylish Sunglasses",
    image: product9,
    rating: 4.4,
    reviews: 70,
    price: 40,
    discount: "5% Off",
    wishlist: false,
    seller: "Admin",
    productCode: "GN24319",
    stock: 120,
  },
  {
    id: 10,
    name: "Portable Bluetooth Speaker",
    image: product10,
    rating: 4.5,
    reviews: 50,
    price: 75,
    discount: "30% Off",
    wishlist: false,
    seller: "Seller",
    productCode: "AC81234",
    stock: 820,
  },
  {
    id: 11,
    name: "Wireless Headphones",
    image: product11,
    rating: 4.7,
    reviews: 125,
    price: 120,
    discount: "15% Off",
    wishlist: false,
    seller: "Admin",
    productCode: "BS91827",
    stock: 4120,
  },
  {
    id: 12,
    name: "Smart Fitness Tracker",
    image: product12,
    rating: 4.6,
    reviews: 150,
    price: 99,
    discount: "10% Off",
    wishlist: false,
    seller: "Seller",
    productCode: "FT61429",
    stock: 6300,
  },
];
