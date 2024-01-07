import React, { useState } from 'react';
import "./../App.css";
import chocolate from '../data/chocolate.json';
import { useLocation } from 'react-router-dom';

const Description = (props) => {
    const [selectedSize, setSelectedSize] = useState('S');
    const [quantity, setQuantity] = useState(1);
    const location = useLocation();
    const [selectedChocolate, setSelectedChocolate] = useState(null);
    const coffeeData = location.state;
    console.log(coffeeData);

    const handleAddSelection = (type) => {
        setSelectedChocolate(type);
    };
    const handleSizeButtonClick = (size) => {
        setSelectedSize(size);
        // Puedes realizar otras acciones aquí si es necesario
    };

    const handleQuantityChange = (event) => {
        const newQuantity = Math.max(1, parseInt(event.target.value, 10) || 0);
        setQuantity(newQuantity);
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        setQuantity(Math.max(1, quantity - 1));
    };

    const handleBackButton = () => {
        window.history.back();
    };

    

    return (
        <section className='description-container'>
            <div className='description-header-container'>
                <div className='description-header'>
                    <div className='description-header-arrow'>
                        <button onClick={handleBackButton} className='description-header-arrow-button'></button>
                    </div>
                    <div className='description-header-heart'>
                        <button className='description-header-heart-button'></button>
                    </div>
                    <div className='description-header-info'>
                        <h3 className='description-header-info-title'>{coffeeData.name}</h3>
                        <p className='home-coffee-info-extra'>{coffeeData.extra}</p>
                    </div>
                </div>
            </div>
            <div className='description-text'>
                <h1 className='description-text-title'>Description</h1>
                <p className='description-text-paragraph'>{coffeeData.description}{coffeeData.description}{coffeeData.description}</p>
            </div>
            <form className='description-buy-form'>
                <div className='description-buy-form-choice'>
                    <div className='description-buy-form-choice-title'>
                        <h2>Choose of Chocolate</h2>
                    </div>
                    <div className='description-buy-form-choice-chocolate'>
                        {chocolate.chocolateChoices.map((type) => (
                            <button
                                key={type.id}
                                value={type.name}
                                className={`description-buy-form-choice-chocolate-button ${selectedChocolate === type ? 'active' : ''}`}
                                onClick={() => handleAddSelection(type)}
                            >
                                {type.name}
                            </button>
                        ))}
                    </div>
                </div>
                <div className='description-buy-form-size'>
                    <div className='description-buy-form-choice-title'>
                        <h2>Size</h2>
                    </div>
                    <div className='description-buy-form-choice-size'>
                        <div className='description-buy-form-choice-size-choice'>
                            <button
                                className={`description-buy-form-choice-size-choice-button ${selectedSize === 'S' ? 'active' : ''}`}
                                onClick={() => handleSizeButtonClick('S')}
                            >
                                S
                            </button>
                            <button
                                className={`description-buy-form-choice-size-choice-button ${selectedSize === 'M' ? 'active' : ''}`}
                                onClick={() => handleSizeButtonClick('M')}
                            >
                                M
                            </button>
                            <button
                                className={`description-buy-form-choice-size-choice-button ${selectedSize === 'L' ? 'active' : ''}`}
                                onClick={() => handleSizeButtonClick('L')}
                            >
                                L
                            </button>
                        </div>
                        <div className='description-buy-form-choice-size-quantity'>
                            <button type="button" onClick={handleDecrement}>-</button>
                            <input type="number" value={quantity} onChange={handleQuantityChange} />

                            <button type="button" onClick={handleIncrement}>+</button>
                        </div>
                    </div>
                    <div className='description-buy-form-choice-add'>
                        <div className='description-buy-form-choice-title'>
                            <h2>Price</h2>

                        </div>
                        <div className='descrption-price-container'>


                            <p className='description-price-container-price'>2.34$
                            </p>

                            <div className='submit-container'>
                                <button className='description-buy-form-choice-add-button'>Buy Now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </form>
        </section>
    )
}

export default Description;



