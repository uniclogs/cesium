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

// viewer.entities.add({
//     position: Cartesian3.fromDegrees(-100.0, 40.0, 5000000.0),
//     point: {
//         pixelSize: 1,
//         color: Color.ORANGE,
//     },
//     name: "Satellite",
//     path: {
//         show: true,
//         material: new PolylineGlowMaterialProperty({
//             glowPower: 0.5,
//             color: Color.ORANGE,
//         }),
//         width: 5,
//         leadTime: JulianDate.fromIso8601("2025-04-16T00:00:00Z"),
//         trailTime: JulianDate.fromIso8601("2025-04-20T00:00:00Z"),
//         positions: new CallbackProperty(function () {
//             // Calculate the positions of the satellite over time
//             return [
//                 new Cartesian3.fromDegrees(-100.0, 40.0, 500000.0),
//                 new Cartesian3.fromDegrees(-90.0, 40.0, 500000.0),
//                 new Cartesian3.fromDegrees(-80.0, 40.0, 500000.0),
//             ];
//         }, false),
//     },
// });