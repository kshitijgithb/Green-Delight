
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css'; // Import CSS for styling
const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling effect
    });
  };
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h1 className="logo-text">Green Delight</h1>
                    <p>
                        Green Delight is your one-stop shop for all your eco-friendly and sustainable products.
                    </p>
                    <div className="contact">
                        <span><FaFacebook /></span>
                        <span><FaTwitter /></span>
                        <span><FaInstagram /></span>
                    </div>
                </div>
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><Link to="/about" onClick={scrollToTop}>About</Link></li>
                        <li><Link to="/contact" onClick={scrollToTop}>Contact</Link></li>
                        <li><Link to="/policy" onClick={scrollToTop}>Privacy Policy</Link></li>
                    </ul>
                </div>
                <div className="footer-section contact-form">
                    <h2>Contact Us</h2>
                    <form>
                        <input type="email" name="email" className="text-input contact-input" placeholder="Your email address" />
                        <textarea rows="4" name="message" className="text-input contact-input" placeholder="Your message"></textarea>
                        <button type="submit" className="btn1 btn-primary">Send</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Green Delight. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
