const express = require('express');
// const { celebrate: validate } = require('celebrate');
// const { authorize } = require('../../middlewares/auth');
const controller = require('../controllers/userRoleMapping');
// const { fetchOrderId, status } = require('../../validations/v1/order.validation');

const router = express.Router();

router
  .route('/listalluserrole')
  /**
   * @api {get} List All Active User Role Mappings
   * @apiDescription List All Active User Role Mappings
   * @apiVersion 1.0.0
   * @apiName Active
   * @apiGroup userRoleMapping
   * @apiPermission Admin
   *
   * @apiHeader {String} Authorization  User's access token
   *
   * @apiSuccess {Array} userRoleMapping
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only Admin can access the data
   */
  .get(controller.listAllUserRoleMapping);

  router
  .route('/createuserrole')
  /**
   * @api {post} Provide a User New Role
   * @apiDescription Create New Role For User
   * @apiVersion 1.0.0
   * @apiName Active
   * @apiGroup userRoleMapping
   * @apiPermission Admin
   *
   * @apiHeader {String} Authorization  User's access token
   *
   * @apiSuccess {Array} userRoleMapping
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only Admin can access the data
   */
  .post(controller.createUserRoleMapping);

  router
  .route('/updateuserrole')
  /**
   * @api {post} Update User's role
   * @apiDescription Update User's role
   * @apiVersion 1.0.0
   * @apiName Active
   * @apiGroup userRoleMapping
   * @apiPermission Admin
   *
   * @apiHeader {String} Authorization  User's access token
   *
   * @apiSuccess {Array} userRoleMapping
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only Admin can access the data
   */
  .post(controller.updateUserRoleMapping);

  router
  .route('/deleteuserrole')
  /**
   * @api {post} Delete User's role
   * @apiDescription Delete User's role
   * @apiVersion 1.0.0
   * @apiName Active
   * @apiGroup userRoleMapping
   * @apiPermission Admin
   *
   * @apiHeader {String} Authorization  User's access token
   *
   * @apiSuccess {Array} userRoleMapping
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only Admin can access the data
   */
  .post(controller.deleteUserRoleMapping );

  router
  .route('/listuserrole')
  /**
   * @api {get} List All roles for a User
   * @apiDescription List All roles for a User
   * @apiVersion 1.0.0
   * @apiName Active
   * @apiGroup userRoleMapping
   * @apiPermission Admin
   *
   * @apiHeader {String} Authorization  User's access token
   *
   * @apiSuccess {Array} userRoleMapping
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only Admin can access the data
   */
  .get(controller.listUserRoleMapping);

  module.exports = router;