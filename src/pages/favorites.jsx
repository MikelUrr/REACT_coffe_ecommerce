import React, { useState, useEffect } from 'react';
import "./../App.css";
import AuthBack from '../components/AuthBack';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';


const Favorites = () => {

    const [favorites, setFavorites] = useState([]);


    const [showDeleteButtons, setShowDeleteButtons] = useState({});

    const navigate = useNavigate();

    const fetchFavorites = async () => {
        try {
            const VITE_BACKEND_HOST = import.meta.env.VITE_BACKEND_HOST;
            const response = await fetch(`${VITE_BACKEND_HOST}/favorites`, {
                credentials: 'include',
            });
            const data = await response.json();
         
            setFavorites(data);

            const initialShowDeleteButtonsState = {};
            data.forEach((item) => {
                initialShowDeleteButtonsState[item._id] = false;
            });
            setShowDeleteButtons(initialShowDeleteButtonsState);
        } catch (error) {
            console.error('Error fetching favorites:', error);
        }
    }

    useEffect(() => {
        fetchFavorites();
    }
        , []);

    const handleDelete = async (productId) => {
        
        try {
            const VITE_BACKEND_HOST = import.meta.env.VITE_BACKEND_HOST;
            const response = await fetch(`${VITE_BACKEND_HOST}/favorites/${productId}`, {
                method: 'DELETE',
                credentials: 'include',
              });
            const data = await response.json();
            if (response.ok) {
                fetchFavorites();
            }
        } catch (error) {
            console.error('Error deleting favorites:', error);
        }
    }
    const handleBuyNowClick = (productData) => {
        // Navigate to the "/description" route and pass the product data
        navigate("/description", { state: productData });
    };


    return (
        <>
            <div className="cart-title">
                <AuthBack />
                <h1>Favoritos</h1>
            </div>

            <div className="cart-container">
                {favorites.map((item) => (
                    <div key={item._id} className="card-container">
                        <div className="card">
                            <div
                                className="card-content"
                            >
                                <div className="card-content-image" onClick={() => {
                                    setShowDeleteButtons(prevState => ({
                                        ...prevState,
                                        [item.product._id]: !prevState[item.product._id],
                                    }));
                                }}>
                                    <div className="card-content-image-container">
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="Checkmark">
                                                    <path id="Vector" d="M10.3671 18.6931C10.2295 18.6926 10.0934 18.6639 9.96737 18.6086C9.84133 18.5534 9.728 18.4728 9.63442 18.3719L4.75683 13.1832C4.5745 12.9889 4.47683 12.7301 4.4853 12.4638C4.49376 12.1975 4.60768 11.9454 4.80199 11.7631C4.9963 11.5807 5.25508 11.4831 5.52141 11.4915C5.78773 11.5 6.03978 11.6139 6.22212 11.8082L10.357 16.2141L18.7975 6.98082C18.8831 6.87415 18.9897 6.78613 19.1106 6.72215C19.2315 6.65816 19.3642 6.61958 19.5006 6.60875C19.637 6.59793 19.7741 6.6151 19.9036 6.65921C20.0331 6.70331 20.1522 6.77343 20.2536 6.86524C20.355 6.95706 20.4366 7.06864 20.4933 7.19312C20.55 7.31761 20.5807 7.45238 20.5834 7.58915C20.5862 7.72592 20.5609 7.86181 20.5092 7.98846C20.4575 8.11512 20.3805 8.22987 20.2828 8.32567L11.1097 18.3619C11.0171 18.4646 10.9041 18.5471 10.778 18.604C10.652 18.661 10.5155 18.6914 10.3771 18.6931H10.3671Z" fill="white" />
                                                </g>
                                            </svg>
                                        </svg>
                                    </div>
                                    <img src="icoffeecart.png" alt="Coffee" />
                                </div>
                                <div className="card-content-text">
                                    <h3>{item.product.name}</h3>
                                    <div>
                                        {!showDeleteButtons[item.product._id] && (
                                            <button className="card-content-buynow-button" onClick={() => handleBuyNowClick(item.product)}>Buy Now</button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {showDeleteButtons[item.product._id] && (
                            <div className='delete-card'>
                                <button onClick={() => handleDelete(item.product._id)}>    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="43" viewBox="0 0 38 43" fill="none">
                                    <path d="M33.5243 14.3183C33.9423 14.3183 34.3215 14.5007 34.6212 14.8089C34.9005 15.138 35.0411 15.5467 35.0004 15.9786C35.0004 16.1211 33.8831 30.2498 33.245 36.1968C32.8454 39.8464 30.4927 42.0621 26.9637 42.1229C24.2502 42.1837 21.5978 42.2046 18.9862 42.2046C16.2135 42.2046 13.502 42.1837 10.87 42.1229C7.45924 42.0411 5.10451 39.7856 4.72531 36.1968C4.06884 30.2288 2.972 16.1211 2.95162 15.9786C2.93123 15.5467 3.06986 15.138 3.35121 14.8089C3.62847 14.5007 4.02806 14.3183 4.44804 14.3183H33.5243ZM23.3064 0.279388C25.1596 0.279388 26.8151 1.57277 27.2942 3.41746L27.6367 4.94772C27.914 6.19498 28.9945 7.0775 30.2381 7.0775H36.3502C37.1657 7.0775 37.8446 7.75458 37.8446 8.61614V9.41271C37.8446 10.2533 37.1657 10.9514 36.3502 10.9514H1.6083C0.790773 10.9514 0.111877 10.2533 0.111877 9.41271V8.61614C0.111877 7.75458 0.790773 7.0775 1.6083 7.0775H7.7204C8.96198 7.0775 10.0425 6.19498 10.3218 4.94981L10.6419 3.52018C11.1393 1.57277 12.7764 0.279388 14.65 0.279388H23.3064Z" fill="white" />
                                </svg></button>
                            </div>
                        )}

                    </div>
                ))}
            </div>

            <NavBar />
        </>
    );

}

export default Favorites;

