import React, { useState } from "react";
import "./../App.css";
import AuthBack from "../components/AuthBack";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const VITE_BACKEND_HOST = import.meta.env.VITE_BACKEND_HOST;
      const response = await fetch(`${VITE_BACKEND_HOST}/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

        },
        body: JSON.stringify(formData),
      });

      // Verificar el estado de la respuesta
      if (response.ok) {
        // Procesar la respuesta o navegar a otra página si es necesario
        console.log("Registro exitoso");
        navigate("/login");
      } else {
        console.error("Error en el registro");
      }
    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <section className="register-container-page">
      <div className="authback-container">
        <AuthBack />
      </div>
      <div className="helloregister-container">
        <h1 className="helloregister-title">Create Account</h1>
      </div>
      <div className="register-container-form">
        <form className="register-form" onSubmit={handleRegister}>
          <input
            className="register-input"
            type="text"
            placeholder="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            className="register-input"
            type="text"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className="register-input"
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            className="register-input"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <div className="button-div">
            <button type="submit" className="register-button">
              Register
            </button>
          </div>
        </form>
      </div>

      <div className='socialmedia-container'>
        <p>or register using social media</p>
        <div className='socialmedia-buttons-container'>
          <button className='socialmedia-button facebook'></button>
          <button className='socialmedia-button google'></button>
        </div>
      </div>
      <div className='login-register-container'>
        <p>Already have an account?<span onClick={handleLogin} className='register-span'>Login</span></p>
      </div>

    </section>
  );
}

export default Register;
