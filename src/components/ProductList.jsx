// src/components/ProductList.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import { CardProduct } from "./CardProduct";
import { FilterList } from "./FilterList";

export const ProductList = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );
  categories.unshift("Todos");

  const handleFilterCategory = (category) => {
    if (category === "Todos") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div>
      <FilterList
        categories={categories}
        onFilterCategory={handleFilterCategory}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};
