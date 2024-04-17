import React, { useState, useEffect } from 'react';
import AdminMenu from '../../components/Layout/AdminMenu';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);

    // Get All Products
    const getAllProducts = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-product`);
            setProducts(data.products);
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong!');
        }
    };

    // Lifecycle Method
    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <Layout>
            <div className="row">
                <div className="col-md-3">
                    <AdminMenu />
                </div>
                <div className="col-md-9">
                    <h1 className="text-center">All Products List</h1>
                    <div className="row">
                        {products.map((product) => (
                            <div key={product._id} className="col-md-4 mb-3">
                                <div className="card h-100">
                                    <Link to={`/dashboard/admin/product/${product.slug}`} className='product-link'>
                                        <img className="card-img-top" src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`} alt={product.name} style={{ width: '100%', height: '200px' }} />
                                    </Link>
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">{product.description}</p>
                                        <p className="card-text">Price: ₹{product.price}</p>
                                        <p className="card-text">Quantity: {product.quantity}</p>
                                        {/* Add more details here as needed */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Products;