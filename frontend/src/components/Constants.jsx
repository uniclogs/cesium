// Shared constants
const REST_API = import.meta.env.VITE_API_BASE_URL;
export const VITE_API_BASE_URL = REST_API || `https://cesium-api.uniclogs.org`;
console.log(`[ENV]: Using Rest API at ${VITE_API_BASE_URL}`)

// to replace the Cesium Ion logo with just a Cesium logo
// this is not using Cesium Ion, only CesiumJS
export const CESIUM_CREDIT = '<a href="https://cesium.com/" target="_blank"><img src="cesium/Assets/Images/cesium_credit.png" title="Cesium"/></a>';

export const RETRY_DELAY = 3000; 


// PSU coordinates
export const HOME_LAT_DEG = 45.523064;
export const HOME_LONG_DEG = -122.676483;
export const HOME_ALT_M = 25000000.0;
