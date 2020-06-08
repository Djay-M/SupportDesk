const httpStatus = require('http-status');
const { Op } = require('sequelize')
const {
    compact, map, sumBy, uniq,
  } = require('lodash');
const moment = require('moment');
const models = require('../models')
const{
  User,
  Department,
  Comment,
  Ticket
} = models
/**
 * List Active Ticket
 * @public
 */
exports.listTicket = async (req, res, next) => {
  try {
    const ticket = await Ticket.findAll({
        where: { archived: false },
        include: [{ 
            model: Comment,
            where: { archived: false }
           },
           { 
            model: User,
           }]
    })
    return res.json({ code: httpStatus.OK, message: 'All the active Ticket fetched succssfully', ticket });
  } catch (error) {
    return next(error);
  }
};

/**
 * Create Ticket
 * @public
 */
exports.createTicket = async (req, res, next) => {
  try {
    const ticket = await Ticket.create({
        ticketNo: req.body.ticketNo,
        title: req.body.title,
        priorityTag: req.body.priorityTag,
        assignedTo: req.body.assignedTo,
        inDepartment: req.body.inDepartment,
        createdby: req.body.createdby,
    })
    return res.json({ code: httpStatus.OK, message: 'Ticket Created succssfully', ticket });
  } catch (error) {
    return next(error);
  }
};

/**
 * Update Ticket
 * @public
 */
exports.updateTicket = async (req, res, next) => {
  try {
      const data = {
        title: req.body.title === ""  ? undefined : req.body.title,
        priorityTag: req.body.priorityTag === "" ? undefined : req.body.priorityTag,
        assignedTo: req.body.assignedTo === ""  ? undefined: req.body.assignedTo,
    }
    console.log(data)
    const ticket = await Ticket.update(data,{
      where: { id : req.query.id }
    })
    if(ticket > 0 )
    return res.json({ code: httpStatus.OK, message: 'Ticket details Updated succssfully' });
    return res.json({ code: httpStatus.OK, message: 'No Ticket found with this ID'});
  } catch (error) {
    return next(error);
  }
};

/**
 * Archive Ticket
 * @public
 */
exports.deleteTicket = async (req, res, next) => {
  try {
    const ticket = await Ticket.update({
      archived: true
    },{
      where: { id : req.query.id }
    })
    if(ticket > 0)
    return res.json({ code: httpStatus.OK, message: 'Ticket Deleted succssfully'});

    return res.json({ code: httpStatus.OK, message: 'No Ticket found with this ID'});
  } catch (error) {
    return next(error);
  }
};

/**
 * List and sort(ASC/DESC) All the open tickets in the Department.
 */
exports.listDepartmentTickets = async (req, res, next) => {
  try {
    const openTickets = await Ticket.findAll({
      where: {
        inDepartment: req.query.department,
        closed: false,
        archived: false
      },
      order: [
        [req.query.sortby, req.query.order]
      ],
      include: [{
        model: Comment
      }]
    })
    return res.json({ code: httpStatus.OK, message: 'Fetched All OPEN tickets succssfully', openTickets});
  } catch (error) {
    return next(error);
  }
}

/**
 * Changing ticket's inDepartment(Moving a ticket)
 */
exports.moveTicket = async(req, res, next) => {
  try {
    console.log(req.query.id)
    const ticketData = await Ticket.update({
      inDepartment: req.body.inDepartment
    },{
      where: {
        id: req.query.id
      }
    })
    console.log(ticketData)
    if(ticketData > 0 )
    return res.json({ code: httpStatus.OK, message: 'Ticket Moved succssfully' });
    return res.json({ code: httpStatus.OK, message: 'No Ticket found with this ID'});
  } catch (error) {
    return next(error)
  }
}

/**
 * List All tickets for a user (assignedTo)
 */
exports.listAllticketsForUser = async (req, res, next) => {
  try {
    const alltickets = await Ticket.findAll({
      where: {
        assignedTo: req.query.id,
        archived: false
      },
      include: [{
        model: Comment,
        where: { archived: false }
      }]
    })
    return res.json({ code: httpStatus.OK, message: 'All open tickets fetched successfully', alltickets });
  } catch (error) {
    return next(error)
  }
}

/**
 * List All tickets commented by a user 
 */
exports.listAllticketsCommentedbyUser = async (req, res, next) => {
  try {
    const alltickets = await Ticket.findAll({
      where: {
        archived: false
      },
      include: [{
        model: Comment,
        where: { 
          createdby: req.query.id,
          archived: false 
        }
      }]
    })
    return res.json({ code: httpStatus.OK, message: 'All open tickets fetched successfully', alltickets });
  } catch (error) {
    return next(error)
  }
}

/**
 * Search Ticket by ticketNo or title
 */
exports.searchTicket = async (req, res, next) => {
  try {
    const query = (req.query.ticketno !== undefined) ? {
      where: {
        ticketNo: req.query.ticketno
      }
    } : {
      where: {
        title: { 
          [Op.regexp]: req.query.title 
        }
      }
    }
    console.log(query)
    const alltickets = await Ticket.findAll(query)
    return res.json({ code: httpStatus.OK, message: 'All open tickets fetched successfully', alltickets });
  } catch (error) {
    return next(error)
  }
}