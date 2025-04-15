import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import cesium from 'vite-plugin-cesium';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cesium()],
  optimizeDeps: {
    exclude: [
      'cesium/Source/Workers/createVerticesFromHeightmap',
      'cesium/Source/Workers/transferTypedArrayTest',
      'cesium/Source/Widgets/InfoBox/InfoBoxDescription.css',
    ]
  },
  define: {
    CESIUM_BASE_URL: JSON.stringify('/cesium'),
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined, // optional: avoids code splitting issues
      }
    }
  },
  base: './',
})

