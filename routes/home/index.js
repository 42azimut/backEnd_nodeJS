"use strict";

const express = require('express');
const router = express.Router();
const ctrl = require('./home.ctrl');

<<<<<<< HEAD
const ctrl = require("./home.ctrl");

=======
>>>>>>> 81edc993ed56a6393a9ec3f1c4946ea4ad8c823d
router.get('/', ctrl.home);
router.get('/login', ctrl.login);

module.exports = router;