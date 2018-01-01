const { GEO_CODING_TYPE_ERROR } = require('./enums');

export const codeAddress = (address) => new Promise((resolve, reject) => {
    const geoCoder = new window.google.maps.Geocoder();
    
    
    geoCoder.geocode({
      address,
    }, (results, status) => {
      // Lấy kết quả đầu tiên
      if (status === 'OK') {
        if (Array.isArray(results) && results.length > 0) {
          const result = results[0];
          resolve({
            name: result.formatted_address,
            location: {
              lat: result.geometry.location.lat(),
              lng: result.geometry.location.lng(),
            }
          });
        }
      }
      reject(GEO_CODING_TYPE_ERROR.NOT_FOUND);
    });
  });


  export const geocodeLatLng = ({ lat, lng}) => new Promise((resolve, reject) => {
    const geoCoder = new window.google.maps.Geocoder();
    
    var latlng = {lat: parseFloat(lat), lng: parseFloat(lng)};
    if (Number.isNaN(latlng.lat) || Number.isNaN(latlng.lng)) {
      reject(GEO_CODING_TYPE_ERROR.FORMAT_ERROR);
      return;
    }
    geoCoder.geocode({'location': latlng}, function(results, status) {
      if (status === 'OK') {
        if (Array.isArray(results) && results.length > 0) {
          const result = results[0];
          resolve({
            name: result.formatted_address,
            location: {
              lat: result.geometry.location.lat(),
              lng: result.geometry.location.lng(),
            }
          });
        }
      }
      reject(GEO_CODING_TYPE_ERROR.NOT_FOUND)
    });
  });