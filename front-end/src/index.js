import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import MapPage from './pages/MapPage';
import Welcome from './pages/WelcomePage';
import ChatGPT from './components/ChatGPT';
import './styles/main.css';

function App() {
  const [selectedDistrict, setSelectedDistrict] = useState("LA");
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Welcome /> }/>
          <Route path="/map" element={ <MapPage
                                          selectedDistrict={selectedDistrict}
                                          setSelectedDistrict={setSelectedDistrict}/> }/>
          <Route path="/chat" element={ChatGPT} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
