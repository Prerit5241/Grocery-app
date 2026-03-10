import Product from "../product/Product";

export default function Section({ id, title, data, addToCart }) {
  return (
    <div id={id} className="scroll-mt-32">

      <h2 className="text-3xl font-semibold mb-10 border-l-4 border-green-500 pl-4">
        {title}
      </h2>

      <div className="flex md:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 overflow-x-auto md:overflow-x-visible pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {data.map((product) => (
          <div key={product.id} className="min-w-[260px] xs:min-w-[320px] md:min-w-0 snap-start">
            <Product
              product={product}
              addToCart={addToCart}
            />
          </div>
        ))}
      </div>

    </div>
  );
}