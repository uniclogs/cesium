import { viewer } from "./main.js"
import { Color, Cartesian3, JulianDate, CallbackProperty, PolylineGlowMaterialProperty, CzmlDataSource } from "cesium"

const url = 'https://cesium-api.uniclogs.org/czml';
console.debug(`Fetching CZML from ${url}`)
fetch(url)
    .then(response => response.json())
    .then(data => {
        if (viewer.dataSources !== undefined) {
            viewer.dataSources.removeAll(); // clear old CZMLs
            viewer.dataSources.add(CzmlDataSource.load(data));
        }
    }).catch(res => {
        console.error(`Failed to fetch CZML with reason: ${res}`)
    });