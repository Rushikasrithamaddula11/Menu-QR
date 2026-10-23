// Balaji Family Dhaba Menu Data
const RESTAURANT_INFO = {
  name: "SHREE GANESH BALAJI FAMILY DHABA",
  tagline: "GOOD FOOD • GREAT TASTE • HAPPY FAMILY",
  type: "100% PURE VEG.",
  address: "S.R.R. Complex, 1st Floor, House No. 13-9-12, Opp. Konark Theatre opposite, Lalitha Nagar, Dilsukhnagar, Hyderabad – 60.",
  phone: "9618899975",
  phoneFormatted: "+91 96188 99975",
  whatsapp: "919618899975",
  mapsUrl: "https://maps.google.com/?q=Konark+Theatre+Dilsukhnagar+Hyderabad",
  openingHours: "11:30 AM – 11:30 PM (All 7 Days)"
};

const MENU_CATEGORIES = [
  {
    id: "soup",
    name: "Soup",
    icon: "🥣",
    items: [
      { name: "Sweet Corn Soup", price: 130 },
      { name: "Tomato Soup", price: 130 },
      { name: "Veg. Corn Soup", price: 130 },
      { name: "Manchow Soup", price: 140, popular: true },
      { name: "Hot & Sour Soup", price: 140 }
    ]
  },
  {
    id: "starter",
    name: "Starter",
    icon: "🍢",
    items: [
      { name: "Veg. Manchuria", prices: { full: 260, half: 200 }, popular: true },
      { name: "Gobi Manchuria", price: 260 },
      { name: "Paneer Manchuria", prices: { full: 280, half: 220 }, popular: true },
      { name: "Baby Corn Manchuria", price: 280 },
      { name: "Mushroom Manchuria", price: 280 },
      { name: "Schezwan Manchuria", price: 280, spicy: true },
      { name: "Wet Manchuria", price: 280 },
      { name: "Chilly Paneer", price: 280, spicy: true, popular: true },
      { name: "Chilly Baby Corn", price: 280 },
      { name: "Chilly Manchuria", price: 280 },
      { name: "Chilly Mushroom", price: 280 },
      { name: "Paneer Pakoda", price: 290 },
      { name: "Crispy Corn", price: 290, popular: true },
      { name: "French Fries", price: 300 }
    ]
  },
  {
    id: "spl-starter",
    name: "Spl. Starter",
    icon: "⭐",
    items: [
      { name: "Paneer Majestic", price: 310, special: true, popular: true },
      { name: "Paneer Narmada", price: 310, special: true },
      { name: "Paneer Santa", price: 300, special: true },
      { name: "Dragon Paneer", price: 310, special: true, spicy: true },
      { name: "Peeper Paneer", price: 310, special: true },
      { name: "Paneer 65", price: 310, special: true },
      { name: "Paneer 999", price: 310, special: true },
      { name: "Golden Baby Corn", price: 310, special: true },
      { name: "Baby Corn Majestic", price: 310, special: true },
      { name: "Tandoor Paneer Tikka Dry", price: 360, special: true, popular: true },
      { name: "Achari Paneer Tikka Dry", price: 360, special: true },
      { name: "Malai Paneer Tikka Dry", price: 360, special: true },
      { name: "Pudina Paneer Tikka Dry", price: 360, special: true }
    ]
  },
  {
    id: "pasand-65",
    name: "Pasand 65",
    icon: "🔥",
    items: [
      { name: "Gobi 65", price: 270 },
      { name: "Aloo 65", price: 270 },
      { name: "Veg. 65", price: 270 },
      { name: "Paneer 65", price: 280, popular: true },
      { name: "Baby Corn 65", price: 280 },
      { name: "Mushroom 65", price: 280 },
      { name: "Veg. Schezwan 65", price: 280, spicy: true }
    ]
  },
  {
    id: "noodles",
    name: "Noodles Item",
    icon: "🍜",
    items: [
      { name: "Veg. Noodles", price: 240, popular: true },
      { name: "Chinese Noodles", price: 240 },
      { name: "Hakka Noodles", price: 270, popular: true },
      { name: "Schezwan Noodles", price: 260, spicy: true },
      { name: "Baby Corn Noodles", price: 270 },
      { name: "Paneer Noodles", price: 280, popular: true }
    ]
  },
  {
    id: "dal-bahar",
    name: "Dal Bahar",
    icon: "🍲",
    items: [
      { name: "Jeera Dal", price: 200 },
      { name: "Dal Fry", prices: { full: 220, half: 170 }, popular: true },
      { name: "Dal Tadka", prices: { full: 230, half: 180 }, popular: true },
      { name: "Dal Butter", price: 230 },
      { name: "Chinese Dal", price: 250 },
      { name: "Dal Tomato", price: 220 },
      { name: "Palak Dal", price: 250 },
      { name: "Dal Nagori", price: 260 },
      { name: "Methi Dal", price: 260 }
    ]
  },
  {
    id: "kofta-curies",
    name: "Kofta Curies",
    icon: "🥘",
    items: [
      { name: "Malai Kofta (Sweet)", prices: { full: 280, half: 220 }, popular: true, note: "Sweet" },
      { name: "Bulbul Kofta", price: 280 },
      { name: "Punjabi Kofta", price: 280 },
      { name: "Gujarti Kofta", price: 290 },
      { name: "Paneer Kofta", price: 290 }
    ]
  },
  {
    id: "paneer-curies",
    name: "Paneer Curies",
    icon: "🧀",
    items: [
      { name: "Paneer Butter Masala", prices: { full: 290, half: 230 }, popular: true },
      { name: "Kaju Paneer", prices: { full: 330, half: 250 }, popular: true, special: true },
      { name: "Paneer Kimma Masala", prices: { full: 290, half: 230 } },
      { name: "Shahi Paneer", price: 300, popular: true },
      { name: "Palak Paneer", prices: { full: 280, half: 230 } },
      { name: "Paneer Tikka Masala", price: 300, popular: true },
      { name: "Paneer Do Payaza", price: 290 },
      { name: "Mutter Paneer", price: 290 },
      { name: "Ginger Paneer", price: 290 },
      { name: "Pudina Paneer", price: 290 },
      { name: "Kadai Paneer", price: 300, popular: true },
      { name: "Lacha Lacha Paneer", prices: { full: 290, half: 230 } },
      { name: "Methi Chamman", price: 300 },
      { name: "Paneer Dilruba", price: 310 },
      { name: "Paneer Bhurji (Dry)", price: 290, note: "Dry" },
      { name: "Paneer Chatpata", price: 300 },
      { name: "Paneer Patiyala", price: 310 },
      { name: "Paneer Lawabdar", price: 310 },
      { name: "Paneer Jalpuri", price: 290 },
      { name: "Handi Paneer", price: 290 },
      { name: "Methi Paneer", price: 290 },
      { name: "Malai Methi Paneer", price: 300 },
      { name: "Paneer Lacha Palak", price: 300 }
    ]
  },
  {
    id: "veg-curies",
    name: "Vegitable Curies",
    icon: "🥦",
    items: [
      { name: "Mix Veg. Curies", prices: { full: 280, half: 220 }, popular: true },
      { name: "Kadai Veg.", price: 290 },
      { name: "Veg. Kolhapuri", price: 280, spicy: true },
      { name: "Veg. Navratan Korma (Sweet)", price: 290, note: "Sweet" },
      { name: "Veg Do Pyaza", price: 280 },
      { name: "Veg Korma", price: 280 },
      { name: "Veg Kimma Masala", price: 280 },
      { name: "Green Peas Masala", prices: { full: 280, half: 220 } },
      { name: "Capsicum Masala", price: 280 },
      { name: "Punjabi Channa Masala", prices: { full: 280, half: 220 }, popular: true },
      { name: "Channa Masala", price: 260 },
      { name: "Tomato Chutney (Sweet)", price: 280, note: "Sweet" },
      { name: "Tomato curries", price: 280 },
      { name: "Kaju Tomato", price: 280 },
      { name: "Plain Palak", prices: { full: 260, half: 200 } },
      { name: "Mutter Palak", price: 260 },
      { name: "Stuff Capsicum Masala", price: 280 },
      { name: "Stuff Tomato Masala", price: 300 },
      { name: "Ginger Mushroom", price: 300 },
      { name: "Ginger Baby Corn", price: 300 },
      { name: "Veg Chat Pata", prices: { full: 280, half: 220 } },
      { name: "Punjabi Veg", price: 280 },
      { name: "Veg Jaipuri", price: 280 },
      { name: "Mutter Mushroom Masala", price: 300 },
      { name: "Mushroom Masala", price: 300 },
      { name: "Kaju Curry", price: 320, special: true, popular: true },
      { name: "Kaju Butter Masala", prices: { full: 340, half: 270 }, special: true, popular: true },
      { name: "Kaju Baby Corn", price: 320 },
      { name: "Baby Corn Curries", price: 280 },
      { name: "Corn Palak", price: 280 },
      { name: "Ginger Veg.", price: 280 }
    ]
  },
  {
    id: "alu-gobi",
    name: "Alu Gobi Curies",
    icon: "🥔",
    items: [
      { name: "Alu Gobi Masala", price: 250, popular: true },
      { name: "Alu Masala", prices: { full: 250, half: 200 } },
      { name: "Alu Palak", prices: { full: 250, half: 200 } },
      { name: "Alu Tommato", price: 250 },
      { name: "Alu Paneer", prices: { full: 260, half: 200 } },
      { name: "Dum Alu Nawabi", price: 260, special: true },
      { name: "Alu Mutter", price: 250 },
      { name: "Alu Ginger", price: 260 },
      { name: "Alu Jeera Dry", price: 260, note: "Dry" },
      { name: "Gobi Masala", price: 260 }
    ]
  },
  {
    id: "indian-spl-curries",
    name: "Indian Special Curries",
    icon: "👑",
    items: [
      { name: "Balaji Special Dish", price: 360, special: true, popular: true, note: "Chef's Signature" },
      { name: "Tadka Paneer", price: 360, special: true },
      { name: "Hyderabadi Paneer", price: 360, special: true },
      { name: "Jil-Mil Paneer", price: 360, special: true },
      { name: "Veg. Jil-Mil", price: 310, special: true },
      { name: "Punjabi Paneer", price: 360, special: true },
      { name: "Special Veg Hyderabadi", price: 360, special: true },
      { name: "Schezwan Handi Paneer", price: 360, special: true, spicy: true },
      { name: "Special Nizam Paneer", price: 360, special: true },
      { name: "Kesar Paneer", price: 360, special: true },
      { name: "Special Shabnam Paneer", price: 360, special: true },
      { name: "Achari Paneer", price: 360, special: true },
      { name: "Mattka Paneer (Sweet)", price: 360, special: true, note: "Sweet" },
      { name: "Special Mattka Paneer", price: 360, special: true },
      { name: "Paneer Nagori", price: 360, special: true },
      { name: "Veg. Nagori", price: 360, special: true },
      { name: "Telangana Paneer", price: 360, special: true },
      { name: "Telangana Veg", price: 360, special: true },
      { name: "Kali Mirch Masala", price: 360, special: true },
      { name: "Special Paneer Makhan Wala", price: 360, special: true, popular: true }
    ]
  },
  {
    id: "roti",
    name: "Roti",
    icon: "🫓",
    items: [
      { name: "Tandoori Roti", price: 25, popular: true },
      { name: "Tandoori Butter Roti", price: 30, popular: true },
      { name: "Kothmir Roti", price: 35 },
      { name: "Kothmir Butter Roti", price: 40 },
      { name: "Pudina Roti", price: 35 },
      { name: "Pudina Butter Roti", price: 40 },
      { name: "Methi Roti", price: 35 },
      { name: "Methi Butter Roti", price: 40 }
    ]
  },
  {
    id: "naan",
    name: "Naan",
    icon: "🫓",
    items: [
      { name: "Plain Naan", price: 50 },
      { name: "Butter Naan", price: 55, popular: true },
      { name: "Kothmir Naan", price: 60 },
      { name: "Kothmir Butter Naan", price: 65 },
      { name: "Pudina Naan", price: 60 },
      { name: "Pudina Butter Naan", price: 65 },
      { name: "Garlic Naan", price: 90, popular: true },
      { name: "Garlic Butter Naan", price: 100, popular: true },
      { name: "Baby Naan", price: 70 },
      { name: "Kashmiri Naan", price: 80 },
      { name: "Chatpat Naan", price: 70 },
      { name: "Stuff Naan", price: 75 }
    ]
  },
  {
    id: "paratha",
    name: "Paratha",
    icon: "🫓",
    items: [
      { name: "Plain Paratha", price: 60 },
      { name: "Alu Paratha", price: 95, popular: true },
      { name: "Pudina Paratha", price: 70 },
      { name: "Punjabi Methi Paratha", price: 80 },
      { name: "Kothmir Paratha", price: 80 },
      { name: "Paneer Paratha", price: 120, popular: true },
      { name: "Garlic Paratha", price: 120 },
      { name: "Lacha Paratha", price: 100, popular: true },
      { name: "Stuff Kulcha", price: 120 },
      { name: "Masala Kulcha", price: 120 }
    ]
  },
  {
    id: "biryani",
    name: "Biryani",
    icon: "🍚",
    items: [
      { name: "Veg Biryani", prices: { full: 260, half: 200 }, popular: true },
      { name: "Dum Biryani", prices: { full: 270, half: 210 }, popular: true },
      { name: "Handi Biryani", price: 270 },
      { name: "Alu Biryani", price: 250 },
      { name: "Paneer Biryani", price: 300, popular: true },
      { name: "Kaju Biryani", price: 330, special: true },
      { name: "Mushroom Biryani", price: 300 },
      { name: "Veg Pulav", price: 260 },
      { name: "Paneer Pulav", price: 300 },
      { name: "Kaju Pulav", price: 320 },
      { name: "Kashmiri Pulav", price: 330 }
    ]
  },
  {
    id: "spl-biryani",
    name: "Spl. Biryani",
    icon: "✨",
    items: [
      { name: "Spl. Hyderabadi Biryani", price: 300, special: true, popular: true },
      { name: "Spl. Kaju Paneer Biryani", price: 340, special: true, popular: true },
      { name: "Spl. Nizam Biryani", price: 370, special: true },
      { name: "Balaji Spl. Biryani", price: 360, special: true, popular: true, note: "Chef's Special" },
      { name: "Spl. Shahi Biryani", price: 350, special: true }
    ]
  },
  {
    id: "family-pack",
    name: "Family Pack",
    icon: "👨‍👩‍👧‍👦",
    items: [
      { name: "Family Veg. Biryani", price: 800, special: true, popular: true, note: "Serves 3-4" },
      { name: "Family Paneer Biryani", price: 850, special: true, popular: true, note: "Serves 3-4" }
    ]
  },
  {
    id: "fried-rice",
    name: "Fried Rice",
    icon: "🥡",
    items: [
      { name: "Veg Fried Rice", prices: { full: 220, half: 180 }, popular: true },
      { name: "Kaju Fried Rice", price: 290, special: true },
      { name: "Baby Corn Fried Rice", price: 260 },
      { name: "Mushroom Fried Rice", price: 270 },
      { name: "Masala Fried Rice", price: 260 },
      { name: "Schezwan Fried Rice", price: 260, spicy: true },
      { name: "Balaji Special Fried Rice", price: 300, special: true, popular: true },
      { name: "Paneer Fried Rice", price: 280, popular: true },
      { name: "Mix Fried Rice", price: 270 },
      { name: "Honk Kong Fried Rice", price: 300 }
    ]
  },
  {
    id: "rice",
    name: "Rice",
    icon: "🍚",
    items: [
      { name: "Jeera Rice", prices: { full: 220, half: 180 }, popular: true },
      { name: "Kaju Jeera Rice", price: 280 },
      { name: "Jeera Fried Rice", price: 260 },
      { name: "Lemon Rice", price: 230 },
      { name: "Tomato Rice", price: 240 },
      { name: "Butter Rice", price: 230 },
      { name: "Ghee Rice", price: 230 },
      { name: "Schezwan Paneer in Rice", price: 280 },
      { name: "Manchuriya Fried Rice", price: 270 },
      { name: "Corn Fried Rice", price: 260 },
      { name: "Plain Rice", price: 160 },
      { name: "Curd Rice", price: 200, popular: true },
      { name: "Special Curd Rice", price: 250, special: true }
    ]
  },
  {
    id: "papad",
    name: "Papad",
    icon: "🍘",
    items: [
      { name: "Masala Papad", price: 70, popular: true },
      { name: "Fry Papad", price: 45 },
      { name: "Roasted Papad", price: 30 },
      { name: "Butter Papad", price: 40 },
      { name: "Roasted Masala Papad", price: 80 },
      { name: "Butter Masala Papad", price: 80 }
    ]
  },
  {
    id: "salad",
    name: "Salad Item",
    icon: "🥗",
    items: [
      { name: "Green Salad", price: 80, popular: true },
      { name: "Masala Salad", price: 60 },
      { name: "Onion Salad", price: 50 },
      { name: "Tomato Salad", price: 50 },
      { name: "Cucumber Salad", price: 50 },
      { name: "Lacha Lacha Salad", price: 60 },
      { name: "Carrot Salad", price: 60 }
    ]
  },
  {
    id: "raita",
    name: "Raita Items",
    icon: "🥣",
    items: [
      { name: "Mix Raita", prices: { full: 130, half: 100 }, popular: true },
      { name: "Bundi Raita", price: 130 },
      { name: "Onion Raita", price: 120 },
      { name: "Tomato Raita", price: 120 },
      { name: "Cucumber Raita", price: 120 },
      { name: "Curd", prices: { full: 80, half: 50 } }
    ]
  },
  {
    id: "lassi",
    name: "Lassi Items",
    icon: "🥛",
    items: [
      { name: "Sweet Lassi", price: 50, popular: true },
      { name: "Sweet and Salt Lassi", price: 50 },
      { name: "Salt Lassi", price: 40 },
      { name: "Balaji Special Lassi", price: 110, special: true, popular: true },
      { name: "Special Kashmiri Lassi", price: 110, special: true },
      { name: "Special Kaju Lassi", price: 120, special: true },
      { name: "Butter Milk", price: 35 },
      { name: "Masala Butter Milk", price: 40, popular: true }
    ]
  },
  {
    id: "drinks-extras",
    name: "Soft Drinks & Extras",
    icon: "🥤",
    items: [
      { name: "Cool Drinks", price: 20 },
      { name: "Jeera Soda", price: 30, popular: true },
      { name: "Red Bull", price: 125 },
      { name: "Water Bottle", price: 20 },
      { name: "Badam milk", price: 40, popular: true },
      { name: "Any Extra Item Like (Salad, Raita, Gravy Will Be Charged)", price: 30, note: "Extra Charge" }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { RESTAURANT_INFO, MENU_CATEGORIES };
}
