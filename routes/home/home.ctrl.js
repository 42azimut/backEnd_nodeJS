<<<<<<< HEAD
"use strict"

const home = (req, res) => {
    res.render(`home/index`);
};

const login = (req, res) => {
    res.render(`home/login`);
};

module.exports = {
    home,
    login,
};
=======
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
>>>>>>> 81edc993ed56a6393a9ec3f1c4946ea4ad8c823d
