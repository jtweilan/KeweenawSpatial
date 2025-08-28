const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const layerUrl = 'https://gis.blm.gov/arcgis/rest/services/BLM_National_Data/PLSSCadNSDI/MapServer/16';

if (!html.includes(layerUrl)) {
  console.error('PLSS Sections layer not found or URL incorrect');
  process.exit(1);
}

console.log('PLSS Sections layer found');
