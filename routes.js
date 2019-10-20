// eslint-disable-next-line no-multi-assign
const routes = (module.exports = require('next-routes')());

routes
  .add('index', '/')
  .add('list-action', '/:action', 'index')
  .add('list-selected', '/:action/:id', 'index');
