export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tags?: string[];
  featured?: boolean;
  popular?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
}

export const menuCategories: MenuCategory[] = [
  { id: "starters", name: "Starters", description: "Begin your culinary journey" },
  { id: "mains", name: "Main Courses", description: "Hearty and satisfying" },
  { id: "seafood", name: "Seafood", description: "Fresh from the ocean" },
  { id: "grill", name: "From the Grill", description: "Flame-kissed perfection" },
  { id: "desserts", name: "Desserts", description: "Sweet endings" },
  { id: "drinks", name: "Drinks", description: "Refresh and indulge" },
];

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Truffle Burrata",
    description: "Creamy burrata with black truffle, heirloom tomatoes, and aged balsamic.",
    price: 18,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
    category: "starters",
    tags: ["Vegetarian"],
    featured: true,
  },
  {
    id: "2",
    name: "Tuna Tartare",
    description: "Fresh yellowfin tuna with avocado, sesame, and crispy wonton chips.",
    price: 22,
    image: "https://images.unsplash.com/photo-1534256958597-7fe685cbd745?w=600&q=80",
    category: "starters",
    tags: ["Gluten-free"],
    popular: true,
  },
  {
    id: "3",
    name: "Roasted Beet Salad",
    description: "Golden and red beets with goat cheese, walnuts, and citrus vinaigrette.",
    price: 15,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
    category: "starters",
    tags: ["Vegetarian", "Gluten-free"],
  },
  {
    id: "4",
    name: "Pan-Seared Duck Breast",
    description: "Tender duck breast with cherry reduction, roasted root vegetables, and potato purée.",
    price: 38,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
    category: "mains",
    featured: true,
    popular: true,
  },
  {
    id: "5",
    name: "Wild Mushroom Risotto",
    description: "Arborio rice with porcini, shiitake, and truffle oil finished with parmesan.",
    price: 28,
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80",
    category: "mains",
    tags: ["Vegetarian"],
  },
  {
    id: "6",
    name: "Braised Short Ribs",
    description: "12-hour braised short ribs with polenta, gremolata, and natural jus.",
    price: 42,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    category: "mains",
    popular: true,
  },
  {
    id: "7",
    name: "Grilled Salmon",
    description: "Atlantic salmon with lemon-dill sauce, asparagus, and quinoa pilaf.",
    price: 34,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80",
    category: "seafood",
    tags: ["Gluten-free"],
    featured: true,
  },
  {
    id: "8",
    name: "Lobster Linguine",
    description: "Fresh lobster tail with house-made linguine in a light tomato cream sauce.",
    price: 45,
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=80",
    category: "seafood",
    popular: true,
  },
  {
    id: "9",
    name: "Seared Scallops",
    description: "Day-boat scallops with cauliflower purée, pancetta, and brown butter.",
    price: 36,
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&q=80",
    category: "seafood",
    tags: ["Gluten-free"],
  },
  {
    id: "10",
    name: "Prime Ribeye Steak",
    description: "28-day dry-aged ribeye with roasted garlic butter and truffle fries.",
    price: 52,
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80",
    category: "grill",
    featured: true,
    popular: true,
  },
  {
    id: "11",
    name: "Grilled Lamb Chops",
    description: "New Zealand lamb chops with mint chimichurri and roasted vegetables.",
    price: 44,
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=80",
    category: "grill",
    tags: ["Gluten-free"],
  },
  {
    id: "12",
    name: "Chocolate Lava Cake",
    description: "Warm Valrhona chocolate cake with vanilla bean ice cream.",
    price: 14,
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&q=80",
    category: "desserts",
    tags: ["Vegetarian"],
    featured: true,
    popular: true,
  },
  {
    id: "13",
    name: "Crème Brûlée",
    description: "Classic vanilla bean custard with caramelized sugar crust.",
    price: 12,
    image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600&q=80",
    category: "desserts",
    tags: ["Vegetarian", "Gluten-free"],
  },
  {
    id: "14",
    name: "Tiramisu",
    description: "Espresso-soaked ladyfingers with mascarpone cream and cocoa.",
    price: 13,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80",
    category: "desserts",
    tags: ["Vegetarian"],
  },
  {
    id: "15",
    name: "Signature Old Fashioned",
    description: "Bourbon, demerara sugar, Angostura bitters, and smoked orange peel.",
    price: 16,
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80",
    category: "drinks",
  },
  {
    id: "16",
    name: "Espresso Martini",
    description: "Vodka, fresh espresso, coffee liqueur, and vanilla syrup.",
    price: 15,
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",
    category: "drinks",
    popular: true,
  },
];

export const testimonials = [
  {
    id: "1",
    name: "Emily Parker",
    avatar: "EP",
    rating: 5,
    text: "An absolutely stunning dining experience. The truffle burrata was divine and the atmosphere is unmatched. We'll be back every week!",
    role: "Food Critic",
  },
  {
    id: "2",
    name: "Marcus Johnson",
    avatar: "MJ",
    rating: 5,
    text: "Best restaurant in the city. The braised short ribs melted in my mouth. The staff made us feel like family.",
    role: "Regular Guest",
  },
  {
    id: "3",
    name: "Sophie Laurent",
    avatar: "SL",
    rating: 5,
    text: "We hosted our anniversary dinner here and it was perfect. Every course was beautifully presented and delicious.",
    role: "Verified Diner",
  },
];

export const galleryImages = [
  { id: "1", src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "Restaurant interior", category: "Interior" },
  { id: "2", src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Plated dish", category: "Food" },
  { id: "3", src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Bar area", category: "Interior" },
  { id: "4", src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80", alt: "Signature dish", category: "Food" },
  { id: "5", src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "Private dining event", category: "Events" },
  { id: "6", src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80", alt: "Chef in kitchen", category: "Kitchen" },
  { id: "7", src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80", alt: "Table setting", category: "Interior" },
  { id: "8", src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80", alt: "Fresh salad", category: "Food" },
  { id: "9", src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80", alt: "Group dining", category: "Events" },
  { id: "10", src: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80", alt: "Chef preparing food", category: "Kitchen" },
  { id: "11", src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80", alt: "Pancakes", category: "Food" },
  { id: "12", src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80", alt: "Cocktail bar", category: "Interior" },
];
