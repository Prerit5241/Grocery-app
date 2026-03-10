import { ShoppingCart, User, Heart } from "lucide-react";
import SearchBar from "./SearchBar";

export default function Header( { cartCount, openCart, addToCart } ) {
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
      {/* ✅ MAIN HEADER ONLY STICKY */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200 "  >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-4 md:px-6 py-3 sm:py-4 gap-3 sm:gap-6">
          
          {/* Logo */}
          <h1 className="text-lg sm:text-2xl font-bold tracking-tight text-green-600 cursor-pointer flex-shrink-0">
            Grocery<span className="text-gray-800">Hub</span>
          </h1>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md">
            <SearchBar addToCart={addToCart} categories={categories} />
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-3 sm:gap-6 flex-shrink-0">
            
            {/* Wishlist */}
            <button className="relative hover:text-green-600 transition">
              <Heart size={20} className="sm:w-[22px] sm:h-[22px]" />
            </button>

            {/* Cart */}
            <button onClick={openCart} className="relative hover:text-green-600 transition">
              <ShoppingCart size={20} className="sm:w-[22px] sm:h-[22px]" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Profile */}
            <button className="hover:text-green-600 transition">
              <User size={20} className="sm:w-[22px] sm:h-[22px]" />
            </button>
          </div>
        </div>
      </header>

      {/* ❌ NOT STICKY — Category Scroll */}
      <div className="bg-green-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-4 md:gap-6 overflow-x-auto py-3 px-3 sm:px-4 md:px-6 text-xs sm:text-sm [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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