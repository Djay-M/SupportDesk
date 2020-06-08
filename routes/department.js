const express = require('express');
// const { celebrate: validate } = require('celebrate');
// const { authorize } = require('../../middlewares/auth');
const controller = require('../controllers/department');
// const { fetchOrderId, status } = require('../../validations/v1/order.validation');

const router = express.Router();

router
  .route('/listdepartment')
  /**
   * @api {get} List Active Department
   * @apiDescription List Active Department
   * @apiVersion 1.0.0
   * @apiName Active
   * @apiGroup Department
   * @apiPermission Admin
   *
   * @apiHeader {String} Authorization  User's access token
   *
   * @apiSuccess {Array} Department
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only Admin can access the data
   */
  .get(controller.listDepartment);

router
  .route('/createdepartment')
  /**
   * @api {post} Create Department
   * @apiDescription Create Department
   * @apiVersion 1.0.0
   * @apiName Active
   * @apiGroup Department
   * @apiPermission Admin
   *
   * @apiHeader {String} Authorization  User's access token
   *
   * @apiSuccess {Array} Department
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only Admin can access the data
   */
  .post(controller.createDepartment);

router
  .route('/updatedepartment')
  /**
   * @api {post} Update Department
   * @apiDescription Update Department
   * @apiVersion 1.0.0
   * @apiName Active
   * @apiGroup Department
   * @apiPermission Admin
   *
   * @apiHeader {String} Authorization  User's access token
   *
   * @apiSuccess {Array} Department
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only Admin can access the data
   */
  .post(controller.updateDepartment);

router
  .route('/deletedepartment')
  /**
   * @api {post} Delete Department
   * @apiDescription Delete Department
   * @apiVersion 1.0.0
   * @apiName Active
   * @apiGroup Department
   * @apiPermission Admin
   *
   * @apiHeader {String} Authorization  User's access token
   *
   * @apiSuccess {Array} Department
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only Admin can access the data
   */
  .post(controller.deleteDepartment);


module.exports = router;
