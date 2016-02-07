import './styles/main.scss';

if (module.hot) {
  var webpackHotMiddlewareClient = require('webpack-hot-middleware/client');
  webpackHotMiddlewareClient.subscribe(function (message) {
    if (message.reload === true) {
      window.location.reload();
    }
  });

  module.hot.accept();
}
