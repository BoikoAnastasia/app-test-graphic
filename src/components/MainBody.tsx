import { useEffect, useState } from 'react';
import { ReactECharts } from '../Echarts/ReactECharts';
import { graphOption } from '../utils/getOption';
import { returnAllData } from '../utils/getData';
import { fetchResponceData } from '../API/fetchData';

export const MainBody = () => {
  const [activeKey, setActiveKey] = useState<string>('dollar');
  const [currentOption, setCurrentOption] = useState<any>(null);
  const [dataGraph, setDataGraph] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchResponceData();
      setDataGraph(data);
      const { monthData, valueData } = returnAllData(data);
      setCurrentOption(graphOption(monthData, valueData, 'Курс доллара'));
    };

    fetchData();
  }, []);

  const eureData = [
    {
      date: '2016-05-02',
      month: 'май 2016',
      indicator: 'Курс доллара',
      value: 78,
    },
    {
      date: '2016-02-01',
      month: 'июн 2016',
      indicator: 'Курс доллара',
      value: 77,
    },
  ];
  const yenData = [
    {
      date: '2016-03-02',
      month: 'июл 2016',
      indicator: 'Курс доллара',
      value: 76,
    },
    {
      date: '2016-04-01',
      month: 'авг 2016',
      indicator: 'Курс доллара',
      value: 81,
    },
    {
      date: '2016-05-02',
      month: 'сент 2016',
      indicator: 'Курс доллара',
      value: 82,
    },

    {
      date: '2016-02-01',
      month: 'фев 2016',
      indicator: 'Курс евро',
      value: 90,
    },
    {
      date: '2016-03-02',
      month: 'мар 2016',
      indicator: 'Курс евро',
      value: 88,
    },
    {
      date: '2016-04-01',
      month: 'апр 2016',
      indicator: 'Курс евро',
      value: 87,
    },
    {
      date: '2016-05-02',
      month: 'май 2016',
      indicator: 'Курс евро',
      value: 91,
    },
    {
      date: '2016-02-01',
      month: 'июн 2016',
      indicator: 'Курс евро',
      value: 92,
    },
    {
      date: '2016-03-02',
      month: 'июл 2016',
      indicator: 'Курс евро',
      value: 93,
    },
    {
      date: '2016-04-01',
      month: 'авг 2016',
      indicator: 'Курс евро',
      value: 89,
    },
    {
      date: '2016-05-02',
      month: 'сент 2016',
      indicator: 'Курс евро',
      value: 88,
    },

    {
      date: '2016-02-01',
      month: 'фев 2016',
      indicator: 'Курс юаня',
      value: 22,
    },
    {
      date: '2016-03-02',
      month: 'мар 2016',
      indicator: 'Курс юаня',
      value: 24,
    },
    {
      date: '2016-04-01',
      month: 'апр 2016',
      indicator: 'Курс юаня',
      value: 25,
    },
    {
      date: '2016-05-02',
      month: 'май 2016',
      indicator: 'Курс юаня',
      value: 21,
    },
    {
      date: '2016-02-01',
      month: 'июн 2016',
      indicator: 'Курс юаня',
      value: 23,
    },
    {
      date: '2016-03-02',
      month: 'июл 2016',
      indicator: 'Курс юаня',
      value: 24,
    },
    {
      date: '2016-04-01',
      month: 'авг 2016',
      indicator: 'Курс юаня',
      value: 26,
    },
    {
      date: '2016-05-02',
      month: 'сент 2016',
      indicator: 'Курс юаня',
      value: 19,
    },
  ];

  const changeGraphDollars = () => {
    setActiveKey('dollar');
    // const { datesData, monthData, indicatorData, valueData } =
    //   returnAllData(dataGraph);
    // setCurrentOption(graphOption(monthData, valueData, 'Курс доллара'));
  };
  const changeGraphsEuro = () => {
    setActiveKey('euro');
    // const { datesData, monthData, indicatorData, valueData } =
    //   returnAllData(dataGraph);
    // setCurrentOption(graphOption(monthData, valueData, 'Курс евро'));
  };
  const changeGraphYen = () => {
    setActiveKey('yen');
    // const { datesData, monthData, indicatorData, valueData } =
    //   returnAllData(dataGraph);
    // setCurrentOption(graphOption(monthData, valueData, 'Курс йен'));
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
      {currentOption!==null && (
        <div className="graph">
          <ReactECharts option={currentOption} />
          <div>
            {/* TODO */}
            Среднее за период <br /> 66,7 ₽
          </div>
        </div>
      )}
    </div>
  );
};
