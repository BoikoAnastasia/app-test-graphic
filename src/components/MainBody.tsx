//react
import { useEffect, useState } from 'react';
//api
import { fetchDataDollars, fetchDataEuro } from '../API/fetchData';
//utils
import { ReactECharts } from '../Echarts/ReactECharts';
import { graphOption } from '../utils/getOption';
import { returnAllData } from '../utils/getData';

export const MainBody = () => {
  const [activeKey, setActiveKey] = useState<string>('dollar');
  const [currentOption, setCurrentOption] = useState<any>(null);
  const [averageCount, setAverageCount] = useState(0);
  const [title, setTitle] = useState('КУРС ДОЛЛАРА, $/₽');

  useEffect(() => {
    fetchData('dollar', fetchDataDollars, 'Курс доллара', 'КУРС ДОЛЛАРА, $/₽');
  }, []);

  const fetchData = async (
    keyname: string,
    functionFetch: () => void,
    nameKurs: string,
    title: string
  ) => {
    setActiveKey(keyname);
    setTitle(title);
    const data = await functionFetch();
    const { monthData, valueData, averageData } = returnAllData(data);
    setCurrentOption(graphOption(monthData, valueData, nameKurs));
    setAverageCount(averageData);
  };

  const changeGraphDollars = () => {
    fetchData('dollar', fetchDataDollars, 'Курс доллара', 'КУРС ДОЛЛАРА, $/₽');
  };

  const changeGraphsEuro = async () => {
    fetchData('euro', fetchDataEuro, 'Курс евро', 'КУРС ЕВРО, €/₽');
  };

  const changeGraphYen = async () => {
    fetchData('yen', fetchDataDollars, 'Курс йен', 'КУРС ЙЕН, ¥/₽');
  };

  return (
    <div className="main-content">
      <div className="header">
        <h1>{title}</h1>
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
            <p className="text">
              <span> Среднее за период</span>
              <span>
                {' '}
                <span className="cost"> {averageCount} </span>₽
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
