import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import SideDashboard from './components/SideDashboard';
import InteractiveMap from './components/InteractiveMap';
import './styles/main.css';
// import HeatMap from './components/HeatMap';

function App() {
  const [selectedDistrict, setSelectedDistrict] = useState("LA");

  return (
    <div className='container'>  
      <div className='header'>
        <Header />
      </div >
      <div className='content'>
        <InteractiveMap
          selectedDistrict={selectedDistrict}
          setSelectedDistrict={setSelectedDistrict}
        />
        <SideDashboard 
          selectedDistrict={selectedDistrict}
        />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
