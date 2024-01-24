import React from "react";
import NavBar from "../components/NavBar";
import AuthBack from "../components/AuthBack";

const Notification = () => {
    return (
        <div className="checkout-container">
            <AuthBack />
            <h1>Notification</h1>
            <p> This is a demo web app, notifications are not enabled. Feel free to navigate to other options using the Navbar below.  </p>
            <NavBar />
        </div>
    );
}

export default Notification;
