const userApi = require('./api/userApi');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// 初始化表
const init = require('./database')
init();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 后端api路由
app.use('/api/user', userApi);

// 监听端口
app.listen(8081);
console.log('success listen at port:8081......');