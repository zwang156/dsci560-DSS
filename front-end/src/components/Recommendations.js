import React from 'react';
import MoreInfo from './MoreInfo';
import '../styles/Sider.css'

function Recommendations({ district }) {
//   const recommendations = industriesData[district];
  const recommendations = {
    "industries" : [
      {'name': 'health',
        "rank": 8},
      {'name': 'auto',
        "rank": 2},
      {'name': 'resturant',
        "rank": 6},
      {'name': 'sport',
        "rank": 4},
      {'name': 'shop',
        "rank": 3},
    ]
  };
  const sortedIndustries = recommendations.industries.sort((a, b) => a.rank - b.rank);

  return (
    <div className='recommendation'>
      <h3>Top 5 Industries Recommendations for startup:</h3>
      <ul>
      {sortedIndustries.map(industry => {
        return <div className='industry' >
          <li>{`${industry.rank}. ${industry.name}`}</li>
          <MoreInfo />
        </div>
      })}
      </ul>
    </div>
  );
}

export default Recommendations;
