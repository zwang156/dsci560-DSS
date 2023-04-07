import React from 'react';
import IndustryRecommendations from './IndustryRecommendations';
import LineChart from './LineChart';
import PieChart from './PieChart';

function Dashboard({ selectedDistrict }) {
  return (
    <div>
      <h2>{`District ${selectedDistrict} Dashboard`}</h2>
      <IndustryRecommendations district={selectedDistrict} />
      <LineChart district={selectedDistrict} />
      <PieChart district={selectedDistrict} />
    </div>
  );
}

export default Dashboard;
