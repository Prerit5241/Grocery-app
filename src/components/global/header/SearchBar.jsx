import { useState, useEffect, useMemo } from "react";
import { Search, X } from "lucide-react";
import * as AllData from "../../../../data/Data";

export default function SearchBar({ addToCart }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  // Map of data keys to section IDs in Grocery.jsx
  const categoryIdMap = {
    OrganicOil: "oils",
    OrganicSugar: "sugar",
    OrganicRice: "rice",
    SoyaMustardOil: "soya",
    PohaSabudanaMurmura: "snacks",
    SoojiMaidaBesan: "grains",
    AttaWholeWheat: "atta",
    DriedFruitsBerries: "dried-fruits",
    Dals: "dals",
    fruits: "fruits",
    vegetables: "vegetables",
    dairy: "dairy",
    bakery: "bakery",
    masalas: "masalas",
    Spices: "spices",
    Pastes: "pastes",
    ShampooConditioner: "shampoo",
    HairOilSerum: "hair-oil",
    BathingBarsSoaps: "soaps",
    FaceCare: "face-care",
    Toothpaste: "toothpaste"
  };

  // Create a flattened list of products with their category group
  const allProducts = useMemo(() => {
    return Object.entries(AllData).flatMap(([key, items]) => {
      if (Array.isArray(items)) {
        return items.map(p => ({ ...p, categoryKey: key }));
      }
      return [];
    });
  }, []);

  useEffect(() => {
    if (query.trim().length > 1) {
      const filtered = allProducts.filter((product) =>
        product.name?.toLowerCase().includes(query.toLowerCase()) ||
        product.brand?.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8); // Limit to top 8 results
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query, allProducts]);

  const handleProductClick = (product) => {
    // 1. Add to cart
    const variant = product.variants ? product.variants[0] : null;
    addToCart(product, variant);

    // 2. Scroll to section
    const targetId = categoryIdMap[product.categoryKey];

    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        // Using a slight delay to ensure the cart opening doesn't mess with the scroll
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }

    setQuery("");
    setIsFocused(false);
  };

  return (
    <div className="relative flex-1 max-w-md">
      <div className={`flex items-center bg-gray-100 rounded-full px-4 py-2 transition-all duration-200 ${isFocused ? 'bg-white ring-2 ring-green-500 shadow-md' : 'border border-transparent'}`}>
        <Search size={18} className={`${isFocused ? 'text-green-600' : 'text-gray-500'}`} />
        <input
          type="text"
          placeholder="Search for products..."
          className="bg-transparent outline-none text-sm px-2 w-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            // Delay closing to allow onMouseDown to fire first
            setTimeout(() => setIsFocused(false), 200);
          }}
        />
        {query && (
          <button onClick={() => setQuery("")} className="text-gray-400 hover:text-gray-600">
            <X size={16} />
          </button>
        )}
      </div>

      {/* Results Dropdown */}
      {isFocused && query.trim().length > 1 && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-[999]">
          {results.length > 0 ? (
            <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
              {results.map((product) => (
                <div
                  key={`${product.id}-${product.categoryKey}`}
                  className="flex items-center gap-3 p-3 hover:bg-green-50 cursor-pointer transition-colors border-b border-gray-50 last:border-none"
                  // Using onMouseDown because it fires before the input's onBlur
                  onMouseDown={(e) => {
                    e.preventDefault(); // Prevents input from losing focus immediately
                    handleProductClick(product);
                  }}
                >
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center p-1 border border-gray-100">
                    <img src={product.img} alt={product.name} className="h-full object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-gray-900 truncate">{product.name}</h4>
                    <p className="text-xs text-gray-500">{product.brand || 'Premium'} • {product.variants ? product.variants[0].weight : (product.weight || 'Standard')}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-green-600">₹{product.variants ? product.variants[0].price : product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-gray-500 italic text-sm">
              No products found for "{query}"
            </div>
          )}
        </div>
      )}
    </div>
  );
}
