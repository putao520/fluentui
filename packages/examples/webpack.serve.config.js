const fs = require('fs');
const path = require('path');
const getResolveAlias = require('@uifabric/build/webpack/getResolveAlias');
const resources = require('@uifabric/build/webpack/webpack-resources');

const packageName = path.basename(process.cwd());
const demoAppPath = path.join('./src', packageName, 'demo/index.tsx');

if (packageName === 'office-ui-fabric-react') {
  module.exports = require('@uifabric/fabric-website-resources/webpack.serve.config');
} else if (!fs.existsSync(demoAppPath)) {
  console.error(`Package ${packageName} does not have a legacy demo app!`);
  process.exit(1);
}

module.exports = resources.createServeConfig({
  entry: demoAppPath,

  output: {
    filename: 'demo-app.js',
  },

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },

  resolve: {
    alias: getResolveAlias(),
  },
});
