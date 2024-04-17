import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Spinner.css"; // Import custom CSS for spinner styles

const Spinner = ({ path = "login" }) => {
    const [count, setCount] = useState(5);
    const [rotation, setRotation] = useState(0); // State to manage rotation animation
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevValue) => prevValue - 1);
            setRotation((prevRotation) => (prevRotation + 120) % 360); // Change rotation by 120 degrees
        }, 1000);
        count === 0 &&
            navigate(`/${path}`, {
                state: location.pathname,
            });
        return () => clearInterval(interval);
    }, [count, navigate, location, path]);

    return (
        <div className="spinner-container">
            <div className="spinner" style={{ transform: `rotate(${rotation}deg)` }}>
                <div className="dot" style={{ backgroundColor: "#007bff" }}></div>
                <div className="dot" style={{ backgroundColor: "#ff6347" }}></div>
                <div className="dot" style={{ backgroundColor: "#32cd32" }}></div>
            </div>
            <h1 className="text-center">Redirecting in {count} seconds</h1>
        </div>
    );
};

export default Spinner;