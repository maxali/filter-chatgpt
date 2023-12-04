const fs = require('fs');
const path = require('path');

const manifestPath = path.join(__dirname, '../code/manifest.json');
const manifest = require(manifestPath);

const versionParts = manifest.version.split('.');
versionParts[2] = parseInt(versionParts[2]) + 1;
manifest.version = versionParts.join('.');

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));