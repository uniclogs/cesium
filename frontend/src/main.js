import {
  Color,
  CzmlDataSource,
  Terrain,
  Viewer
} from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import "./style.css";

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Viewer("cesiumContainer", {
  terrain: Terrain.fromWorldTerrain(),
});

viewer.scene.globe.enableLighting = true;
viewer.entities.add(CzmlDataSource.load(''))

export { viewer }