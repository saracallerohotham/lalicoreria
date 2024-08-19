import { CardProduct } from "./Card";
import { products } from "../data/products";

function Destacados() {
  const productosDestacados = products.slice(0, 4); // Selecciona los primeros 4 productos

  return (
    <div className="py-8">
      <h2 className="text-2xl mt-6 border-b-2 font-bold text-center mb-4">
        Nuestros destacados
      </h2>

      {/* Contenedor de tarjetas con desplazamiento horizontal */}
      <div className="flex justify-center overflow-x-auto py-4">
        <div className="flex gap-4 min-w-max">
          {productosDestacados.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Destacados;
