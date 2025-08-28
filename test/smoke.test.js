const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

if (!html.includes('PLSS Sections')) {
  console.error('PLSS Sections layer not found');
  process.exit(1);
}

console.log('PLSS Sections layer found');
