import React, { useState, useEffect }from 'react';
import ReactEcharts from "echarts-for-react"
import '../styles/Sider.css'

const DEFAULT = {
  grid: { top: 20, right: 40, bottom: 20, left: 40 },
  xAxis: {
    type: "category",
    data: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      data: [400, 300, 350, 200, 280],
      type: "line",
      smooth: true
    }
  ],
  tooltip: {
    trigger: "axis"
  }
}

function LineChart({ district }) {
  const [option, setOption] = useState(DEFAULT);

  useEffect(() => {
    if (district !== "LA"){
      const newOption = {
        grid: { top: 20, right: 40, bottom: 20, left: 40 },
        xAxis: {
          type: "category",
          data: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [100*parseInt(district), 300, 350, 200*parseInt(district), 280],
            type: "line",
            smooth: true
          }
        ]
      }
      setOption(newOption)
    }
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
