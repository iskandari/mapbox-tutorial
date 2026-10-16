// Shared setup: read the public token saved on the home page.
function showNotice(message) {
  const notice = document.querySelector('#notice');
  notice.textContent = message;
  notice.hidden = false;
}
let MAPBOX_TOKEN = '';
try {
  MAPBOX_TOKEN = localStorage.getItem('mapbox-public-token') || '';
} catch (error) {
  showNotice('Allow browser storage, then go back to All examples to save your token.');
}
if (!MAPBOX_TOKEN.startsWith('pk.')) {
  showNotice('Go back to All examples and save your Mapbox public token first.');
  throw new Error('Missing Mapbox public token');
}
if (!window.mapboxgl) {
  showNotice('Mapbox could not load. Check your internet connection and refresh.');
  throw new Error('Mapbox GL JS did not load');
}
if (!mapboxgl.supported()) {
  showNotice('This browser cannot run the map. Try an updated Edge or Chrome with graphics acceleration enabled.');
  throw new Error('WebGL is unavailable');
}
function reportMapErrors(map) {
  map.on('error', () => {
    showNotice('Some map data could not load. Check your internet connection and token, then refresh.');
  });
}
