import React from 'react';
import Weather from './components/Weather';
import Navbar from './components/Navbar.js'
const App = () => {
  return (
    <div >
    <Navbar/>
      <h1 style ={{textAlign: 'center',marginRight:'auto',marginLeft: 'auto'}}>Weather App</h1>
      <Weather />
    </div>
  );
};

export default App;
