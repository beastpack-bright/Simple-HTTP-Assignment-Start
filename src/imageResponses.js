const fs = require('fs');

const spongegarImage = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getDankMemes = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' }); // Set correct MIME type for PNG
  response.write(spongegarImage);
  response.end();
};

module.exports.getDankMemes = getDankMemes;
