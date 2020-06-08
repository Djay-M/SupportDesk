const express = require('express');
// const { celebrate: validate } = require('celebrate');
// const { authorize } = require('../../middlewares/auth');
const controller = require('../controllers/userDepartmentMapping');
// const { fetchOrderId, status } = require('../../validations/v1/order.validation');

const router = express.Router();

router
  .route('/listalluserdept')
  /**
   * @api {get} List All Active User and Department Mappings
   * @apiDescription List All Active User and Department Mappings
   * @apiVersion 1.0.0
   * @apiName Active
   * @apiGroup userDepartmentMapping
   * @apiPermission Admin
   *
   * @apiHeader {String} Authorization  User's access token
   *
   * @apiSuccess {Array}  userDepartmentMapping
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only Admin can access the data
   */
  .get(controller.listUserDepartmentMapping);

router
  .route('/createuserdept')
  /**
   * @api {post} Provide Access For a Department To a User
   * @apiDescription Create User Deapartment mapping
   * @apiVersion 1.0.0
   * @apiName Active
   * @apiGroup userDepartmentMapping
   * @apiPermission Admin
   *
   * @apiHeader {String} Authorization  User's access token
   *
   * @apiSuccess {Array}  userDepartmentMapping
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only Admin can access the data
   */
  .post(controller.createUserDepartmentMapping);

router
  .route('/updateuserdept')
  /**
   * @api {post} Update User's access to a Department
   * @apiDescription Update User's access to a Department
   * @apiVersion 1.0.0
   * @apiName Active
   * @apiGroup userDepartmentMapping
   * @apiPermission Admin
   *
   * @apiHeader {String} Authorization  User's access token
   *
   * @apiSuccess {Array}  userDepartmentMapping
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only Admin can access the data
   */
  .post(controller.updateUserDepartmentMapping);

router
  .route('/deleteuserdept')
  /**
   * @api {post} Delete User's access to a Department
   * @apiDescription Delete User's access to a Department
   * @apiVersion 1.0.0
   * @apiName Active
   * @apiGroup userDepartmentMapping
   * @apiPermission Admin
   *
   * @apiHeader {String} Authorization  User's access token
   *
   * @apiSuccess {Array}  userDepartmentMapping
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only Admin can access the data
   */
  .post(controller.deleteUserDepartmentMapping);

router
  .route('/listuserdept')
/**
 * @api {get} List All Active Users in a Department
 * @apiDescription List All Active Users in a Department
 * @apiVersion 1.0.0
 * @apiName Active
 * @apiGroup userDepartmentMapping
 * @apiPermission Admin
 *
 * @apiHeader {String} Authorization  User's access token
 *
 * @apiSuccess {Array}  userDepartmentMapping Orders
 *
 * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
 * @apiError (Forbidden 403)     Forbidden     Only Admin can access the data
 */
  .get(controller.listusersInDepartment);

router
  .route('/listdeptforuser')
/**
 * @api {get} List All Active Department For a User
 * @apiDescription List All Active Department For a User
 * @apiVersion 1.0.0
 * @apiName Active
 * @apiGroup userDepartmentMapping
 * @apiPermission Admin
 *
 * @apiHeader {String} Authorization  User's access token
 *
 * @apiSuccess {Array}  userDepartmentMapping Orders
 *
 * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
 * @apiError (Forbidden 403)     Forbidden     Only Admin can access the data
 */
  .get(controller.listAllDepartemtForUser);

module.exports = router;
