import React, { useState, useEffect }from 'react';
import ReactEcharts from "echarts-for-react"
import axios from 'axios';
import { API_Active_Business } from '../utils/APIs';
import '../styles/Sider.css'

function PieChart({ district }) {
  const [option, setOption] = useState({});
  useEffect(() => {
    axios.get(API_Active_Business(district)).then(res => {
      console.log(res);
      const data = res.data
      const pie_data = data.industris.map( item => {
        return {
          name: item.name,
          value: item.data[0] * Math.floor(Math.random() * 9) + 1,
        }
      })
      const newOption = {
        grid: { top: 20, right: 40, bottom: 20, left: 40 },
        xAxis: {
              type: "category",
              data: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]
            },
        yAxis: {
          type: "value"
        },
        series: {
          name: "industries",
          data: pie_data,
          type: "pie",
          smooth: true
        }
      }
      setOption(newOption)
    })
      // const newOption = {
      //   grid: { top: 20, right: 40, bottom: 20, left: 40 },
      //   xAxis: {
      //     type: "category",
      //     data: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]
      //   },
      //   yAxis: {
      //     type: "value"
      //   },
      //   series: [
      //     {
      //       data: [100*parseInt(district), 300, 350, 200, 280],
      //       type: "pie",
      //       smooth: true
      //     }
      //   ]
      // }
    
  }, [district])
  
  
  
  
  return (
    <div className='pieChart'>
      {/* <h3>Pie Chart for {`District ${district}`}</h3> */}
      <ReactEcharts
        option={option}
        style={{ width: "100%", height: "100%" }}
      ></ReactEcharts>
    </div>
  );
}

export default PieChart;
