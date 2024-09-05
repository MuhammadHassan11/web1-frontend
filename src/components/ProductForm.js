import React, { useState, useEffect } from 'react';
import { getProduct, createProduct, updateProduct, deleteProduct } from '../API/Service';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductForm.css'; // Import the CSS file

const ProductForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({ name: '', price: '', imageUrl: '' });

    useEffect(() => {
        if (id) {
            fetchProduct();
        }
    }, [id]);

    const fetchProduct = async () => {
        try {
            const response = await getProduct(id);
            setProduct(response.data);
        } catch (error) {
            console.error('Error fetching product', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                await updateProduct(id, product);
            } else {
                await createProduct(product);
            }
            navigate('/');
        } catch (error) {
            console.error('Error saving product', error);
        }
    };

    const handleDelete = async () => {
        try {
            await deleteProduct(id);
            navigate('/');
        } catch (error) {
            console.error('Error deleting product', error);
        }
    };

    return (
        <div className="product-form-container">
            <form className="product-form" onSubmit={handleSubmit}>
                <h2>{id ? 'Edit Product' : 'Add Product'}</h2>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Price:
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Image URL:
                    <input
                        type="text"
                        name="imageUrl"
                        value={product.imageUrl}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">{id ? 'Update' : 'Create'}</button>

                {id && (
                    <button
                        type="button"
                        onClick={handleDelete}
                        style={{ marginTop: '10px' }}
                    >
                        Delete
                    </button>
                )}
            </form>
        </div>
    );
};

export default ProductForm;
