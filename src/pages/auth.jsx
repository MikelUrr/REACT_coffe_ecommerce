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
    <img src="https://s3-alpha-sig.figma.com/img/997e/90ad/243645f2e335f3a744e8cfaa14f65b74?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cRTu0CYwiBrbTcQk-rVwT3eUIWxdCX6yaS0cxXmfS9ZLQYRHnb45MfBeBh~z9brO8PHZmuLBWMrnRWhiaL5WPllK3oMNWS651KpLcAeeHX2GqpICUTyv75s~I5BWb7iLgCO76vNggP~l5ePbDpNeI5Xg2CBAABSqYXR9jVE9bTjiBMgctatlPWYS1VdpLCr7VAfkiosm2yPJXxOCiZUmNANnv-68gHlMqQ-W9bjj3H0utU1t4gTCPkY3Pav3uhbqvbWWHr2t371dX~3wmLcLuhm4M7ZeAQQlF9ID3lz6oRRxRsN~aCgnL9bMJHWvu4MgsL5XWhQrkPvSFBn7hRUGRg__" alt="Coffee photo" />
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