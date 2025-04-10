/*import React, { memo } from 'react';
import { Viewer, Clock, CameraFlyTo } from 'resium';
import {
  UrlTemplateImageryProvider, GeographicTilingScheme, ClockStep, Credit, Cartesian3, ImageryLayer,
} from 'cesium';
import DataFetcher from './DataFetcher';
import Overlay from './Overlay';
import {
  BACKEND_REST_API, CESIUM_CREDIT, HOME_LONG_DEG, HOME_LAT_DEG, HOME_ALT_M,
} from './Constants';
import 'bootstrap/dist/css/bootstrap.min.css';

const imageryProvider = new UrlTemplateImageryProvider({
  url: BACKEND_REST_API + '/tiles/{z}/{x}/{y}.png',
  tilingScheme: new GeographicTilingScheme(),
  minimumLevel: 0,
  maximumLevel: 5,
});

function Cesium() {
  return (
    <Viewer
      baseLayerPicker={false} // uses Cesium Ion
      geocoder={false} // uses Cesium Ion
      baseLayer={new ImageryLayer(imageryProvider)}
      credit={new Credit(CESIUM_CREDIT)}
      full
    >
      <CameraFlyTo destination={Cartesian3.fromDegrees(HOME_LONG_DEG, HOME_LAT_DEG, HOME_ALT_M)} />
      <Clock clockStep={ClockStep.SYSTEM_CLOCK} />
      <DataFetcher />
      <Overlay />
    </Viewer>
  );
}

export default memo(Cesium);*/

import React, { memo } from 'react';
import { Viewer, Clock, CameraFlyTo, ImageryLayer } from 'resium';
import {
  UrlTemplateImageryProvider,
  GeographicTilingScheme,
  ClockStep,
  Cartesian3,
} from 'cesium';

import DataFetcher from './DataFetcher';
import Overlay from './Overlay';
import {
  BACKEND_REST_API,
  CESIUM_CREDIT,
  HOME_LONG_DEG,
  HOME_LAT_DEG,
  HOME_ALT_M,
} from './Constants';

import 'bootstrap/dist/css/bootstrap.min.css';

// Set up your imagery provider
const imageryProvider = new UrlTemplateImageryProvider({
  url: `${BACKEND_REST_API}/tiles/{z}/{x}/{y}.png`,
  tilingScheme: new GeographicTilingScheme(),
  minimumLevel: 0,
  maximumLevel: 5,
});

function Cesium() {
  return (
    <Viewer
      full
      baseLayerPicker={false}
      geocoder={false}
      credit={CESIUM_CREDIT}
    >
      {/* Custom imagery layer */}
      <ImageryLayer imageryProvider={imageryProvider} />

      {/* Smooth camera fly to PSU */}
      <CameraFlyTo
        destination={Cartesian3.fromDegrees(HOME_LONG_DEG, HOME_LAT_DEG, HOME_ALT_M)}
        duration={2}
      />

      <Clock clockStep={ClockStep.SYSTEM_CLOCK} />
      <DataFetcher />
      <Overlay />
    </Viewer>
  );
}

export default memo(Cesium);

