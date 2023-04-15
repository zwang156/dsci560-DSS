import React from 'react';
// import { Link } from 'react-router-dom'
import Header from '../components/Header';
import SideDashboard from '../components/SideDashboard';
import InteractiveMap from '../components/InteractiveMap';
import '../styles/main.css';

export default function MapPage( {selectedDistrict, setSelectedDistrict} ){
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
    )
  }