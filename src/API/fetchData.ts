export const fetchResponceData = async () => {
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

//   fetch('https://67046c97ab8a8f892733d05c.mockapi.io/api-graph/data/dates', {
//     method: 'GET',
//     headers: { 'content-type': 'application/json' },
//   })
//     .then((res) => {
//       if (res.ok) {
//         return res.json();
//       }
//     })
//     .then((tasks) => {
//       console.log(tasks);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
};
