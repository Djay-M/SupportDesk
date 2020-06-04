const express = require('express');
// const { celebrate: validate } = require('celebrate');
// const { authorize } = require('../../middlewares/auth');
const controller = require('../controllers/comment');
// const { fetchOrderId, status } = require('../../validations/v1/order.validation');

const router = express.Router();

router
  .route('/listcomment')
  /**
   * @api {get} List ALl Comment 
   * @apiDescription List Active Comment
   * @apiVersion 1.0.0
   * @apiName Active
   * @apiGroup Comment
   * @apiPermission User
   *
   * @apiHeader {String} Authorization  User's access token
   *
   * @apiSuccess {Array} Comments
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only Admin can access the data
   */
  .get(controller.listComment);

  router
  .route('/createcomment')
  /**
   * @api {post} Create Comment For a Ticket
   * @apiDescription Create Comment
   * @apiVersion 1.0.0
   * @apiName Active
   * @apiGroup Comment
   * @apiPermission User
   *
   * @apiHeader {String} Authorization  User's access token
   *
   * @apiSuccess {Array} Comments
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only Admin can access the data
   */
  .post(controller.createComment);

  router
  .route('/updatecomment')
  /**
   * @api {post} Update Comment
   * @apiDescription Update Comment
   * @apiVersion 1.0.0
   * @apiName Active
   * @apiGroup Comment
   * @apiPermission User
   *
   * @apiHeader {String} Authorization  User's access token
   *
   * @apiSuccess {Array} Comments
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only Admin can access the data
   */
  .post(controller.updateComment);

  router
  .route('/deletecomment')
  /**
   * @api {post} Delete Comment
   * @apiDescription Delete Comment
   * @apiVersion 1.0.0
   * @apiName Active
   * @apiGroup Comment
   * @apiPermission Admin
   *
   * @apiHeader {String} Authorization  User's access token
   *
   * @apiSuccess {Array} Comments
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only Admin can access the data
   */
  .post(controller.deleteComment );

  module.exports = router;