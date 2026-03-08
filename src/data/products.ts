export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  specs?: string[];
  inStock: boolean;
  featured?: boolean;
  bestSeller?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export const categories: Category[] = [
  { id: "electronics", name: "Electronics", icon: "📱", count: 156 },
  { id: "fashion", name: "Fashion", icon: "👗", count: 243 },
  { id: "home", name: "Home & Living", icon: "🏠", count: 189 },
  { id: "beauty", name: "Beauty", icon: "✨", count: 97 },
  { id: "accessories", name: "Accessories", icon: "⌚", count: 134 },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    category: "electronics",
    rating: 4.8,
    reviews: 234,
    description: "Experience crystal-clear audio with our premium wireless headphones featuring active noise cancellation and 30-hour battery life.",
    specs: ["Active Noise Cancellation", "30-hour battery", "Bluetooth 5.3", "Hi-Res Audio"],
    inStock: true,
    featured: true,
    bestSeller: true,
  },
  {
    id: "2",
    name: "Minimalist Leather Watch",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80",
    category: "accessories",
    rating: 4.9,
    reviews: 178,
    description: "Elegant minimalist watch crafted from genuine Italian leather with a sapphire crystal face.",
    specs: ["Sapphire Crystal", "Italian Leather", "Water Resistant 50m", "Japanese Movement"],
    inStock: true,
    featured: true,
  },
  {
    id: "3",
    name: "Organic Cotton Blazer",
    price: 249.99,
    originalPrice: 329.99,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
    category: "fashion",
    rating: 4.7,
    reviews: 89,
    description: "Sustainably crafted blazer made from 100% organic cotton with a modern slim fit.",
    inStock: true,
    featured: true,
    bestSeller: true,
  },
  {
    id: "4",
    name: "Smart Home Speaker",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=600&q=80",
    category: "electronics",
    rating: 4.6,
    reviews: 312,
    description: "Premium smart speaker with room-filling 360° sound and built-in voice assistant.",
    inStock: true,
    bestSeller: true,
  },
  {
    id: "5",
    name: "Ceramic Vase Set",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&q=80",
    category: "home",
    rating: 4.5,
    reviews: 67,
    description: "Hand-crafted ceramic vase set in earthy tones. Perfect for modern living spaces.",
    inStock: true,
    featured: true,
  },
  {
    id: "6",
    name: "Luxury Skincare Set",
    price: 129.99,
    originalPrice: 179.99,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80",
    category: "beauty",
    rating: 4.8,
    reviews: 156,
    description: "Complete skincare routine with cleanser, serum, moisturizer, and SPF protection.",
    inStock: true,
    bestSeller: true,
  },
  {
    id: "7",
    name: "Canvas Backpack",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
    category: "accessories",
    rating: 4.4,
    reviews: 203,
    description: "Durable waxed canvas backpack with leather accents and laptop compartment.",
    inStock: true,
  },
  {
    id: "8",
    name: "Linen Throw Pillow Set",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1584100936595-c0c4319c9024?w=600&q=80",
    category: "home",
    rating: 4.6,
    reviews: 91,
    description: "Set of 3 premium linen throw pillows in complementary neutral tones.",
    inStock: true,
  },
];

export const testimonials = [
  {
    id: "1",
    name: "Sarah Mitchell",
    avatar: "SM",
    rating: 5,
    text: "Absolutely love shopping at Yfeey Store. The quality of products is outstanding and delivery is always on time!",
    role: "Verified Buyer",
  },
  {
    id: "2",
    name: "James Chen",
    avatar: "JC",
    rating: 5,
    text: "The customer service is top-notch. Had an issue with sizing and they resolved it within hours. Will definitely shop again.",
    role: "Loyal Customer",
  },
  {
    id: "3",
    name: "Amira Hassan",
    avatar: "AH",
    rating: 5,
    text: "Best online store I've found. Great prices, premium quality, and the website is so easy to navigate.",
    role: "Verified Buyer",
  },
];

export const blogPosts = [
  {
    id: "1",
    title: "10 Must-Have Accessories for 2026",
    excerpt: "Discover the trending accessories that are defining style this year.",
    image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=600&q=80",
    author: "Yfeey Editorial",
    date: "March 5, 2026",
    category: "Style Guide",
  },
  {
    id: "2",
    title: "How to Build a Capsule Wardrobe",
    excerpt: "Simplify your closet with these essential pieces that mix and match effortlessly.",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80",
    author: "Yfeey Editorial",
    date: "March 1, 2026",
    category: "Fashion Tips",
  },
  {
    id: "3",
    title: "Smart Home Essentials Guide",
    excerpt: "Transform your living space with these must-have smart home devices.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80",
    author: "Yfeey Editorial",
    date: "Feb 25, 2026",
    category: "Tech",
  },
];
