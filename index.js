const path = require('path');

const readJSON = (path, obj) => {
  Object.entries(obj).forEach(([key, value]) => {
    key = key.toLowerCase();
    const currentPath = `${path}_${key}`;

    if (value.toString() !== '[object Object]') {
      process.env[currentPath] = value;
    } else {
      readJSON(currentPath, value);
    }
  });
};

function config() {
  let packageJSON = require(path.resolve(process.cwd(), 'package.json'));
  readJSON('npm_package', packageJSON);
}

module.exports = {
  config
};
