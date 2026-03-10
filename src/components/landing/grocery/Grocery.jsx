import Header from "../../global/header/Header";
import Footer from "../../global/footer/Footer";
import Cart from "../cart/Cart";
import Section from "./Section";
import useCart from "../../../hooks/useCart";

import {
  OrganicOil,
  OrganicSugar,
  OrganicRice,
  SoyaMustardOil,
  PohaSabudanaMurmura,
  SoojiMaidaBesan,
  AttaWholeWheat,
  DriedFruitsBerries,
  Dals,
  fruits,
  vegetables,
  dairy,
  bakery,
  masalas,
  Spices,
  Pastes,
  ShampooConditioner,
  HairOilSerum,
  BathingBarsSoaps,
  FaceCare,
  Toothpaste
} from "../../../../data/Data";


import Hero from "../hero/Hero";

export default function Grocery() {

  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    cartCount,
    setCart
  } = useCart();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      <Header
        cartCount={cartCount}
        openCart={() => setIsCartOpen(true)}
        addToCart={addToCart}
      />

      <Cart
        cart={cart}
        setCart={setCart}
        isOpen={isCartOpen}
        setIsOpen={setIsCartOpen}
      />

      {/* Main Content - Adjusts when cart opens */}
      <div className={`transition-all duration-300 ${isCartOpen ? "xl:mr-[360px]" : " "}`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 space-y-4">

          <Hero />

          <div className="py-8 sm:py-12 md:py-16 space-y-12 sm:space-y-16 md:space-y-24">

            <Section id="oils" title="Organic Edible Oil & Ghee" data={OrganicOil} addToCart={addToCart} />
            <Section id="sugar" title="Organic Sugar & Jaggery" data={OrganicSugar} addToCart={addToCart} />
            <Section id="rice" title="Organic Rice & Other Rice" data={OrganicRice} addToCart={addToCart} />



            <Section id="soya" title="Soya & Mustard Oils" data={SoyaMustardOil} addToCart={addToCart} />
            <Section id="snacks" title="Poha, Sabudana & Murmura" data={PohaSabudanaMurmura} addToCart={addToCart} />
            <Section id="grains" title="Sooji, Maida & Besan" data={SoojiMaidaBesan} addToCart={addToCart} />
            <Section id="atta" title="Atta & Whole Wheat" data={AttaWholeWheat} addToCart={addToCart} />
            <Section id="dried-fruits" title="Dried Fruits & Berries" data={DriedFruitsBerries} addToCart={addToCart} />
            <Section id="dals" title="Organic Dals & Pulses" data={Dals} addToCart={addToCart} />
            <Section id="fruits" title="Fresh Fruits" data={fruits} addToCart={addToCart} />
            <Section id="vegetables" title="Fresh Vegetables" data={vegetables} addToCart={addToCart} />
            <Section id="dairy" title="Dairy Products" data={dairy} addToCart={addToCart} />
            <Section id="bakery" title="Bakery Items" data={bakery} addToCart={addToCart} />
            <Section id="masalas" title="Blended Masalas" data={masalas} addToCart={addToCart} />
            <Section id="spices" title="Powdered Spices" data={Spices} addToCart={addToCart} />
            <Section id="pastes" title="Cooking Pastes" data={Pastes} addToCart={addToCart} />
            <Section id="shampoo" title="Shampoo & Conditioner" data={ShampooConditioner} addToCart={addToCart} />
            <Section id="hair-oil" title="Hair Oil & Serum" data={HairOilSerum} addToCart={addToCart} />
            <Section id="soaps" title="Bathing Bars & Soaps" data={BathingBarsSoaps} addToCart={addToCart} />
            <Section id="face-care" title="Face Care" data={FaceCare} addToCart={addToCart} />
            <Section id="toothpaste" title="Toothpaste" data={Toothpaste} addToCart={addToCart} />

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}