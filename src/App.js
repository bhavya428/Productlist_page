import React from "react";
import ProductListing from "./components/ProductListing";

function App() {
  return (
    <div className="App">
      <header className="bg-white-600 text-black p-4 shadow-md sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Productlist</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-blue-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      
      <main className="container mx-auto mt-4">
        <ProductListing />
      </main>
    </div>
  );
}

export default App;