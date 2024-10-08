import { formatDate } from './formatDate';

interface IItem {
  [key: string]: string;
}

//return data array - mounth, values, average cost
export const returnAllData = (dataArr: any) => {
  const monthData = dataArr.map((item: IItem) => formatDate(item.month));
  const valueData = dataArr.map((item: IItem) => item.value);
  const averageData = valueData.reduce(
    (acc: number, number: number) => acc + number,
    0
  );
  return { monthData, valueData, averageData };
};
