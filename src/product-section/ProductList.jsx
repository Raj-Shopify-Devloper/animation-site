import React, { useState } from 'react';
import '../style/product-list.css';
import productImage from '../assets/hero-product.png'; // Using hero-product as placeholder

const ProductList = () => {
    const [activeTab, setActiveTab] = useState('TILE ADHESIVE');

    const categories = [
        'TILE ADHESIVE',
        'GROUT & SEALANTS',
        'WATER PROOFING',
        'BLOCK JOINTING MORTAR',
        'WALL PUTTY'
    ];

    // Mock data for products
    const products = [
        { id: 1, name: 'PecoGrip', type: 'Type 1T :- C1TE', image: productImage },
        { id: 2, name: 'PecoGrip', type: 'Type 1T :- C1TE', image: productImage },
        { id: 3, name: 'PecoGrip', type: 'Type 1T :- C1TE', image: productImage },
        { id: 4, name: 'PecoGrip', type: 'Type 1T :- C1TE', image: productImage },
        { id: 5, name: 'PecoGrip', type: 'Type 1T :- C1TE', image: productImage },
    ];

    return (
        <div className="product-list-page">
            <div className="product-list-container">
                <div className="product-category-tabs">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`category-tab ${activeTab === category ? 'active' : ''}`}
                            onClick={() => setActiveTab(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="product-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <div className="product-image-container">
                                <img src={product.image} alt={product.name} className="product-card-image" />
                            </div>
                            <h3 className="product-title">{product.name}</h3>
                            <p className="product-subtitle">{product.type}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
