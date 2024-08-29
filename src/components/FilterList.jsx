// src/components/FilterList.jsx
import PropTypes from "prop-types";

export const FilterList = ({ categories, onFilterCategory }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {categories.map((category) => (
        <button
          key={category}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 border-2 border-red-500" // Estilos mejorados
          onClick={() => onFilterCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

FilterList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFilterCategory: PropTypes.func.isRequired,
};
