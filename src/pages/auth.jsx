import React from 'react';
import "./../App.css";
import AuthBack from '../components/AuthBack';
import { useNavigate } from 'react-router-dom';


const Auth = () => {
    const navigate = useNavigate();
    const handlelogin = () => {
        navigate('/login');
    }
    const handleregister = () => {
        navigate('/register');
    }

    return (
     <section>
        <div className='auth-container'>
            <div className='authback-container'>
                <AuthBack />
            </div>
<div className='foto-container'>
    <img src="cafe.png" alt="Coffee photo" />
</div>
<div className='buttons-container'>
    <button onClick={handlelogin} className='auth-button'>Login</button>
    <button onClick={handleregister} className='auth-button'>Register Now</button>
</div>
</div>

        </section>
        );
    }
    
    export default Auth;