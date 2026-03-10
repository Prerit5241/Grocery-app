import { ShoppingCart, User, Heart } from "lucide-react";
import SearchBar from "./SearchBar";

export default function Header({ cartCount, openCart, addToCart }) {
  const categories = [
    { name: "Breakfast & Dairy", id: "dairy", keywords: ["milk", "cheese", "butter", "egg", "dairy", "paneer", "curd", "yogurt"] },
    { name: "Fruits & Vegetables", id: "fruits", keywords: ["apple", "grapes", "fruit", "vegetable", "carrot", "broccoli", "potato", "onion", "tomato", "capsicum", "lychee", "strawberry", "pineapple", "avocado"] },
    { name: "Meat & Seafood", id: "pastes", keywords: ["mutton", "chicken", "meat", "seafood", "fish", "paste"] },
    { name: "Beverages", id: "shampoo", keywords: ["shampoo", "conditioner", "beverage", "drink", "juice", "tea", "coffee"] },
    { name: "Snacks", id: "snacks", keywords: ["poha", "sabudana", "murmura", "snack"] },
    { name: "Bakery", id: "bakery", keywords: ["bread", "bun", "bakery", "cake", "biscuit", "cookie", "pide", "baguette"] },
    { name: "Personal Care", id: "face-care", keywords: ["face", "cream", "lotion", "soap", "toothpaste", "hair", "serum", "oil"] },
    { name: "Home Care", id: "toothpaste", keywords: ["cleaner", "detergent", "dishwash"] }
  ];


  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-1.5 sm:px-4 md:px-6 py-2 sm:py-2 gap-0.5 sm:gap-6">

          {/* Logo - Left Side */}
          <div className="flex-shrink-0">
            <h1 className="text-[12px] xs:text-base sm:text-2xl font-bold tracking-tight text-green-600 cursor-pointer whitespace-nowrap">
              Grocery<span className="text-gray-800">Hub</span>
            </h1>
          </div>

          {/* Search Bar - Centered */}
          <div className="flex-1 max-w-[160px] xs:max-w-[240px] sm:max-w-[320px] mx-auto">
            <SearchBar />
          </div>

          {/* Right Side Icons - Right Side */}
          <div className="flex items-center justify-end gap-1 sm:gap-6 flex-shrink-0">

            {/* Wishlist */}
            <button className="relative hover:text-green-600 transition hidden sm:block">
              <Heart size={18} className="sm:w-[22px] sm:h-[22px]" />
            </button>

            {/* Cart */}
            <button onClick={openCart} className="relative hover:text-green-600 transition flex items-center justify-center p-1">
              <ShoppingCart size={18} className="sm:w-[22px] sm:h-[22px]" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 sm:-top-1.5 sm:-right-1.5 bg-green-600 text-white text-[8px] sm:text-[9px] w-3.5 h-3.5 sm:w-5 sm:h-5 flex items-center justify-center rounded-full border border-white">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Profile */}
            <button className="hover:text-green-600 transition p-1">
              <User size={18} className="sm:w-[22px] sm:h-[22px]" />
            </button>
          </div>
        </div>
      </header>

      {/* ✅ Category Scroll Bar - NOT FIXED */}
      <div className="bg-green-50 border-b border-gray-200 mt-[42px] sm:mt-[52px]">
        <div className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-4 md:gap-6 overflow-x-auto py-2 px-3 sm:px-4 md:px-6 text-xs sm:text-sm [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() =>
                document
                  .getElementById(cat.id)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="whitespace-nowrap font-medium text-gray-600 hover:text-green-600 transition duration-200 px-2 sm:px-3 py-1 rounded-lg hover:bg-white"
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}