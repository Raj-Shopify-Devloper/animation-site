import React, { useState } from 'react';
import productImage from '../assets/pecoshield-2k.png';
import pecobondImage from '../assets/pecobond.png';
import pecoflexImage from '../assets/pecoFlex.png';
import pecogripImage from '../assets/pecogrip.png';
import pecoPrime from '../assets/pecoprime.png';
import epoxyGroutBucket from '../assets/epoxy-grout-bucket.png';
import epoxyGrout from '../assets/epoxy-grout.png';
import polumerTileGrout from '../assets/polumer-tile-grout.png';
import smoothPutty from '../assets/smooth-putty.png';
import pecoExtreme from '../assets/peco-extreme.png';

const ProductList = () => {
    const [activeTab, setActiveTab] = useState('TILE ADHESIVE');

    const categories = [
        'TILE ADHESIVE',
        'GROUT & SEALANTS',
        'WATER PROOFING',
        'BLOCK JOINTING MORTAR',
        'WALL PUTTY'
    ];

    const adhesives = [
        { id: 1, name: 'PecoGrip', type: 'Type 1T :- C1TE', image: pecobondImage },
        { id: 2, name: 'PecoGrip', type: 'Type 1T :- C1TE', image: pecoflexImage },
        { id: 3, name: 'PecoGrip', type: 'Type 1T :- C1TE', image: pecogripImage },
        { id: 4, name: 'PecoGrip', type: 'Type 1T :- C1TE', image: pecoPrime },
        { id: 5, name: 'PecoGrip', type: 'Type 1T :- C1TE', image: pecoExtreme }
    ];
    const grouts = [
        { id: 1, name: 'PecoGrip', type: 'Type 1T :- C1TE', image: epoxyGroutBucket },
        { id: 2, name: 'PecoGrip', type: 'Type 1T :- C1TE', image: epoxyGrout },
        { id: 3, name: 'PecoGrip', type: 'Type 1T :- C1TE', image: polumerTileGrout }
    ];
    const waterproofing = [
        { id: 1, name: 'PecoGrip', type: 'Type 1T :- C1TE', image: productImage },
        { id: 2, name: 'PecoGrip', type: 'Type 1T :- C1TE', image: productImage },
        { id: 3, name: 'PecoGrip', type: 'Type 1T :- C1TE', image: productImage }
    ];
    const mortar = [
        { id: 1, name: 'PecoGrip', type: 'Type 1T :- C1TE', image: productImage },
        { id: 2, name: 'PecoGrip', type: 'Type 1T :- C1TE', image: productImage },
        { id: 3, name: 'PecoGrip', type: 'Type 1T :- C1TE', image: productImage }
    ];
    const putty = [
        { id: 1, name: 'PecoGrip', type: 'Type 1T :- C1TE', image: smoothPutty }
    ];

    return (
        <div className="product-list-page">
            <div className="product-list-container container">
                <div className="product-category-heading">
                    <div className="product-category-tabs">
                        {categories.map((category) => (
                            <button key={category} className={`category-tab f-22 f-m-18 l-h-1 w-500 white-color first-font ${activeTab === category ? 'active' : ''}`} onClick={() => setActiveTab(category)}>
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="product-grid">
                    {activeTab === 'TILE ADHESIVE' ? adhesives.map((product) => (
                        <div key={product.id} className="product-card">
                            <h3 className="product-title f-48 f-m-32 l-h-1 w-500 white-color first-font">{product.name}</h3>
                            <div className="product-image-container">
                                <img src={product.image} alt={product.name} className="product-card-image" />
                            </div>
                            <p className="product-subtitle f-28 f-m-18 l-h-1 w-500 white-color second-font">{product.type}</p>
                        </div>
                    )) : activeTab === 'GROUT & SEALANTS' ? grouts.map((product) => (
                        <div key={product.id} className="product-card">
                            <h3 className="product-title f-48 f-m-32 l-h-1 w-500 white-color first-font">{product.name}</h3>
                            <div className="product-image-container">
                                <img src={product.image} alt={product.name} className="product-card-image" />
                            </div>
                            <p className="product-subtitle f-28 f-m-18 l-h-1 w-500 white-color second-font">{product.type}</p>
                        </div>
                    )) : activeTab === 'WATER PROOFING' ? waterproofing.map((product) => (
                        <div key={product.id} className="product-card">
                            <h3 className="product-title f-48 f-m-32 l-h-1 w-500 white-color first-font">{product.name}</h3>
                            <div className="product-image-container">
                                <img src={product.image} alt={product.name} className="product-card-image" />
                            </div>
                            <p className="product-subtitle f-28 f-m-18 l-h-1 w-500 white-color second-font">{product.type}</p>
                        </div>
                    )) : activeTab === 'BLOCK JOINTING MORTAR' ? mortar.map((product) => (
                        <div key={product.id} className="product-card">
                            <h3 className="product-title f-48 f-m-32 l-h-1 w-500 white-color first-font">{product.name}</h3>
                            <div className="product-image-container">
                                <img src={product.image} alt={product.name} className="product-card-image" />
                            </div>
                            <p className="product-subtitle f-28 f-m-18 l-h-1 w-500 white-color second-font">{product.type}</p>
                        </div>
                    )) : activeTab === 'WALL PUTTY' ? putty.map((product) => (
                        <div key={product.id} className="product-card">
                            <h3 className="product-title f-48 f-m-32 l-h-1 w-500 white-color first-font">{product.name}</h3>
                            <div className="product-image-container">
                                <img src={product.image} alt={product.name} className="product-card-image" />
                            </div>
                            <p className="product-subtitle f-28 f-m-18 l-h-1 w-500 white-color second-font">{product.type}</p>
                        </div>
                    )) : null}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
