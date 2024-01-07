import React, { useEffect, useState } from 'react';
import "./../App.css";
import coffee from '../data/coffee.json';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const categoryCoffee = Object.keys(coffee);
  const [selectedCategory, setSelectedCategory] = useState(categoryCoffee[0]);
  const [coffeeSelection, setCoffeeSelection] = useState(coffee[selectedCategory]);

  const navigate = useNavigate();
  const handleDescription = (coffee) => {
    console.log(coffee);
    navigate('/description', { state: coffee });
  }

  const handleclick = (category) => {
    console.log(category);
    const currentCoffeeSelection = coffee[category];
    console.log(currentCoffeeSelection);

    setSelectedCategory(category);
    setCoffeeSelection(currentCoffeeSelection);
  }
  useEffect(() => {
    // Actualizar coffeeSelection cuando cambie selectedCategory
    setCoffeeSelection(coffee[selectedCategory]);
  }, [selectedCategory]);
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
        {categoryCoffee.map((category) => (
          <button key={category} onClick={() => handleclick(category)} className='home-coffee-buttons'>
            {category}
          </button>
        ))}

      </div>
      <div className='home-coffee-cards-container'>
        {coffeeSelection.map((coffee) => (
          <div key={coffee.name} className='home-coffee-card'>
            <div className="home-star-container"><img src='/star-1.svg' alt='Star' className='home-star-image' /></div>
            <button className="home-cruz-container" onClick={()=>handleDescription(coffee)}><img src='/bi-plus-lg.svg' alt='Star' className='home-cruz-image' /></button>
            <img src="/rectangle-16.png" alt={coffee.name} className='home-coffee-image' />
            <h3 className='home-coffee-name'>{coffee.name}</h3>
            <p className='home-coffee-description'>{coffee.extra}</p>
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