import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import './ProductList.css';

type Product = {
    id: number;
    name: string;
    category: string;
    price: number;
    inStock: boolean;
  };

const ProductList: React.FC<{
    products: Product[];
    categoryFilter: string;
    sortBy: string;
    showInStockOnly: boolean;
    }> = ({products, categoryFilter, sortBy, showInStockOnly}) => {

    const filteredProducts = products.filter(product => {
        // Filter by category if a category is selected
        const categoryMatch = categoryFilter === '' || product.category === categoryFilter;
        
        // Filter by in-stock status if checkbox is checked
        const stockMatch = !showInStockOnly || product.inStock;
        
        return categoryMatch && stockMatch;
    });
    
    // SORT: Sort the filtered products
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
        } else if (sortBy === 'price-low') {
        return a.price - b.price;
        } else if (sortBy === 'price-high') {
        return b.price - a.price;
        }
        return 0;
    });
    
    // Check if no products match the filters
    if (sortedProducts.length === 0) {
        return (
        <div className="no-products">
            <p>No products match your filters. Try changing your selection.</p>
        </div>
        );
    }
    
    // MAP: Create a ProductCard component for each product
    return (
        <div className="product-list">
        {sortedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
        ))}
        </div>
    );
}

export default ProductList;