import React, { useState } from 'react';
import './Bookingform.css';

const Bookingform = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    numberOfDiners: '',
    occasion: '',
    seating: 'Standard'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="booking-form-container">
      <h2>Find a table for any occasion</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label>Date</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Time</label>
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Number of Diners</label>
          <select name="numberOfDiners" value={formData.numberOfDiners} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="form-group">
          <label>Occasion</label>
          <select name="occasion" value={formData.occasion} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group seating-options">
          <label>Seating options</label>
          <div>
            <input type="radio" name="seating" value="Standard" checked={formData.seating === 'Standard'} onChange={handleChange} />
            <label>Standard</label>
          </div>
          <div>
            <input type="radio" name="seating" value="Outside" checked={formData.seating === 'Outside'} onChange={handleChange} />
            <label>Outside</label>
          </div>
        </div>
        <button type="submit">Let's go</button>
      </form>
    </div>
  );
};

export default Bookingform;
