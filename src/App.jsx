import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Intro from './pages/intro'
import Auth from './pages/auth';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import Description from './pages/description';
import Cart from './pages/cart';
import Favorites from './pages/favorites';
import Checkout from './pages/checkout';
import Notification from './pages/notification';
import Profile from './pages/profile';



function App() {
  return (
    <div className='App'>
      <Router>
        <div>

          <Routes>
            <Route path='/' element={<Intro />}></Route>
            <Route path='/auth' element={<Auth />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/description' element={<Description />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/favorites' element={<Favorites />} />   
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/notification' element={<Notification />} />
        <Route path='/profile' element={<Profile />} />
        {/*
        <Route path='/stats' element={<Stats />} /> */}
            <Route path='*' element={<div>404 Not found</div>}></Route>
          </Routes>
        </div>

      </Router>

    </div>
  );
}

export default App
