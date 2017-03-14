'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var userSchema = new Schema({
    id: String,
    password: String,
    email: String,
    point: Number
});

//Saleitem이라고 단수형을 쓰면 몽고db엔 saleitems라는 컬렉션이 생성된다.
module.exports = _mongoose2.default.model('User', userSchema);