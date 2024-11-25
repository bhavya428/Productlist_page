import React, { useState } from "react";
import productsData from "../data/products";
import ProductCard from "./ProductCard";
import QuickView from "./QuickView";

const ProductListing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [modalProduct, setModalProduct] = useState(null);

  const productsPerPage = 6; 
  const filteredProducts = productsData
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (category === "All" || product.category === category)
    )
    .sort((a, b) => (sortOrder === "asc" ? a.price - b.price : b.price - a.price));

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col lg:flex-row p-4">
      <div className="lg:w-1/4 w-full border-r pr-4 mb-4 lg:mb-0">
        <h2 className="text-lg font-bold mb-4">Filters</h2>
        <div className="mb-4">
          <label htmlFor="search" className="block font-semibold mb-2">
            Search
          </label>
          <input
            id="search"
            type="text"
            placeholder="Search by name"
            className="w-full border p-2 rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block font-semibold mb-2">
            Category
          </label>
          <select
            id="category"
            className="w-full border p-2 rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Footwear">Footwear</option>
            <option value="Wearables">Wearables</option>
            <option value="Clothing">Clothing</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>
        <div>
          <label htmlFor="sort" className="block font-semibold mb-2">
            Sort by Price
          </label>
          <select
            id="sort"
            className="w-full border p-2 rounded"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="lg:w-3/4 w-full">
        <h2 className="text-lg font-bold mb-4">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {paginatedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={() => setModalProduct(product)}
            />
          ))}
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-4 py-2 border rounded ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      {modalProduct && (
        <QuickView
          product={modalProduct}
          onClose={() => setModalProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductListing;