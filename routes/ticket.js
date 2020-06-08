const express = require('express');
// const { celebrate: validate } = require('celebrate');
// const { authorize } = require('../../middlewares/auth');
const controller = require('../controllers/ticket');
// const { fetchOrderId, status } = require('../../validations/v1/order.validation');

const router = express.Router();

router
  .route('/listticket')
  /**
   * @api {get} List ALL OPEN Tickets
   * @apiDescription List OPEN Tickets
   * @apiVersion 1.0.0
   * @apiName Active
   * @apiGroup Ticket
   * @apiPermission Admin
   *
   * @apiHeader {String} Authorization  User's access token
   *
   * @apiSuccess {Array} Tickets
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only Admin can access the data
   */
  .get(controller.listTicket);

router
  .route('/createticket')
  /**
   * @api {post} Create Ticket
   * @apiDescription Create Ticket
   * @apiVersion 1.0.0
   * @apiName Active
   * @apiGroup Ticket
   * @apiPermission User
   *
   * @apiHeader {String} Authorization  User's access token
   *
   * @apiSuccess {Array} Tickets
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only Admin can access the data
   */
  .post(controller.createTicket);

router
  .route('/updateticket')
  /**
   * @api {post} Update Ticket
   * @apiDescription Update Ticket
   * @apiVersion 1.0.0
   * @apiName Active
   * @apiGroup Ticket
   * @apiPermission Admin,
   *
   * @apiHeader {String} Authorization  User's access token
   *
   * @apiSuccess {Array} Tickets
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only Admin can access the data
   */
  .post(controller.updateTicket);

router
  .route('/deleteticket')
  /**
   * @api {post} Delete Ticket
   * @apiDescription Delete Ticket
   * @apiVersion 1.0.0
   * @apiName Active
   * @apiGroup Ticket
   * @apiPermission Admin
   *
   * @apiHeader {String} Authorization  User's access token
   *
   * @apiSuccess {Array} Tickets
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only Admin can access the data
   */
  .post(controller.deleteTicket);

router
  .route('/deptticket')
  /**
   * @api {get} List All Open Ticket in a Department
   * @apiDescription List All Open Ticket in a Department
   * @apiVersion 1.0.0
   * @apiName Active
   * @apiGroup Ticket
   * @apiPermission User
   *
   * @apiHeader {String} Authorization  User's access token
   *
   * @apiSuccess {Array} Tickets
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only Admin can access the data
   */
  .get(controller.listDepartmentTickets);

router
  .route('/moveticket')
  /**
   * @api {post} Change ticket's department
   * @apiDescription Change ticket's department
   * @apiVersion 1.0.0
   * @apiName Active
   * @apiGroup Ticket
   * @apiPermission User,
   *
   * @apiHeader {String} Authorization  User's access token
   *
   * @apiSuccess {Array} Tickets
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only Admin can access the data
   */
  .post(controller.moveTicket);

router
  .route('/ticketsforuser')
  /**
   * @api {get} List all Open tickets assigned to a user
   * @apiDescription List all Open tickets assigned to a user
   * @apiVersion 1.0.0
   * @apiName Active
   * @apiGroup Ticket
   * @apiPermission User
   *
   * @apiHeader {String} Authorization  User's access token
   *
   * @apiSuccess {Array} Tickets
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only Admin can access the data
   */
  .get(controller.listAllticketsForUser);

router
  .route('/ticketscommentedbyuser')
  /**
   * @api {get} List all tickets commented by a user
   * @apiDescription List all tickets commented by a user
   * @apiVersion 1.0.0
   * @apiName Active
   * @apiGroup Ticket
   * @apiPermission Admin
   *
   * @apiHeader {String} Authorization  User's access token
   *
   * @apiSuccess {Array} Tickets
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only Admin can access the data
   */
  .get(controller.listAllticketsCommentedbyUser);

router
  .route('/searchticket')
  /**
   * @api {post} Search a ticket by title or ticketNo
   * @apiDescription Search a ticket by title or ticketNo
   * @apiVersion 1.0.0
   * @apiName Active
   * @apiGroup Ticket
   * @apiPermission User
   *
   * @apiHeader {String} Authorization  User's access token
   *
   * @apiSuccess {Array} Tickets
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only Admin can access the data
   */
  .get(controller.searchTicket);

module.exports = router;
