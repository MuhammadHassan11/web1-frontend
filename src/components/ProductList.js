import React, { useState, useEffect } from 'react';
import { getProducts, deleteProduct } from '../API/Service';
import { Link } from 'react-router-dom';
import './ProductList.css'; 

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await getProducts();
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteProduct(id);
            fetchProducts(); // Refresh the list after deletion
        } catch (error) {
            console.error('Error deleting product', error);
        }
    };

    return (
        <div className="product-list-container">
            <h2>Product List</h2>
            <div className="product-cards">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <Link to={`/productform/${product.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="product-image"
                            />
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p>${product.price}</p>
                            </div>
                        </Link>
                        <button
                            className="delete-button"
                            onClick={() => handleDelete(product.id)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
