import React from 'react';
import logo from './img/nokia-3310.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}  alt="moblie" usemap="#image-map"/>

      </header>
        
        <div name="image-map">
          <area target="" alt="numero1" title="numero1" href="" coords="408,368,444,395" shape="rect">
          <area target="" alt="numero2" title="numero2" href="" coords="472,383,42" shape="circle">
          <area target="" alt="numero3" title="numero3" href="" coords="559,381,18" shape="circle">
        </div>

     
    </div>
  );
}

export default App;
