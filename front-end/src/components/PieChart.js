import React, { useState, useEffect }from 'react';
import ReactEcharts from "echarts-for-react"
import axios from 'axios';
import { API_Active_Business } from '../utils/APIs';
import '../styles/Sider.css'

function PieChart({ district }) {
  const [option, setOption] = useState({});
  useEffect(() => {
    axios.get(API_Active_Business(district)).then(res => {
      // console.log(res);
      const data = res.data
      const pie_data = data.industries.map( item => {
        return {
          name: item.code,
          value: item.active.slice(-1)[0],
        }
      })
      const newOption = {
        grid: { top: 20, right: 40, bottom: 20, left: 40 },
        // legend: {
        //   type: 'scroll',
        //   orient: 'vertical',
        //   right: 10,
        //   top: 20,
        //   bottom: 20,
        //   data: pie_data.map( i => {
        //     return i.name
        //   })
        // },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
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
  }, [district])
  
  return (
    <div className='pieChart'>
      {/* <h3>Pie Chart for {`District ${district}`}</h3> */}
      <ReactEcharts
        option={option}
        // style={{ width: "100%", height: "100%" }}
      ></ReactEcharts>
    </div>
  );
}

export default PieChart;
