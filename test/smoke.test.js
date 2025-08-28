const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const layerUrl = 'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_PLSS_Sections/FeatureServer/0';

if (!html.includes(layerUrl)) {
  console.error('PLSS Sections layer not found or URL incorrect');
  process.exit(1);
}

console.log('PLSS Sections layer found');
