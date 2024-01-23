import React, { useEffect, useState } from 'react';
import "./../App.css";
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [categoryCoffee, setCategoryCoffee] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [coffeeSelection, setCoffeeSelection] = useState([]);

  const navigate = useNavigate();

  const fetchCategories = async () => {
    try {
      const VITE_BACKEND_HOST = import.meta.env.VITE_BACKEND_HOST;
      const response = await fetch(`${VITE_BACKEND_HOST}/product/categories`);
      const data = await response.json();
      setCategoryCoffee(data.product[1]);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  const fetchCoffee = async () => {
    try {
      const VITE_BACKEND_HOST = import.meta.env.VITE_BACKEND_HOST;
      const response = await fetch(`${VITE_BACKEND_HOST}/product/category/${selectedCategory}`);
      const data = await response.json();
      
      setCoffeeSelection(data.product);
    } catch (error) {
      console.error("Error fetching coffee:", error);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []); 

  useEffect(() => {
    if (categoryCoffee.length > 0) {
      setSelectedCategory(categoryCoffee[0]);
    }
  }, [categoryCoffee]);

  useEffect(() => {
    if (selectedCategory) {
      fetchCoffee();
    }
  }, [selectedCategory]);

  const handleDescription = (coffee) => {
    navigate('/description', { state: coffee });
  }

  const handleclick = (category) => {
    const currentCoffeeSelection = coffeeSelection[category] || [];
    setSelectedCategory(category);
    setCoffeeSelection(currentCoffeeSelection);
  
    // Quitar la clase especial del primer botón al hacer clic
    const firstButton = document.querySelector('.home-coffee-buttons.first-button');
    if (firstButton) {
      firstButton.classList.remove('first-button');
    }
  }
  return (
    <section className='home-container'>
      <header className='home-header'>
        <button className='home-category'>
        </button>
        <button className='home-user-img'>
        </button>
      </header>
      <div className='home-text-container'>
        <h2 className='home-title'>Find the best Coffee to your taste</h2>
      </div>
      <div className='search-container'>
        <form className='search-form'>

          <input
            className='search-input'
            type='text'
            placeholder='Search'
          />
          <button className='search-submit-button'></button>
        </form>
        <button className='filter-button'><img src='Filter.svg' alt='Filter' className='filter-image' /></button>
      </div>

      <div className='home-coffee-container'>
      {categoryCoffee.map((category, index) => (
  <button
    key={category}
    onClick={() => handleclick(category)}
    className={`home-coffee-buttons ${index === 0 && category === selectedCategory ? 'active first-button' : ''}`}
    disabled={category === selectedCategory}
  >
    {category.charAt(0).toUpperCase() + category.slice(1)}
  </button>
))}


      </div>
      <div className='home-coffee-cards-container'>
        {coffeeSelection.map((coffee) => (
          <div key={coffee.name} className='home-coffee-card'>
            <div className="home-star-container"><img src='/star-1.svg' alt='Star' className='home-star-image' /></div>
            <button className="home-cruz-container" onClick={()=>handleDescription(coffee)}><img src='/bi-plus-lg.svg' alt='Star' className='home-cruz-image' /></button>
            {/* <img src={coffee.photo} alt={coffee.name} className='home-coffee-image' /> */}
            <img src="/Rectangle-18.png" alt='Coffee' className='home-coffee-image' />
            <h3 className='home-coffee-name'>{coffee.name}</h3>
            <p className='home-coffee-description'>{coffee.subtitle}</p>
            <p className='home-coffee-price'><span className='home-dolar'>$</span>{coffee.price}</p>

          </div>
        ))}
      </div>


      <div className='home-coffee-reccomended-container'>
        <h2 className='home-coffee-reccomended-title'>Special for you</h2>

        <div className='home-coffee-reccomended-card'>
          <img src="/Rectangle-18.png" alt='Coffee' className='home-coffee-reccomended-image' />
          <p className='home-coffee-reccomended-name'>Specially mixed and brewd within you must try</p>
        </div>
      </div>

      <NavBar />
    </section>
  );
}

export default Home;