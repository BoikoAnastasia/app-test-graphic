import { useState } from 'react';
import { ReactECharts } from '../Echarts/ReactECharts';

export const MainBody = () => {
  const option = {
    color: 'rgba(243, 139, 0, 1)',
    backgroundColor: 'transparent',
    // grid: { top: 57, right: 14, bottom: 42, left: 47 },
       
    grid: {
        top: '15%',
        left: '3%',
        right: '4%',
        bottom: '1%',
        containLabel: true,
        height: '70%'
    },
    tooltip: {
      trigger: 'axis',
    },
    toolbox: {
      show: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} °C',
      },
    },
    series: [
      {
        name: 'Highest',
        type: 'line',
        data: [10, 11, 13, 11, 12, 12, 9],
      },
    ],
  };

  const [nameChapter, setNameChapter] = useState('');

  return (
    <div className="main-content">
      <div className="header">
        <h1>КУРС ДОЛЛАРА, $/₽</h1>
        <div className="buttons">
          <button className="active">$</button>
          <button>€</button>
          <button>¥</button>
        </div>
      </div>
      <div className="graph">
        <ReactECharts option={option} />
      </div>
    </div>
  );
};
