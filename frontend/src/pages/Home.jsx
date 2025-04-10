//import Head from 'next/head';

//import lazy to dynamically load a component.
import React, { lazy, Suspense } from 'react';

//import dynamic from 'next/dynamic';

//import 'bootstrap/dist/css/bootstrap.min.css';

const Cesium = lazy(() => import('../components/Cesium'));
/*const Cesium = dynamic(
  () => import('../components/Cesium'),
  { ssr: false },
);*/

export default function Home() {
  return (
    <div>
      <h1 style={{ color: 'white', textAlign: 'center' }}>Hello from Home Page</h1>
      <Suspense fallback={<div style={{ color: 'white' }}>Loading map...</div>}>
        <Cesium />
      </Suspense>
    </div>
  );
}

