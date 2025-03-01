import React,{ useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import ProductList from '../components/ProductList/ProductList'
import './App.css'


type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
  imageUrl?:string;
};

function App() {

  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99, inStock: true,imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVqxEX0rrZQcU3jMY8ZJFxx71mgRR8lh3mvg&s" },
    { id: 2, name: 'Headphones', category: 'Electronics', price: 149.99, inStock: true,imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVqxEX0rrZQcU3jMY8ZJFxx71mgRR8lh3mvg&s" },
    { id: 3, name: 'Coffee Maker', category: 'Kitchen', price: 89.99, inStock: false,imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVqxEX0rrZQcU3jMY8ZJFxx71mgRR8lh3mvg&s" },
    { id: 4, name: 'Running Shoes', category: 'Clothing', price: 79.99, inStock: true,imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVqxEX0rrZQcU3jMY8ZJFxx71mgRR8lh3mvg&s" },
    { id: 5, name: 'Blender', category: 'Kitchen', price: 49.99, inStock: true,imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVqxEX0rrZQcU3jMY8ZJFxx71mgRR8lh3mvg&s" },
    { id: 6, name: 'Smart Watch', category: 'Electronics', price: 199.99, inStock: false,imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVqxEX0rrZQcU3jMY8ZJFxx71mgRR8lh3mvg&s" },
    { id: 7, name: 'Yoga Mat', category: 'Fitness', price: 29.99, inStock: true,imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVqxEX0rrZQcU3jMY8ZJFxx71mgRR8lh3mvg&s" },
    { id: 8, name: 'Backpack', category: 'Accessories', price: 59.99, inStock: true,imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVqxEX0rrZQcU3jMY8ZJFxx71mgRR8lh3mvg&s" },
  ]);

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
    <div className="app-container">
      <Navbar />
      
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
      
      <Footer />
    </div>
  );
}

export default App
