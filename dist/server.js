"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _connection = _interopRequireDefault(require("./src/database/connection"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//dotenv package initialization
_dotenv["default"].config();

var app = (0, _express["default"])(); //db connectivity

(0, _connection["default"])(); //cors

app.use((0, _cors["default"])()); //payload middleware

app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
})); //use port defined in .env files or 3000 if not defined in the .env file

var PORT = process.env.PORT || 3000;
app.use('/images', _express["default"]["static"]('images'));
app.use('/api/v1/product', require("./src/routes/productsRoutes"));
app.get('/', function (req, resp, next) {
  resp.send('Hello from Node Server ! this is a minimalist nodejs server to get you started');
}); //app starts a server and listens on port defined in PORT variable for connections. 

app.listen(PORT, function () {
  console.log("server listenning on port ".concat(PORT));
});
app.use(function (err, req, response, next) {
  console.error(err.stack);
  response.status(500).send({
    status: 500,
    message: err.message,
    body: {}
  });
});