import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
import main from '../assets/main.jpg'
import greek from '../assets/greek salad.jpg'
import bruschetta from '../assets/bruchetta.jpg'
import cheese from '../assets/lemon dessert.jpg'

const Hero = () => {
  return (
    <section className="specials">
      <div className="all">
        <div className="header-content">
        <div className="header-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Link className="online-menu-button"  to="/reservations">Reserve a Table</Link>
        </div>
        <div className="header-image">
          <img src={main} alt="Special Dish" />
        </div>
      </div>
      </div>
      <h2>This week's specials!</h2>
      <button className="online-menu-button">Online Menu</button>
      <div className="specials-list">
        <div className="special-item">
          <img src={greek} alt="Greek Salad" />
          <h3>Greek Salad <span className="price">$12.99</span></h3>
          <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
          <Link to="/order">Order a delivery</Link>
        </div>
        <div className="special-item">
          <img src={bruschetta} alt="Bruschetta" />
          <h3>Bruschetta <span className="price">$5.89</span></h3>
          <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
          <Link to="/order">Order a delivery</Link>
        </div>
        <div className="special-item">
          <img src={cheese} alt="Lemon Dessert" />
          <h3>Lemon Dessert <span className="price">$5.00</span></h3>
          <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
          <Link to="/order">Order a delivery</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
