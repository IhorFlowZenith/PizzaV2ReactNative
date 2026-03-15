export enum PizzaCategory {
  MEAT = 'Meat',
  VEGGIE = 'Veggie',
  SPICY = 'Spicy',
  CHEESE = 'Cheese',
  SEA = 'Seafood'
}

export type PizzaSize = 'S' | 'M' | 'L';

export interface Pizza {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  category: PizzaCategory;
  rating: number;
  options: {
    size: PizzaSize;
    weight: number;
    price: number;
  }[];
  ingredients: string[];
  isNew?: boolean;
  isPopular?: boolean;
}

export const PIZZA_DATA: Pizza[] = [
  {
    id: 1,
    name: 'Margherita',
    description: 'The Italian classic with authentic tomato sauce, fresh mozzarella, and aromatic basil leaves.',
    imageUrl: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?w=500',
    category: PizzaCategory.CHEESE,
    rating: 4.8,
    options: [
      { size: 'S', weight: 320, price: 180 },
      { size: 'M', weight: 480, price: 240 },
      { size: 'L', weight: 620, price: 310 }
    ],
    ingredients: ['Tomato Sauce', 'Mozzarella', 'Fresh Basil', 'Extra Virgin Olive Oil'],
    isPopular: true
  },
  {
    id: 2,
    name: 'Pepperoni Passion',
    description: 'Double portion of spicy pepperoni and extra mozzarella cheese on our signature crust.',
    imageUrl: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500',
    category: PizzaCategory.MEAT,
    rating: 4.9,
    options: [
      { size: 'S', weight: 350, price: 220 },
      { size: 'M', weight: 520, price: 295 },
      { size: 'L', weight: 700, price: 380 }
    ],
    ingredients: ['Tomato Sauce', 'Mozzarella', 'Pepperoni', 'Oregano'],
    isPopular: true,
    isNew: false
  },
  {
    id: 3,
    name: 'BBQ Chicken',
    description: 'Grilled chicken breast, red onions, and smoky BBQ sauce instead of traditional tomato base.',
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
    category: PizzaCategory.MEAT,
    rating: 4.7,
    options: [
      { size: 'S', weight: 380, price: 240 },
      { size: 'M', weight: 550, price: 320 },
      { size: 'L', weight: 750, price: 410 }
    ],
    ingredients: ['BBQ Sauce', 'Mozzarella', 'Grilled Chicken', 'Red Onions', 'Coriander'],
    isNew: true
  },
  {
    id: 4,
    name: 'Four Cheeses',
    description: 'A rich blend of Mozzarella, Parmesan, Gorgonzola, and creamy Ricotta cheese.',
    imageUrl: 'https://images.unsplash.com/photo-1573821663912-56990544c381?w=500',
    category: PizzaCategory.CHEESE,
    rating: 4.9,
    options: [
      { size: 'S', weight: 300, price: 250 },
      { size: 'M', weight: 450, price: 330 },
      { size: 'L', weight: 600, price: 420 }
    ],
    ingredients: ['Mozzarella', 'Parmesan', 'Gorgonzola', 'Ricotta', 'Walnuts'],
    isPopular: true
  },
  {
    id: 5,
    name: 'Garden Veggie',
    description: 'Loaded with fresh bell peppers, mushrooms, olives, and cherry tomatoes.',
    imageUrl: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500',
    category: PizzaCategory.VEGGIE,
    rating: 4.5,
    options: [
      { size: 'S', weight: 400, price: 190 },
      { size: 'M', weight: 580, price: 260 },
      { size: 'L', weight: 780, price: 340 }
    ],
    ingredients: ['Tomato Sauce', 'Mozzarella', 'Bell Peppers', 'Mushrooms', 'Black Olives', 'Corn'],
  },
  {
    id: 6,
    name: 'Hawaiian Surprise',
    description: 'The controversial mix of sweet pineapple chunks and savory ham.',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500',
    category: PizzaCategory.MEAT,
    rating: 4.3,
    options: [
      { size: 'S', weight: 360, price: 210 },
      { size: 'M', weight: 530, price: 280 },
      { size: 'L', weight: 720, price: 360 }
    ],
    ingredients: ['Tomato Sauce', 'Mozzarella', 'Ham', 'Pineapple'],
  },
  {
    id: 7,
    name: 'Spicy Mexicana',
    description: 'Hot chili peppers, beef, and jalapeños for those who love it hot.',
    imageUrl: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=500',
    category: PizzaCategory.SPICY,
    rating: 4.8,
    options: [
      { size: 'S', weight: 380, price: 230 },
      { size: 'M', weight: 550, price: 310 },
      { size: 'L', weight: 750, price: 395 }
    ],
    ingredients: ['Tomato Sauce', 'Mozzarella', 'Beef', 'Jalapeños', 'Hot Chili'],
    isPopular: true
  },
  {
    id: 8,
    name: 'Seafood Deluxe',
    description: 'Premium mix of shrimps, mussels, and calamari with a touch of garlic oil.',
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
    category: PizzaCategory.SEA,
    rating: 4.6,
    options: [
      { size: 'S', weight: 340, price: 280 },
      { size: 'M', weight: 500, price: 380 },
      { size: 'L', weight: 680, price: 490 }
    ],
    ingredients: ['Tomato Sauce', 'Mozzarella', 'Shrimps', 'Mussels', 'Garlic Oil'],
    isNew: true
  },
  {
    id: 9,
    name: 'Diablo Inferno',
    description: 'Extreme heat with spicy salami and ghost pepper sauce.',
    imageUrl: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=500',
    category: PizzaCategory.SPICY,
    rating: 4.7,
    options: [
      { size: 'S', weight: 350, price: 245 },
      { size: 'M', weight: 520, price: 325 },
      { size: 'L', weight: 700, price: 415 }
    ],
    ingredients: ['Spicy Sauce', 'Mozzarella', 'Spicy Salami', 'Chili Flakes'],
  },
  {
    id: 10,
    name: 'Carbonara',
    description: 'Creamy sauce base with crispy bacon, parmesan, and a fresh egg yolk.',
    imageUrl: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=500',
    category: PizzaCategory.MEAT,
    rating: 4.9,
    options: [
      { size: 'S', weight: 370, price: 235 },
      { size: 'M', weight: 540, price: 315 },
      { size: 'L', weight: 730, price: 405 }
    ],
    ingredients: ['Creamy Sauce', 'Mozzarella', 'Bacon', 'Parmesan', 'Garlic'],
    isPopular: true
  }
];