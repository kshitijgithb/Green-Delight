import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import ''

const ProductDetails = () => {
    const params = useParams(); // to get the product id
    const [product, setProduct] = useState({});
    const [relatedProducts, setRelatedProducts] = useState([]);
     const [cart, setCart] = useCart();

    // Initial product Details
    useEffect(() => {
        if (params?.slug) getProduct();
    }, [params.slug]);

    // Get Product
    const getProduct = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-product/${params.slug}`);
            setProduct(data?.product);
            getSimilarProduct(data?.product?._id, data?.product.category._id);
        } catch (error) {
            console.log(error);
        }
    };

    // Get Similar Products
    const getSimilarProduct = async (pid, cid) => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/related-product/${pid}/${cid}`);
            setRelatedProducts(data?.products);
        } catch (error) {
            console.log(error);
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, // Set autoplay speed to 2 seconds
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
 const addtocart=(p) => {
                      setCart([...cart, p]);
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...cart, p])
                      );
                      toast.success("Item Added to cart");
                    };
                    
    return (
        <Layout>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <img
                            className="img-fluid rounded"
                            src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
                            alt={product.name}
                             style={{objectFit: "cover" ,height:"100%"}}
                        />
                    </div>
                    <div className="col-md-6">
                        <h1 className="display-4">{product.name}</h1>
                        <p className="lead">Description: {product.description}</p>
                        <p>Price: ₹{product.price}</p>
                        <p>Category: {product?.category?.name}</p>
                        <p>Quantity: {product.quantity}</p>
                        <p>Shipping: {product.shipping}</p>
                        <button className="btn btn-lg btn-secondary my-3" style={{ width: '100%', transition: 'transform 0.3s', transform: 'scale(1)' }}onClick={()=>addtocart(product)}>
                            <span role="img" aria-label="cart"  >🛒</span> Add to Cart
                        </button>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="row">
                    <div className="col">
                        <h3 className="text-center">Top Picks🔥</h3>
                      {relatedProducts.length > 2 ? (
    <Slider {...settings}>
        {relatedProducts.map((p) => (
            <div className="col" key={p._id}>
                {/* Product Card */}
                <Link to={`/product/${p.slug}`} style={{ textDecoration: 'none' }}>
                    <div className="card custom-card mb-3" style={{ width: '300px', height: '450px' }}>
                        <img src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={p.name} style={{ width: '100%', height: '60%' }} />
                        <div className="card-body" style={{ height: '40%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div>
                                <h5 className="card-title" style={{ color: 'black' }}>{p.name}</h5>
                                <p className="card-text" style={{ color: 'black' }}>{p.description.substring(0, 30)}...</p>
                                <p className="card-text" style={{ color: 'black' }}> ₹ {p.price}</p>
                            </div>
                            <button className="btn btn-sm btn-secondary" style={{ width: '100%', transition: 'transform 0.3s', transform: 'scale(1)' }} onClick={() => addtocart(p)}>
                                <span role="img" aria-label="cart">🛒</span> Add to Cart
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
        ))}
    </Slider>
) : (
    <div className="row">
        {relatedProducts.map((p) => (
            <div className="col" key={p._id}>
                {/* Product Card */}
                <Link to={`/product/${p.slug}`} style={{ textDecoration: 'none' }}>
                    <div className="card custom-card mb-3" style={{ width: '300px', height: '450px' }}>
                        <img src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={p.name} style={{ width: '100%', height: '60%' }} />
                        <div className="card-body" style={{ height: '40%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div>
                                <h5 className="card-title" style={{ color: 'black' }}>{p.name}</h5>
                                <p className="card-text" style={{ color: 'black' }}>{p.description.substring(0, 30)}...</p>
                                <p className="card-text" style={{ color: 'black' }}> ₹ {p.price}</p>
                            </div>
                            <button className="btn btn-sm btn-secondary" style={{ width: '100%', transition: 'transform 0.3s', transform: 'scale(1)' }} onClick={() => addtocart(p)}>
                                <span role="img" aria-label="cart">🛒</span> Add to Cart
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
        ))}
    </div>
)}

                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProductDetails;