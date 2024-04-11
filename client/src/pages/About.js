import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
    return (
        <Layout title={'About Green Delight'}>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="\images\aboutUs.jpg"
                        alt="aboutus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <p className="text-justify mt-2">
                        <h2 >Welcome to Green Delight</h2>
                        <p >
                            Green Delight is your ultimate destination for high-quality organic farm products. We are committed to providing you with the freshest and most nutritious produce directly from our partner farms.
                        </p>
                        <p >
                            Our mission is to promote sustainable agriculture and support local farmers while offering you a convenient way to access healthy and environmentally friendly products.
                        </p>
                        <p>
                            We are a team of passionate individuals who have come together with the vision of creating a green environment for Consumers and Farmers
                            Whether you're passionate about organic food or looking to make healthier choices for yourself and your family, Green Delight is here to cater to all your needs. Join us in our journey towards a greener and healthier future!
                        </p>
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default About;