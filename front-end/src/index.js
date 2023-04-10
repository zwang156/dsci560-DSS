// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './styles/index.css';
// import App from './components/App';
// import reportWebVitals from './utils/reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import SideDashboard from './components/SideDashboard';
import './styles/main.css';
import InteractiveMap from './components/InteractiveMap';

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
