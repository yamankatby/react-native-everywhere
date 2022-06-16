const path = require('path');

module.exports = {
  paths: paths => {
    paths.appPublic = './web';
    paths.appHtml = './web/index.html';
    paths.appIndexJs = './index.web.js';
    paths.appBuild = path.resolve(__dirname, 'web-build');
    return paths;
  },
};
