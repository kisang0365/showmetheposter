'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _https = require('https');

var _https2 = _interopRequireDefault(_https);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _config2 = require('./config');

var _config3 = _interopRequireDefault(_config2);

var _posts = require('./routes/posts');

var _posts2 = _interopRequireDefault(_posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;


var app = (0, _express2.default)();
var port = 3000;
var devPort = 3001;

if (process.env.NODE_ENV == 'development') {
  console.log('Server is running on development mode');

  var _config = require('../webpack.dev.config');
  var compiler = (0, _webpack2.default)(_config);
  var devServer = new _webpackDevServer2.default(compiler, _config.devServer);
  devServer.listen(devPort, function () {
    console.log('webpack-dev-server is listening on port', devPort);
  });
}
// [CONFIGURE APP TO USE bodyParser]
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());
app.use((0, _cookieParser2.default)());
// print the request log on console
app.use((0, _morgan2.default)('dev'));

app.use('/', _express2.default.static(__dirname + '/../public'));

app.get('/', function (req, res) {
  res.sendFile(_path2.default.join(__dirname, '..', 'public', 'index.html'));
});
app.get('/home', function (req, res) {
  res.sendFile(_path2.default.join(__dirname, '..', 'public', 'index.html'));
});
app.get('/opinion', function (req, res) {
  res.sendFile(_path2.default.join(__dirname, '..', 'public', 'index.html'));
});
app.get('/partner', function (req, res) {
  res.sendFile(_path2.default.join(__dirname, '..', 'public', 'index.html'));
});

app.use('/posts', _posts2.default);

_http2.default.createServer(app).listen(port, function () {
  console.log("Http server listening on port " + port);
});