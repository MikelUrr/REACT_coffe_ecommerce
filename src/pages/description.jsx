import React, { useState, useEffect } from 'react';
import "./../App.css";
import chocolate from '../data/chocolate.json';
import { useLocation, useNavigate } from 'react-router-dom';

const Description = (props) => {
    const [selectedSize, setSelectedSize] = useState('S');
    const [quantity, setQuantity] = useState(1);
    const location = useLocation();
    const [selectedChocolate, setSelectedChocolate] = useState(null);
    const coffeeData = location.state;
    const [currentPrice, setCurrentPrice] = useState(coffeeData.price);
const navigate = useNavigate();
    console.log(coffeeData);
    const handleAddSelection = (type) => {
        setSelectedChocolate(type);
    };
    const handleSizeButtonClick = (size) => {
        setSelectedSize(size);
       
    };

    const handleQuantityChange = (event) => {
        const newQuantity = Math.min(5, Math.max(1, parseInt(event.target.value, 10) || 1));
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

    useEffect(() => {

        let updatedPrice = coffeeData.price;


        if (selectedSize === 'M') {
            updatedPrice *= 1.25;
        } else if (selectedSize === 'L') {
            updatedPrice *= 1.5;
        }


        if (selectedChocolate && selectedChocolate.name !== 'Without Chocolate') {
            updatedPrice += 1.5;
        }


        updatedPrice *= quantity;

        setCurrentPrice(updatedPrice);
    }, [selectedSize, selectedChocolate, quantity, coffeeData.price]);

    const handleSubmit = async () => {
        try {
            console.log('Datos a enviar:', {
                product: coffeeData._id,
                size: selectedSize,
                quantity: quantity,
                chocolate: selectedChocolate,
            });
    
            const VITE_BACKEND_HOST = import.meta.env.VITE_BACKEND_HOST;
    
            const response = await fetch(`${VITE_BACKEND_HOST}/cart`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    
                },
                body: JSON.stringify({
                    product: coffeeData._id,
                    size: selectedSize,
                    quantity: quantity,
                    chocolate: selectedChocolate,
                    price: currentPrice,
                }),
            });
    
            if (response.ok) {
                console.log('Datos enviados con éxito');
                // Después de recibir la respuesta 200, navega de vuelta a la página anterior
                navigate(-1);
            } else {
                console.error('Error al enviar datos:', response.statusText);
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
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
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleAddSelection(type);
                                }}
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
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleSizeButtonClick('S');
                                }}
                            >
                                S
                            </button>
                            <button
                                className={`description-buy-form-choice-size-choice-button ${selectedSize === 'M' ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleSizeButtonClick('M');
                                }}
                            >
                                M
                            </button>
                            <button
                                className={`description-buy-form-choice-size-choice-button ${selectedSize === 'L' ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleSizeButtonClick('L');
                                }}
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


                            <p className='description-price-container-price'>${currentPrice.toFixed(2)}
                            </p>

                            <div className='submit-container'>
                                <button className='description-buy-form-choice-add-button'  type='button' onClick={handleSubmit}>Buy Now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </form>
        </section>
    )
}

export default Description;



