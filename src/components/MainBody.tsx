import { useState } from 'react';
import { ReactECharts } from '../Echarts/ReactECharts';


export const MainBody = () => {
 
  const [nameChapter, setNameChapter] = useState('');

    const changeGraphDollars = () => {
        
    }

  return (
    <div className="main-content">
      <div className="header">
        <h1>КУРС ДОЛЛАРА, $/₽</h1>
        <div className="buttons">
          <button className="active" onClick={changeGraphDollars}>$</button>
          <button>€</button>
          <button>¥</button>
        </div>
      </div>
      <div className="graph">
        <ReactECharts option={option} />
        <div>Среднее за период <br /> 66,7 ₽</div>
      </div>
    </div>
  );
};
