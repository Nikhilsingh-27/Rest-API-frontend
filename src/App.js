import React, { useState, useEffect } from 'react';
import Filters from './components/Filters';
import ProductList from './components/ProductList';
import Pagination from './components/Pagination';
import './App.css';

function App() {
  const [query, setQuery] = useState({});
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    const params = new URLSearchParams({ ...query, page });

    const res = await fetch(`https://rest-api-backend-vl50.onrender.com/api/products?${params}`);
    const json = await res.json();
    setProducts(json.data || []);
  };

  useEffect(() => {
    fetchProducts();
  }, [query, page]);

  return (
    <div className="container">
      <h1>Product Explorer</h1>
      <Filters onFiltersChange={(filters) => {
        setQuery(filters);
        setPage(1);
      }} />
      <ProductList products={products} />
      <Pagination page={page} setPage={setPage} />
    </div>

  );
}

export default App;
