import { useState } from "react";

export default function useCart() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // 🛒 Add to Cart
  const addToCart = (product, variant) => {
    const cartId = product.id + (variant?.weight || "");

    const existingItem = cart.find(item => item.cartId === cartId);

    if (existingItem) {
      setCart(prev =>
        prev.map(item =>
          item.cartId === cartId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart(prev => [
        ...prev,
        {
          cartId,
          name: product.name,
          weight: variant?.weight || product.weight,
          price: variant?.price || product.price,
          ori_pri: variant?.ori_pri || product.ori_pri,
          discount: variant?.discount || product.discount,
          img: product.img,
          quantity: 1
        }
      ]);
    }

    // Only open cart drawer on desktop (wider than 1024px)
    if (window.innerWidth >= 1024) {
      setIsCartOpen(true);
    }
  };

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

  // 🧮 Total Price
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // 🔢 Cart Count Badge
  const cartCount = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return {
    cart,
    setCart,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    increaseQty,
    decreaseQty,
    totalPrice,
    cartCount
  };
}