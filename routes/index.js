const express = require('express');
const router = express.Router();
const User = require('./user')
const Department = require('./department')
const Ticket = require('./ticket')
const Comment = require('./comment')
const usrDepartment = require('./userDepartmentMapping')
const userRole = require('./userRoleMapping')
const Role = require('./role')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use(User);
router.use(Department);
router.use(Ticket);
router.use(Comment);
router.use(Role);
router.use(usrDepartment);
router.use(userRole);

module.exports = router;
