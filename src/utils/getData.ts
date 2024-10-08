import { formatDate } from "./formatDate";

// TODO any
export const returnAllData = (dataArr: any) => {
  const monthData = dataArr.map((item: any) => formatDate(item.month));
  const valueData = dataArr.map((item: any) => item.value);
  const averageData = valueData.reduce((acc:number, number:number) => acc + number, 0) 
  console.log(averageData)
  return { monthData, valueData, averageData };
};
