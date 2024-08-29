import PropTypes from "prop-types";
import { CardProduct } from "./CardProduct";

export const Destacados = ({ products }) => {
  const productosDestacados = products.slice(0, 4); // Selecciona los primeros 4 productos

  return (
    <section className="py-8">
      <h2 className="text-2xl mt-6 border-b-2 font-bold text-center mb-4">
        Nuestros destacados
      </h2>

      <div className="flex justify-center overflow-x-auto py-4">
        <div className="flex gap-4 min-w-max">
          {productosDestacados.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

Destacados.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};
