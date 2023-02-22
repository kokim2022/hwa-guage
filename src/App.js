import './App.css';
import ReactEcharts from "echarts-for-react"; 
import { useEffect, useState } from 'react';

function App() {
  const [option, setOption] = useState({
    series: [
      {
        type: 'gauge',
        axisLine: {
          lineStyle: {
            width: 30,
            color: [
              [0.3, '#67e0e3'],
              [0.7, '#37a2da'],
              [1, '#fd666d']
            ]
          }
        },
        pointer: {
          itemStyle: {
            color: 'inherit'
          }
        },
        axisTick: {
          distance: -30,
          length: 8,
          lineStyle: {
            color: '#fff',
            width: 2
          }
        },
        splitLine: {
          distance: -30,
          length: 30,
          lineStyle: {
            color: '#fff',
            width: 4
          }
        },
        axisLabel: {
          color: 'inherit',
          distance: 40,
          fontSize: 20
        },
        detail: {
          valueAnimation: true,
          formatter: '{value} %',
          color: 'inherit'
        },
        data: [
          {
            value: 70
          }
        ]
      }
    ]
  })
  useEffect(() => {
    const timer = setInterval(function () {
      setOption({
        series: [
          {
            data: [
              {
                value: +(Math.random() * 100).toFixed(2)
              }
            ]
          }
        ]
      });
    }, 2000);
    return () => clearInterval(timer);
  });

  return <ReactEcharts option={option}   style={{height: '500px', width: '100%'}} id="myChart" />;
}


export default App;