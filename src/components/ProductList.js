import React, { useState, useEffect } from 'react';
import { getProducts, deleteProduct } from '../API/Service';
import { Link } from 'react-router-dom';
import './ProductList.css'; // Make sure you have this CSS file

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
            fetchProducts(); // Refresh the list
        } catch (error) {
            console.error('Error deleting product', error);
        }
    };

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id} className="product-card">
                        <Link to={`/productform/${product.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                            <h3>{product.name}</h3>
                            <p>${product.price}</p>
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                style={{ width: '100px', height: '100px', marginBottom: '10px' }}
                            />
                        </Link>
                        <button onClick={() => handleDelete(product.id)} style={{ marginTop: '10px' }}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
