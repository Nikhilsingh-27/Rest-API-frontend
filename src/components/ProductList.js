import React from 'react';

const ProductList = ({ products }) => {
    return (
        <div>
          <h2>Products ({products.length})</h2>
          <div className="product-list">
            {products.map((p) => (
              <div key={p._id} className="product-card">
                <h3>{p.name}</h3>
                <p><strong>Company:</strong> {p.company}</p>
                <p><strong>Price:</strong> ${p.price}</p>
                <p><strong>Rating:</strong> {p.rating}</p>
                <p><strong>Featured:</strong> {p.featured ? 'Yes' : 'No'}</p>
              </div>
            ))}
          </div>
        </div>
      );
      
};

export default ProductList;
