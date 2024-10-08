import { useEffect, useState } from 'react';
import { ReactECharts } from '../Echarts/ReactECharts';
import { graphOption } from '../utils/getOption';
import { returnAllData } from '../utils/getData';
import {
  fetchDataDollars,
  fetchDataEuro,
} from '../API/fetchData';

export const MainBody = () => {
  const [activeKey, setActiveKey] = useState<string>('dollar');
  const [currentOption, setCurrentOption] = useState<any>(null);
  const [averageCount, setAverageCount] = useState(0)

  useEffect(() => {
    fetchData('dollar', fetchDataDollars, 'Курс доллара');
  }, []);

  const fetchData = async (keyname: string, functionFetch: ()=>void, nameKurs: string) => {
    setActiveKey(keyname);
    const data = await functionFetch();
    const { monthData, valueData, averageData } = returnAllData(data);
    setCurrentOption(graphOption(monthData, valueData, nameKurs));
    setAverageCount(averageData)
  };

  const changeGraphDollars = () => {
    fetchData('dollar', fetchDataDollars, 'Курс доллара');
  };

  const changeGraphsEuro = async () => {
    fetchData('euro', fetchDataEuro, 'Курс евро');
  };

  const changeGraphYen = async () => {
    fetchData('yen', fetchDataDollars, 'Курс йен');
  };

  return (
    <div className="main-content">
      <div className="header">
        <h1>КУРС ДОЛЛАРА, $/₽</h1>
        <div className="buttons">
          <button
            className={` ${activeKey === 'dollar' ? 'active' : ''}`}
            onClick={changeGraphDollars}
          >
            $
          </button>
          <button
            className={` ${activeKey === 'euro' ? 'active' : ''}`}
            onClick={changeGraphsEuro}
          >
            €
          </button>
          <button
            className={` ${activeKey === 'yen' ? 'active' : ''}`}
            onClick={changeGraphYen}
          >
            ¥
          </button>
        </div>
      </div>
      {currentOption !== null && (
        <div className="graph">
          <ReactECharts option={currentOption} />
          <div>
            {/* TODO */}
            
            Среднее за период <br /> {averageCount} ₽
          </div>
        </div>
      )}
    </div>
  );
};
