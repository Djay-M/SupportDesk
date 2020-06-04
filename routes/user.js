const express = require('express');
// const { celebrate: validate } = require('celebrate');
// const { authorize } = require('../../middlewares/auth');
const controller = require('../controllers/user');
// const { fetchOrderId, status } = require('../../validations/v1/order.validation');

const router = express.Router();

router
  .route('/listuser')
  /**
   * @api {get} List Active User
   * @apiDescription List Active User
   * @apiVersion 1.0.0
   * @apiName Active
   * @apiGroup User
   * @apiPermission Admin
   *
   * @apiHeader {String} Authorization  User's access token
   *
   * @apiSuccess {Array} Users
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only Admin can access the data
   */
  .get(controller.listUser);

  router
  .route('/createuser')
  /**
   * @api {post} Create User
   * @apiDescription Create User
   * @apiVersion 1.0.0
   * @apiName Active
   * @apiGroup User
   * @apiPermission Admin
   *
   * @apiHeader {String} Authorization  User's access token
   *
   * @apiSuccess {Array} Users
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only Admin can access the data
   */
  .post(controller.createUser);

  router
  .route('/updateuser')
  /**
   * @api {post} Update User
   * @apiDescription Update User
   * @apiVersion 1.0.0
   * @apiName Active
   * @apiGroup User
   * @apiPermission Admin
   *
   * @apiHeader {String} Authorization  User's access token
   *
   * @apiSuccess {Array} Users
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only Admin can access the data
   */
  .post(controller.updateUser);

  router
  .route('/deleteuser')
  /**
   * @api {post} Delete User
   * @apiDescription Delete User
   * @apiVersion 1.0.0
   * @apiName Active
   * @apiGroup User
   * @apiPermission Admin
   *
   * @apiHeader {String} Authorization  User's access token
   *
   * @apiSuccess {Array} Users
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only Admin can access the data
   */
  .post(controller.deleteUser);

  router
  .route('/searchuser')
  /**
   * @api {get} List Active User
   * @apiDescription List Active User
   * @apiVersion 1.0.0
   * @apiName Active
   * @apiGroup User
   * @apiPermission Admin
   *
   * @apiHeader {String} Authorization  User's access token
   *
   * @apiSuccess {Array} Users
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only Admin can access the data
   */
  .get(controller.searchUser);

  module.exports = router;