import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
    return (
        <Layout title={'Privacy Policy'}>
            <div className="policy-container">
                <h2>Privacy Policy</h2>
                <p>
                    At Green Delight, we take your privacy seriously. This Privacy Policy outlines the types of personal information we collect and how we use it. By using our website, you consent to the collection and use of your information as described in this policy.
                </p>
                <h3>Information We Collect</h3>
                <p>
                    We collect personal information such as your name, email address, shipping address, and payment details when you place an order on our website. We may also collect non-personal information such as your IP address and browser type for analytical purposes.
                </p>
                <h3>How We Use Your Information</h3>
                <p>
                    We use the information we collect to process your orders, provide customer support, improve our products and services, and communicate with you about promotions and updates. We do not sell or share your personal information with third parties.
                </p>
                <h3>Security</h3>
                <p>
                    We implement security measures to protect your personal information from unauthorized access and use. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
                </p>
                <h3>Changes to This Policy</h3>
                <p>
                    We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting on this page. We encourage you to review this policy periodically for any updates.
                </p>
                <p>
                    If you have any questions or concerns about our Privacy Policy, please contact us at privacy@greendelight.com.
                </p>
            </div>
        </Layout>
    );
};

export default Policy;