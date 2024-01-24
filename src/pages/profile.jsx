import React from "react";
import NavBar from "../components/NavBar";
import AuthBack from "../components/AuthBack";

const Profile = () => {
    return (
        <div className="checkout-container">
            <AuthBack />
            <h1>Profile</h1>
            <p>This is a demo web app. Due to buy options not being enabled, the profile could not be modified. Feel free to navigate to other options using the Navbar below.   </p>
            <NavBar />
        </div>
    );
}

export default Profile;
