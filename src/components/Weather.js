import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css'

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState({});

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://weatherapp-server2.onrender.com/api/weather?city=${city}`)
    
      setWeatherData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      console.log(city)
    }
  };

  return (
     
    <div className='main'>
      <input type="text" value={city} placeholder="Enter City Name..." onChange={e => setCity(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {weatherData.city && (
        <div className='content'>
          
          {/* <p>City: {city}</p> */}
          <div className='details'>
          <h2>Weather of {weatherData.city}</h2>
          {/* <p>Temperature :{weatherData.temperature} °C</p>
          <p>Description :{weatherData.description}</p>
          <p>Humidity :{weatherData.humidity} %</p>
          <p>Wind Speed :{weatherData.windspeed} m/s</p>
          <p>Wind Direction :{weatherData.winddirection}°</p>
          <p>Pressure :{weatherData.pressure} mBar</p> */}
          <table className='table1'>
            <tr>
              <td>Temperature</td>
              <td>:</td>  
              <td>{weatherData.temperature} °C</td>
            </tr>
            <tr>
              <td>Description</td>
              <td> :</td>
              <td>{weatherData.description}</td>
            </tr>
            <tr>
              <td>Humidity</td>
              <td>:</td>
              <td>{weatherData.humidity} %</td>
            </tr>
            <tr>
              <td>Wind Speed</td>
              <td>:</td>
              <td>{weatherData.windspeed} m/s</td>
            </tr>
            <tr>
              <td>Pressure</td>
              <td>:</td>
              <td>{weatherData.pressure} mBar</td>
            </tr>
          </table>
          </div>
        </div>
      )}
    </div>
    
  );

};

export default Weather;
