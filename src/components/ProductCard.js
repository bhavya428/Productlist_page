import React from "react";

const ProductCard = ({ product, onQuickView }) => {
  return (
    <div className="border p-4 rounded hover:shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-50 object-cover rounded"
      />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-green-500 font-bold mt-1">${product.price}</p>
      <button
        className="mt-2 bg-blue-600 text-white px-4 py-1 rounded hover:bg-green-500"
        onClick={onQuickView}
      >
        More
      </button>
    </div>
  );
};

export default ProductCard;