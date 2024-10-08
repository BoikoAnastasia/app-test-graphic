//return data dollars
export const fetchDataDollars = async () => {
  try {
    const res = await fetch(
      'https://67046c97ab8a8f892733d05c.mockapi.io/api-graph/data/dates',
      {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      }
    );
    const data = await res.json();
    return data;
  } catch (e: any) {
    console.log(e.message);
  }
};
//return data euro
export const fetchDataEuro = async () => {
  try {
    const res = await fetch(
      'https://67046c97ab8a8f892733d05c.mockapi.io/api-graph/data/yeros',
      {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      }
    );
    const data = await res.json();
    return data;
  } catch (e: any) {
    console.log(e.message);
  }
};

//return data yen
// данная функция не используется, так как mockapi дает только 2 бесплатные api
export const fetchDataYen = async () => {
  try {
    const res = await fetch(
      'https://67046c97ab8a8f892733d05c.mockapi.io/api-graph/data/yen',
      {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      }
    );
    const data = await res.json();
    return data;
  } catch (e: any) {
    console.log(e.message);
  }
};
