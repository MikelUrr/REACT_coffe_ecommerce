import React from "react";
import NavBar from "../components/NavBar";
import AuthBack from "../components/AuthBack";

const Checkout = () => {
    return (
        <div className="checkout-container">
            <AuthBack />
            <h1>Checkout</h1>
            <p> This is a demo web app, the buy option is not enabled. Feel free to navigate to other options using the Navbar below</p>
            <NavBar />
        </div>
    );
}

export default Checkout;
