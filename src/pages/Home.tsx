import React from "react";
import { useState } from "react";
import { products } from "../data/products";
import ProductList from "../components/ProductList/ProductList";
import '../App.css'

const Home:React.FC= () => {

    // State for filter and sort functionality
    const [categoryFilter, setCategoryFilter] = useState<string>('');
    const [sortBy, setSortBy] = useState<string>('name');
    const [showInStockOnly, setShowInStockOnly] = useState<boolean>(false);

    // Available categories from products data
    const categories = Array.from(new Set(products.map(product => product.category)));

    // Handle category filter change
    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategoryFilter(e.target.value);
    };

    // Handle sort change
    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortBy(e.target.value);
    };

    // Handle in-stock filter change
    const handleInStockChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setShowInStockOnly(e.target.checked);
    };

    return (
        <div>
            <main className="main-content">
                <h1>Product Catalog</h1>
                
                <div className="filters">
                <div className="filter-group">
                    <label htmlFor="category">Category: </label>
                    <select id="category" value={categoryFilter} onChange={handleCategoryChange}>
                    <option value="">All Categories</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                    </select>
                </div>
                
                <div className="filter-group">
                    <label htmlFor="sort">Sort By: </label>
                    <select id="sort" value={sortBy} onChange={handleSortChange}>
                    <option value="name">Name (A-Z)</option>
                    <option value="price-low">Price (Low to High)</option>
                    <option value="price-high">Price (High to Low)</option>
                    </select>
                </div>
                
                <div className="filter-group checkbox">
                    <input 
                    type="checkbox" 
                    id="inStock" 
                    checked={showInStockOnly} 
                    onChange={handleInStockChange} 
                    />
                    <label htmlFor="inStock">In Stock Only</label>
                </div>
                </div>
                
                <ProductList 
                products={products} 
                categoryFilter={categoryFilter}
                sortBy={sortBy}
                showInStockOnly={showInStockOnly}
                />
            </main>
        </div>
    );
}

export default Home;