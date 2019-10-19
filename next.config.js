const withSass = require('@zeit/next-sass');

const resourcesLoader = {
  loader: 'sass-resources-loader',
  options: {
    resources: ['./themes/_colors.scss']
  }
};

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]'
  },
  webpack(config) {
    // eslint-disable-next-line array-callback-return
    config.module.rules.map(rule => {
      if (
        rule.test.source.includes('scss') ||
        rule.test.source.includes('sass')
      ) {
        rule.use.push(resourcesLoader);
      }
    });
    return config;
  }
});
