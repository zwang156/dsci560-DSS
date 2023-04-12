import React, { useState, useEffect }from 'react';
import ReactEcharts from "echarts-for-react"
import axios from 'axios';
import { API_Change_Ratio } from '../utils/APIs';
import '../styles/Sider.css'

function LineChart({ district }) {

  const [option, setOption] = useState({});

  useEffect(() => {
    axios.get(API_Change_Ratio(district)).then(res => {
      console.log(res);
      const data = res.data
      const newOption = {
        grid: { top: 20, right: 40, bottom: 20, left: 40 },
        xAxis: {
          type: "category",
          data: data.time
        },
        yAxis: {
          type: "value"
        },
        series: data.industris.map( industris => {
          return {
            name: industris.name,
            data: industris.data.map(value => {
              const randomNum = Math.floor(Math.random() * 9) + 1; // generate a random number between 1 and 9
              return value * randomNum; // multiply the data value by the random number
            }),
            type: "line",
            smooth: true
          }
        })
      }
      setOption(newOption)
    })
      

  }, [district])
  return (
    <div className='lineChart'>
      {/* <h3>Line Chart for {`District ${district}`}</h3> */}
      <ReactEcharts
        option={option}
        style={{ width: "100%", height: "100%" }}
      ></ReactEcharts>
    </div>
  );
}

export default LineChart;
