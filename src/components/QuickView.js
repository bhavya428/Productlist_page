import React from "react";

const QuickView = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">{product.name}</h2>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded mb-4"
        />
        <p className="text-gray-700 mb-2">{product.description}</p>
        <p className="text-green-500 font-bold">${product.price}</p>
        <button
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default QuickView;