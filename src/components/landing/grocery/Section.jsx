import Product from "../product/Product";

export default function Section({ id, title, data, addToCart }) {
  return (
    <div id={id} className="scroll-mt-32">

      <h2 className="text-3xl font-semibold mb-10 border-l-4 border-green-500 pl-4">
        {title}
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

    </div>
  );
}