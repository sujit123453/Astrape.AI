import honeyImg from './honey.jpg';
import greenTeaImg from './green-tea.jpg';
import coconutOilImg from './coconut-oil.jpg';
import aloeVeraImg from './aloe-vera.jpg';
import neemSoapImg from './neem-soap.jpg';

export const productsCategories = ["All", "Soap", "Oil", "Drink", "Skin-care"];

export const cartCategories = [
  {
    id: 1,
    name: "Organic Honey",
    category: "Natural Sweetener",
    price: 350,
    unit: "250g",
    image: honeyImg,
    description:
      "Pure and raw honey collected from wild forest bees. No additives, no preservatives.",
  },
  {
    id: 2,
    name: "Herbal Green Tea",
    category: "Beverages",
    price: 220,
    unit: "100g",
    image: greenTeaImg,
    description:
      "Premium handpicked green tea leaves blended with natural herbs for detox and refreshment.",
  },
  {
    id: 3,
    name: "Cold Pressed Coconut Oil",
    category: "Oils",
    price: 499,
    unit: "500ml",
    image: coconutOilImg,
    description:
      "Unrefined, virgin coconut oil extracted using cold-press method. Ideal for cooking and skincare.",
  },
  {
    id: 4,
    name: "Aloe Vera Gel",
    category: "Skin Care",
    price: 180,
    unit: "150ml",
    image: aloeVeraImg,
    description:
      "100% pure aloe vera gel to hydrate, soothe, and nourish your skin naturally.",
  },
  {
    id: 5,
    name: "Neem Soap",
    category: "Bath & Body",
    price: 75,
    unit: "100g",
    image: neemSoapImg,
    description:
      "Handmade soap enriched with neem extracts for clear and healthy skin.",
  },
];
