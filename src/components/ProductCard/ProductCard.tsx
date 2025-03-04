import React from "react";
import './ProductCard.css';

type Product = {
    id: number;
    name: string;
    category: string;
    price: number;
    inStock: boolean;
    imageUrl?: string;
  };

const ProductCard: React.FC<{product: Product}> = ({product}) => {
    return (
        <div className="product-card">
          <div className="product-image">
            {/* In a real app, you would use an actual image */}
            <div className="placeholder-image">
                <img src={product.imageUrl} alt="" />
            </div>
          </div>
          <div className="product-info">
            <h3>{product.name}</h3>
            <p className="category">{product.category}</p>
            <p className="price">${product.price.toFixed(2)}</p>
            <p className={`stock-status ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </p>
            <button className="add-to-cart-btn" disabled={!product.inStock}>
              {product.inStock ? 'Add to Cart' : 'Sold Out'}
            </button>
          </div>
        </div>
      );
}

export default ProductCard;