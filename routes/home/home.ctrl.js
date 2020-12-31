"use strict";

const home = (req, res) => {
  res.render('home/index');
};

const login = (req, res) => {
  res.render(`home/login`);
};

// object 형태로 모듈.넘김 키==값 같으면 값 생략 가능
module.exports = {
  home,
  login,
} 