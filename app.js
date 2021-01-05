"use strict";

//모듈
const express = require('express');
const app = express();

const PORT = 3000;

// 라우팅
const home = require("./routes/home");

// 앱 세팅
app.set('views', './views');
app.set('view engine', 'ejs'); // ejs 엔진으로 뷰를 해석

app.use("/", home);  // use >>> 미들웨어middelware 등록해주는 메서드

module.exports = app;