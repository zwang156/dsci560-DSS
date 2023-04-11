import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MoreInfo from './MoreInfo';
import { Recommendations_API } from '../utils/APIs';
import '../styles/Sider.css'

function Recommendations({ district }) {
  const [recommendations, setRecommendations] = useState([])
  // const sortedIndustries = recommendations.industries.sort((a, b) => a.rank - b.rank);
  useEffect(() => {
    const url = Recommendations_API(5411)
    axios.get(url).then(res => {
      console.log(res)
      setRecommendations([res.data,res.data,res.data,res.data,res.data]);
    })
  }, [district])
  
  return (
    <div className='recommendation'>
      <h3>Top 5 Industries Recommendations for startup:</h3>
      <ul>
      {recommendations.map(industry => {
        return <div className='industry' >
          <li>{`${industry.code}. ${industry.name}`}</li>
          <MoreInfo naics={industry.code}/>
        </div>
      })}
      </ul>
    </div>
  );
}

export default Recommendations;
