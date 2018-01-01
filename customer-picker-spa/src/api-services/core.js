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

export const createPoint = (infoId, location, real_address) => ({
  method: 'POST',
  url: 'api/points',
  data: {
    info: infoId,
    location,
    real_address,
  }
});


export default {
  getCars,
  getInfos,
  getPoints,
  createPoint,
};