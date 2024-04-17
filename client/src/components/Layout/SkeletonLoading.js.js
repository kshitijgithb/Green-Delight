// SkeletonLoadingCard.js

import React from 'react';
import './SkeletonLoadingCard.css'; // Import CSS file for styling

const SkeletonLoadingCard = ({ cardHeight }) => {
    const cardStyle = {
        height: cardHeight // Set the height dynamically based on the loaded card's height
    };

    return (
        <div className="col">
            <div className="card custom-card skeleton-loading-card" style={cardStyle}>
                <div className="card-img-top skeleton-loading-img" />
                <div className="card-body">
                    <h5 className="card-title skeleton-loading-text" />
                    <p className="card-text skeleton-loading-text" />
                    <p className="card-text skeleton-loading-text" />
                    <div className="d-flex justify-content-between align-items-center">
                        <button className="btn btn-primary skeleton-loading-button" />
                        <button className="btn btn-secondary skeleton-loading-button" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonLoadingCard;