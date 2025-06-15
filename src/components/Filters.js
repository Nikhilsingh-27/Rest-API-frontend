import React, { useState } from 'react';

const Filters = ({ onFiltersChange }) => {
    const [filters, setFilters] = useState({
        name: '',
        company: '',
        featured: '',
        rating: '',
        sort: '',
        select: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updated = { ...filters, [name]: value };
        setFilters(updated);
        onFiltersChange(updated);
    };

    return (
        <div className="filters">
          <input name="name" placeholder="Name" onChange={handleChange} />
          <select name="company" onChange={handleChange}>
            <option value="">Select Company</option>
            <option value="apple">Apple</option>
            <option value="dell">Dell</option>
            <option value="samsung">Samsung</option>
            <option value="asus">Asus</option>
          </select>
          <select name="featured" onChange={handleChange}>
            <option value="">Featured?</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <input name="rating" placeholder="Rating" onChange={handleChange} />
          <input name="sort" placeholder="Sort (e.g. price,-rating)" onChange={handleChange} />
          <input name="select" placeholder="Select fields (e.g. name,price)" onChange={handleChange} />
        </div>
      );
      
};

export default Filters;
