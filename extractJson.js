const jsonRoute = process.argv[2];
const json = require(jsonRoute);

const fs = require('fs');
const Path = require('path');
let resultXml = '';

json.pages.forEach((page) => {
  const pbId = `<pb id="${page.name}"/>`;
  const pbContent = page.content;
  resultXml += `${pbId}\n${pbContent}\n`;
});

const xmlName = Path.basename(jsonRoute, '.json');
const xmlDir = Path.dirname(jsonRoute);
const xmlRoute = `${xmlDir}/${xmlName}.xml`;

fs.writeFileSync(xmlRoute, resultXml, 'utf8');