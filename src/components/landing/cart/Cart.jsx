"use client";

import { useState } from "react";

export default function CartDrawer({
  cart,
  setCart,
  isOpen,
  setIsOpen
}) {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // ➕ Increase Quantity
  const increaseQty = (id) => {
    setCart(prev =>
      prev.map(item =>
        item.cartId === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // ➖ Decrease Quantity
  const decreaseQty = (id) => {
    setCart(prev =>
      prev
        .map(item =>
          item.cartId === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  // 💰 Total Price (Fix floating issue)
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  ).toFixed(2);

  // 🛍️ Total Items Count
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Helper to extract number from string "₹200" or similar
  const getNumber = (val) => {
    if (!val) return 0;
    const num = String(val).replace(/[^0-9.]/g, '');
    return parseFloat(num) || 0;
  };

  // 💸 Total Savings
  const totalSavings = cart.reduce((acc, item) => {
    const ori = getNumber(item.ori_pri);
    const pri = getNumber(item.price);
    if (ori > pri) {
      return acc + (ori - pri) * item.quantity;
    }
    return acc;
  }, 0).toFixed(2);

  return (
    <>
      <style>{`
        .cart-scrollbar::-webkit-scrollbar {
          width: 0px;
        }
        .cart-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .cart-scrollbar::-webkit-scrollbar-thumb {
          background: transparent;
        }
      `}</style>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[360px] bg-white shadow-2xl z-50
        transform transition-transform duration-300 ease-in-out flex flex-col
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >

        {/* Header - Modern Design */}
        <div className="px-6 py-6 bg-white border-b-2 border-gray-100">
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
              <div className="flex items-center justify-between mr-2">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <span className="text-2xl">🛒</span> Cart
                </h2>
                {cart.length > 0 && (
                  <button
                    onClick={() => setCart([])}
                    className="text-xs font-bold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-md transition-all border border-red-100 uppercase tracking-wide"
                  >
                    Clear All
                  </button>
                )}
              </div>
              <p className="text-sm text-gray-500 mt-2">
                {totalItems} item{totalItems !== 1 ? 's' : ''} • {cart.length} product{cart.length !== 1 ? 's' : ''}
              </p>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all duration-200 text-2xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Cart Items Section - Hide Scrollbar */}
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-3 cart-scrollbar">

          {cart.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <div className="text-5xl mb-4">🛍️</div>
              <p className="text-gray-700 text-lg font-semibold mb-2">
                Cart is empty
              </p>
              <p className="text-gray-400 text-sm">
                Add items to continue shopping
              </p>
            </div>
          )}

          {cart.map(item => (
            <div
              key={item.cartId}
              className="flex gap-3 bg-white p-3 rounded-xl border-2 border-gray-100 hover:border-green-300 hover:shadow-md transition-all duration-200"
            >

              {/* Image Container */}
              <div className="w-20 h-20 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-200">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-full object-contain p-1.5"
                />
              </div>

              {/* Info & Controls */}
              <div className="flex-1 flex flex-col justify-between min-w-0">

                {/* Product Info */}
                <div>
                  <h3 className="font-semibold text-sm text-gray-900 line-clamp-2">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1.5 font-medium">
                    {item.weight}
                  </p>
                </div>

                {/* Price & Quantity Row */}
                <div className="flex items-end justify-between gap-2 mt-2">
                  <div className="flex flex-col">
                    <span className="text-gray-900 font-bold text-base">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </span>
                    {item.ori_pri && getNumber(item.ori_pri) > getNumber(item.price) && (
                      <div className="flex items-center gap-1.5 mt-0.5">
                         <span className="text-xs text-gray-500 line-through font-medium">
                           ₹{(getNumber(item.ori_pri) * item.quantity).toFixed(2)}
                         </span>
                         {item.discount && (
                           <span className="text-[10px] bg-green-100 text-green-700 px-1 py-0.5 rounded-sm font-bold uppercase tracking-wide">
                             {item.discount}
                           </span>
                         )}
                      </div>
                    )}
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-1 bg-gray-50 rounded-md px-2 py-1.5 border border-gray-200">
                    <button
                      onClick={() => decreaseQty(item.cartId)}
                      className="w-5 h-5 flex items-center justify-center rounded text-gray-500 hover:bg-gray-200 transition-all duration-150 text-base font-bold leading-none"
                    >
                      −
                    </button>

                    <span className="mx-1.5 font-bold text-xs text-green-600 min-w-[16px] text-center">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQty(item.cartId)}
                      className="w-5 h-5 flex items-center justify-center rounded text-gray-500 hover:bg-gray-200 transition-all duration-150 text-base font-bold leading-none"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom Section - Fixed */}
        {cart.length > 0 && (
          <div className="border-t-2 border-gray-100 bg-white px-5 py-5 space-y-4 shadow-lg">

            {/* Price Breakdown */}
            <div className="space-y-3 pb-3">
              <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">Bill Details</h4>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 font-medium tracking-tight">Subtotal</span>
                <span className="font-semibold text-gray-800">₹{totalPrice}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 font-medium tracking-tight">Delivery Fee</span>
                <span className="font-semibold text-green-600">FREE</span>
              </div>
              {parseFloat(totalSavings) > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 text-blue-600 font-medium tracking-tight">Discount on MRP</span>
                  <span className="font-semibold text-blue-600">-₹{totalSavings}</span>
                </div>
              )}
              <div className="h-px bg-gray-200 my-2"></div>
              
              <div className="flex justify-between items-center mt-3">
                 <span className="text-gray-800 font-bold text-base tracking-tight">
                   To Pay
                 </span>
                 <span className="text-lg font-bold text-gray-900">
                   ₹{totalPrice}
                 </span>
              </div>
            </div>

            {/* Total Savings Banner */}
            {parseFloat(totalSavings) > 0 && (
              <div className="bg-[#f0f9f4] rounded-lg p-3 border border-[#cfecdc]">
                <div className="flex items-center gap-2 text-sm text-[#0a803f] font-semibold">
                  <span className="text-lg leading-none pt-0.5">🏷️</span>
                  <span>You are saving ₹{totalSavings} on this order</span>
                </div>
              </div>
            )}

            {/* Checkout Button */}
            <button
              disabled={cart.length === 0}
              onClick={() => setIsCheckoutOpen(true)}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold text-base transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Proceed to Checkout
            </button>
          </div>
        )}

      </div>

      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all translate-y-0 scale-100 opacity-100">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-4 flex justify-between items-center text-white">
              <h3 className="text-xl font-bold">Checkout Details</h3>
              <button
                onClick={() => setIsCheckoutOpen(false)}
                className="text-white hover:bg-white/20 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Modal Body - Form */}
            <form className="p-6 space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Order Placed Successfully!"); setIsCheckoutOpen(false); setCart([]); setIsOpen(false); }}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" required pattern="[0-9]{10}" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" placeholder="9876543210" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" placeholder="johndoe@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
                <textarea required rows="3" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none" placeholder="123, Street Name, Landmark"></textarea>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" placeholder="City" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">PIN Code</label>
                  <input type="text" required pattern="[0-9]{6}" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" placeholder="123456" />
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-gray-50 p-4 rounded-lg !mt-6 border border-gray-100 flex justify-between items-center text-gray-800 font-medium">
                <span>Amount to Pay:</span>
                <span className="text-xl text-green-600 font-bold">₹{totalPrice}</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full !mt-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-lg font-bold text-lg shadow-md hover:shadow-lg transition-all transform active:scale-[0.98]"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}