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

router.use('/api/user',User);
router.use('/api/department',Department);
router.use('/api/ticket',Ticket);
router.use('/api/comment',Comment);
router.use('/api/role',Role);
router.use('/api/usrdepartment',usrDepartment);
router.use('/api/userrole',userRole);

module.exports = router;
