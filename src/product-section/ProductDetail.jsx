import React from 'react';
import '../style/product-detail.css';
import productImage from '../assets/hero-product.png'; // Using hero-product as placeholder

const ProductDetail = () => {
    return (
        <div className="product-detail-page">
            <div className="product-detail-container">
                <div className="product-detail-image-section">
                    <img src={productImage} alt="Peco Grip" className="product-detail-image" />
                </div>

                <div className="product-detail-info-section">
                    <h1 className="product-detail-title">TILE ADHESIVE</h1>
                    <h2 className="product-detail-subtitle">Peco Grip Type 1T C1TE</h2>

                    <p className="product-description">
                        PecoGrip is a polymer modified grey cement-based adhesive for fixing of ceramic tiles on internal floor and walls. Its usage extends to Ceramic, fully vitrified, Terracotta, bricks & Porous Stones/Tiles as well. It is water resistant and does not allow cracking of tiles.
                    </p>

                    <div className="product-features-grid">
                        <div className="feature-item">
                            <svg className="feature-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                            </svg>
                            <span className="feature-label">INDOOR</span>
                            <span className="feature-sublabel">USAGE</span>
                        </div>
                        <div className="feature-item">
                            <svg className="feature-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 22c4.97 0 9-4.03 9-9-4.5 0-9-4.5-9-9-4.5 4.5-9 9-9 9 0 4.97 4.03 9 9 9z" />
                            </svg>
                            <span className="feature-label">4-5 Ltr</span>
                            <span className="feature-sublabel">PER BAG</span>
                        </div>
                        <div className="feature-item">
                            <svg className="feature-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                            </svg>
                            <span className="feature-label">24</span>
                            <span className="feature-sublabel">SET TIME</span>
                        </div>
                        <div className="feature-item">
                            <svg className="feature-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                            </svg>
                            <span className="feature-label">GREY</span>
                            <span className="feature-sublabel">COLOUR</span>
                        </div>
                    </div>

                    <div className="technical-details-section">
                        <div className="technical-header">TECHNICAL DETAILS</div>
                        <div className="technical-subheader">CONFORMS TO IS 15477-2004 : TYPE-1 T</div>
                        <table className="technical-table">
                            <tbody>
                                <tr>
                                    <td>Coverage</td>
                                    <td>Approx 45-55 sq.ft per 20kg bag</td>
                                </tr>
                                <tr>
                                    <td>Tensile Adhesion<br />Annex A (Clause 5.1)</td>
                                    <td>0.75 - 0.80 N/mm²</td>
                                </tr>
                                <tr>
                                    <td>Shear Adhesion<br />Annex B (Clause 5.2)</td>
                                    <td>1.1 - 1.2 N/mm²</td>
                                </tr>
                                <tr>
                                    <td>Slip Resistance<br />Annex E (Clause 5.5)</td>
                                    <td>0.40-0.45 mm</td>
                                </tr>
                                <tr>
                                    <td>Minimum Bed<br />Thickness required</td>
                                    <td>3 mm using 6MM X 6MM Notched trowel</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="technical-footer">
                            *Actual Coverage depends on substrate condition & method of application
                        </div>
                    </div>

                    <div className="pack-size">
                        Pack Size <span>20</span> kg
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem', opacity: 0.8 }}>
                        <p>Shelf Life</p>
                        <p>12 months from the date of manufacturing.</p>
                        <p>Stored in a original sealed sacks in a dry and closed place.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
