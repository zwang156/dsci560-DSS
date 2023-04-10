import React from 'react';
import ReactEcharts from "echarts-for-react"
import '../styles/Sider.css'
const options = {
  grid: { top: 20, right: 40, bottom: 20, left: 40 },
  xAxis: {
    show:  false,
    type: "category",
    data: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      data: [400, 300, 350, 200, 280],
      type: "pie",
      smooth: true
    }
  ],
  tooltip: {
    trigger: "axis"
  }
}
function PieChart({ district }) {
  return (
    <div className='pieChart'>
      {/* <h3>Pie Chart for {`District ${district}`}</h3> */}
      <ReactEcharts
        option={options}
        style={{ width: "100%", height: "100%" }}
      ></ReactEcharts>
    </div>
  );
}

export default PieChart;
