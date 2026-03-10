import { useState } from "react";

export default function Product({ product, addToCart }) {
  const [isOpen, setIsOpen] = useState(false);

  const hasVariants =
    product.variants && product.variants.length > 1;

  const hasSingleVariant =
    product.variants && product.variants.length === 1;

  const [selectedVariant, setSelectedVariant] = useState(
    product.variants ? product.variants[0] : null
  );

  const displayWeight =
    product.variants ? selectedVariant.weight : product.weight;

  const displayPrice =
    product.variants ? selectedVariant.price : product.price;

  const displayOriPrice =
    product.variants ? selectedVariant.ori_pri : product.ori_pri;

  const displayDiscount =
    product.variants ? selectedVariant.discount : product.discount;

  return (
    <div
      className={`group relative bg-white rounded-2xl shadow-md border border-transparent
      hover:border-green-300 hover:shadow-xl hover:-translate-y-2
      transition-all duration-300 flex flex-col h-full 
      ${isOpen ? "z-50" : ""}`}
    >
      {/* IMAGE */}
      <div className="relative h-48 xs:h-56 bg-gray-100 flex items-center justify-center overflow-hidden rounded-t-2xl">
        <img
          src={product.img}
          alt={product.name}
          className="h-full p-4 transition-transform duration-500 ease-out group-hover:scale-110"
        />

        {displayDiscount && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
            {displayDiscount}
          </span>
        )}

        {product.rating && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1 
          bg-white px-2 py-1 rounded-md shadow text-xs font-semibold">
            <span className="text-yellow-500">★</span>
            <span>{product.rating}</span>
          </div>
        )}

        {product.veg !== undefined && (
          <span className={`absolute bottom-3 right-3 w-5 h-5 rounded-sm border-2 flex items-center justify-center
              ${product.veg ? "border-green-600" : "border-red-600"}`}>
            <span className={`w-2.5 h-2.5 rounded-full
                ${product.veg ? "bg-green-600" : "bg-red-600"}`} />
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">

        {/* Brand */}
        {product.brand && (
          <span className="text-sm text-gray-500 mb-1">
            {product.brand}
          </span>
        )}

        {/* Product Name */}
        <h3 className="text-base font-semibold text-gray-800 mb-3 min-h-[48px]">
          {product.name}
        </h3>

        {/* VARIANT SELECTOR */}
        {hasVariants && (
          <div className="relative">
            {/* PREMIUM TRIGGER */}
            <div
              onClick={() => setIsOpen(!isOpen)}
              className={`flex items-center justify-between px-4 py-2.5 rounded-xl cursor-pointer transition-all duration-300 border ${isOpen ? "bg-white border-green-500 shadow-lg ring-4 ring-green-50" : "bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-white shadow-sm"}`}
            >
              <span className="text-sm font-bold text-slate-700">
                {selectedVariant.weight}
              </span>
              <svg
                viewBox="0 0 24 24"
                className={`w-4 h-4 text-slate-400 transition-transform duration-500 ${isOpen ? "rotate-180 text-green-600" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>

            {/* PREMIUM DROPDOWN LIST */}
            {isOpen && (
              <div className="absolute left-0 right-0 mt-2.5 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-100 p-1.5 space-y-1 max-h-62 overflow-y-auto z-[999] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] animate-in fade-in zoom-in duration-200">
                {product.variants.map((variant) => {
                  const isSelected = selectedVariant.weight === variant.weight;
                  return (
                    <div
                      key={variant.weight}
                      onClick={() => {
                        setSelectedVariant(variant);
                        setIsOpen(false);
                      }}
                      className={`group relative p-2.5 rounded-xl border transition-all duration-200 cursor-pointer ${isSelected ? "bg-green-50 border-green-200 shadow-inner" : "bg-white border-transparent hover:bg-slate-50 hover:border-slate-100"}`}
                    >
                      <div className="flex justify-between items-start">
                        <div className="space-y-1.5">
                          {/* WEIGHT */}
                          <p className={`text-sm font-bold transition-colors ${isSelected ? "text-green-800" : "text-slate-800"}`}
                          >
                            {variant.weight}
                          </p>
                          {/* PRICE & BADGES ROW */}
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                              <span className="text-base font-black text-slate-900">
                                ₹{variant.price}
                              </span>
                              {variant.ori_pri && (
                                <span className="text-xs text-slate-400 line-through decoration-slate-300">
                                  {variant.ori_pri}
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-2 flex-wrap">
                              {variant.discount && (
                                <span className="bg-green-500 text-white px-2 py-0.5 rounded-md text-[9px] font-black tracking-wider uppercase shadow-sm">
                                  {variant.discount}
                                </span>
                              )}
                              <div className="flex items-center gap-1 bg-amber-50 text-amber-700 px-2 py-0.5 rounded-md text-[9px] font-bold border border-amber-100">
                                <span className="text-[10px]">⚡</span>
                                <span>10 MINS</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* HIGH-END CHECKMARK */}
                        {isSelected && (
                          <div className="bg-green-500 p-1 rounded-full shadow-md shadow-green-200 animate-in zoom-in slide-in-from-right-2">
                            <svg
                              viewBox="0 0 24 24"
                              className="w-3 h-3 text-white"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Single Variant */}
        {hasSingleVariant && (
          <div className="border px-4 py-2 rounded-xl bg-gray-50">
            {displayWeight}
          </div>
        )}

        {/* No Variant */}
        {!product.variants && (
          <div className="border px-4 py-2 rounded-xl bg-gray-50">
            {product.weight}
          </div>
        )}

        {/* PRICE + BUTTON */}
        <div className="mt-auto pt-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-green-600">
              ₹{displayPrice}
            </span>

            {displayOriPrice && (
              <span className="text-sm text-gray-400 line-through">
                ₹{displayOriPrice}
              </span>
            )}
          </div>

          <button
            onClick={() => addToCart(product, selectedVariant)}
            className="w-full mt-3 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
}