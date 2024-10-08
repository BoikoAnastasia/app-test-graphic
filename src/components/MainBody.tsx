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
    const fetchData = async () => {
      const data = await fetchDataDollars();
      const { monthData, valueData, averageData } = returnAllData(data);
      setCurrentOption(graphOption(monthData, valueData, 'Курс доллара'));
      setAverageCount(averageData)
    };
    fetchData();
  }, []);

  const changeGraphDollars = async () => {
    setActiveKey('dollar');
    const data = await fetchDataDollars();
    const { monthData, valueData, averageData } = returnAllData(data);
    setCurrentOption(graphOption(monthData, valueData, 'Курс доллара'));
    setAverageCount(averageData)
  };
  const changeGraphsEuro = async () => {
    setActiveKey('euro');
    const data = await fetchDataEuro();
    const { monthData, valueData, averageData } = returnAllData(data);
    setCurrentOption(graphOption(monthData, valueData, 'Курс евро'));
    setAverageCount(averageData)
  };

  const changeGraphYen = async () => {
    setActiveKey('yen');
    const data = await fetchDataDollars();
    const { monthData, valueData, averageData } = returnAllData(data);
    setCurrentOption(graphOption(monthData, valueData, 'Курс йен'));
    setAverageCount(averageData)
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
