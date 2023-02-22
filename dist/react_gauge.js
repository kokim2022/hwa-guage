import ReactEcharts from "echarts-for-react";
import { useState } from 'react';
function ReactGuage({
  firstColor,
  secondColor,
  thirdColor,
  value,
  style
}) {
  const [option, setOption] = useState({
    series: [{
      type: 'gauge',
      axisLine: {
        lineStyle: {
          width: 30,
          color: [[0.3, firstColor], [0.7, secondColor], [1, thirdColor]]
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
      data: [{
        value: value
      }]
    }]
  });
  return /*#__PURE__*/React.createElement(ReactEcharts, {
    option: option,
    style: style
  });
}
export default ReactGuage;