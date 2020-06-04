const express = require('express');
// const { celebrate: validate } = require('celebrate');
// const { authorize } = require('../../middlewares/auth');
const controller = require('../controllers/role');
// const { fetchOrderId, status } = require('../../validations/v1/order.validation');

const router = express.Router();

router
  .route('/listrole')
  /**
   * @api {get} List Active Roles
   * @apiDescription List Active Role
   * @apiVersion 1.0.0
   * @apiName Active
   * @apiGroup Role
   * @apiPermission Admin
   *
   * @apiHeader {String} Authorization  User's access token
   *
   * @apiSuccess {Array} Roles
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only Admin can access the data
   */
  .get(controller.listRole);

  router
  .route('/createrole')
  /**
   * @api {post} Create Role
   * @apiDescription Create Role
   * @apiVersion 1.0.0
   * @apiName Active
   * @apiGroup Role
   * @apiPermission Admin
   *
   * @apiHeader {String} Authorization  User's access token
   *
   * @apiSuccess {Array} Roles
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only Admin can access the data
   */
  .post(controller.createRole);

  router
  .route('/updaterole')
  /**
   * @api {post} Update Role
   * @apiDescription Update Role
   * @apiVersion 1.0.0
   * @apiName Active
   * @apiGroup Role
   * @apiPermission Admin
   *
   * @apiHeader {String} Authorization  User's access token
   *
   * @apiSuccess {Array} Roles
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only Admin can access the data
   */
  .post(controller.updateRole);

  router
  .route('/deleterole')
  /**
   * @api {post} Delete Role
   * @apiDescription Delete Role
   * @apiVersion 1.0.0
   * @apiName Active
   * @apiGroup Role
   * @apiPermission Admin
   *
   * @apiHeader {String} Authorization  User's access token
   *
   * @apiSuccess {Array} Roles
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only Admin can access the data
   */
  .post(controller.deleteRole );

  module.exports = router;