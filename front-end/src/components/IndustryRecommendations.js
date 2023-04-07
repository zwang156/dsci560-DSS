import React from 'react';
// import industriesData from '../resource/industries.json';

function IndustryRecommendations({ district }) {
//   const recommendations = industriesData[district];
  const recommendations = "adjbawdbawbdakhwb";

  return (
    <div>
      <h3>Top Industries Recommendations</h3>
      <ul>
        {recommendations.map((recommendation) => (
          <li key={recommendation}>{recommendation}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndustryRecommendations;
