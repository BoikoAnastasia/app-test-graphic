export const graphOption = (monthData:any, valueData:any) => {
    const option = {
    color: 'rgba(243, 139, 0, 1)',
    backgroundColor: 'transparent',
    grid: {
      top: '15%',
      left: '3%',
      right: '0%',
      bottom: '1%',
      containLabel: true,
      height: '70%',
      width: '86%',
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
      data: monthData,
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value}',
      },
      //TODO min значение вместо 0
    },
    series: [
      {
        // TODO менять в зависимости от курса
        name: 'Курс доллара',
        type: 'line',
        data: valueData,
      },
    ],
  };
  return option;
};
