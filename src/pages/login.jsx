import React, { useState } from 'react';
import "./../App.css";
import AuthBack from '../components/AuthBack';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({  
        email: "",
        password: "",
    });

    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();

    const handleTogglePassword = () => {
        setPasswordVisible(!passwordVisible);
    }
 const handleLogin = async (e) => {
        e.preventDefault();
        try {   
            const VITE_BACKEND_HOST = import.meta.env.VITE_BACKEND_HOST;
            const response = await fetch(`${VITE_BACKEND_HOST}/user/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log("Login exitoso");
                navigate("/home");
            } else {
                console.error("Error en el login");
            }
        } catch (error) {
            console.error("Error al enviar datos:", error);
        }
    }

    

    const handleregister = () => {
        navigate('/register')
    }
    return (
        <section>
            <div className='login-container'>
                <div className='authback-container'>
                    <AuthBack />
                </div>
                <div className='hellologin-container'>
                    <h1 className='hellologin-title'>Hello, </h1>
                    <p className='hellologin-text'>Sing into your account</p>
                </div>
                <div className='login-container-form'>
                <form className='login-form' onSubmit={handleLogin}>
                    <input
                        className='login-input'
                        type='text'
                        placeholder='Email'
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                    <div className='password-container'>
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            autoComplete="current-password"
                            className='login-password'
                        />
                        <span className="eye-button" onClick={handleTogglePassword}>
                            <Icon icon={passwordVisible ? eye : eyeOff} size={25} />
                        </span>
                    </div>
                    <div className='button-div'>
                        <button className='login-button'>Login</button>
                    </div>
                </form>

                    <div className='socialmedia-container'>
                        <p>or login using social media</p>
                        <div className='socialmedia-buttons-container'>
                        <button className='socialmedia-button facebook'></button>
                        <button className='socialmedia-button google'></button>
                        </div>
                    </div>
                    <div className='register-container'>
                        <p>Don't have an account? <span onClick={handleregister} className='register-span'>Register Now</span></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;