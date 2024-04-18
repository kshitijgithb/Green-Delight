import React from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/search";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
const Search = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate(); // Define navigate function
  const [cart, setCart] = useCart()

  return (
    <Layout title={"Search results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-4">
            {values?.results.map((p) => (
              <div className="col" key={p._id}>
                <div className="card h-100">
                  <img
                    src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                    onClick={() => navigate(`/product/${p.slug}`)}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text">{p.description.substring(0, 30)}...</p>
                      <p className="card-text">₹ {p.price}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-primary" style={{ transition: "transform 0.3s", marginRight: "8px" }}

                        onClick={() => navigate(`/product/${p.slug}`)}

                      >More Details</button>
                      <button className="btn btn-secondary" style={{ transition: "transform 0.3s", transform: "scale(1)" }}

                        onClick={() => {

                          setCart([...cart, p])

                          localStorage.setItem('cart', JSON.stringify([...cart, p]))



                          toast.success('Item Added to Cart')

                        }}

                      >
                        <span style={{ marginRight: "5px" }}>🛒</span>Add to Cart
                      </button>
                    </div>
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

export default Search;
