import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className='navegation-container'>
      <div className='buttons-container-home'>
        <button className='nav-button' onClick={() => navigate('/home')}></button>
        <button className='nav-button' onClick={() => navigate('/favorites')}></button>
        <button className='nav-button' onClick={() => navigate('/cart')}></button>
        <button className='nav-button' onClick={() => navigate('/notification')}></button>
        <button className='nav-button' onClick={() => navigate('/profile')}></button>
      </div>
    </nav>
  );
};

export default NavBar;