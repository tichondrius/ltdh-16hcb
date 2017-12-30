export const getCars = () => ({
  method: 'GET',
  url: 'api/cars',
}); 

export const getInfos = () => ({
  method: 'GET',
  url: 'api/infos',
});

export const getPoints = () => ({
  method: 'GET',
  url: 'api/points',
});



export default {
  getCars,
  getInfos,
  getPoints,
};