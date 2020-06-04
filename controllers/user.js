const httpStatus = require('http-status');
const { Op } = require('sequelize')
const {
    compact, map, sumBy, uniq,
  } = require('lodash');
const moment = require('moment');
const models = require('../models')
const{
  User,
} = models
/**
 * List Active User
 * @public
 */
exports.listUser = async (req, res, next) => {
  try {
    const user = await User.findAll({ where: { archived: false }})
    return res.json({ code: httpStatus.OK, message: 'All the active User fetched succssfully', user });
  } catch (error) {
    return next(error);
  }
};

/**
 * Create User
 * @public
 */
exports.createUser = async (req, res, next) => {
  try {
    const user = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      mongoID: req.body.mongoID,
      phone: req.body.phone,
    })
    return res.json({ code: httpStatus.OK, message: 'User Created succssfully', user });
  } catch (error) {
    return next(error);
  }
};

/**
 * Update User
 * @public
 */
exports.updateUser = async (req, res, next) => {
  try {
    const user = await User.update({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      mongoID: req.body.mongoID,
      phone: req.body.phone,
    },{
      where: { id : req.query.id }
    })
    if(user > 0)
    return res.json({ code: httpStatus.OK, message: 'User details Updated succssfully'});
    return res.json({ code: httpStatus.OK, message: 'No user found with this ID'});
  } catch (error) {
    return next(error);
  }
};

/**
 * Archive User
 * @public
 */
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.update({
      archived: true
    },{
      where: { id : req.query.id }
    })
    if(user > 0)
    return res.json({ code: httpStatus.OK, message: 'User Deleted succssfully'});
    return res.json({ code: httpStatus.OK, message: 'No user found with this ID'});
  } catch (error) {
    return next(error);
  }
};

/**
 * Search User by FIRST OR LAST OR PHONE
 */
exports.searchUser = async (req, res, next) => {
  try {
    const query = ( req.query.searchbyphone !== undefined ) ? {
      where: { phone: req.query.searchbyphone }
    } : (req.query.search.split(" ").length > 1) ? {
      where: {
        firstname: req.query.search.split(" ")[0],
        lastname: req.query.search.split(" ")[1]
      }
    } : {
      where: {
        [Op.or]: [{
          firstname: req.query.search.split(" ")[0]
        },{
          lastname: req.query.search.split(" ")[0]
        }]
      }
    }
    const user = await User.findAll(query)
    return res.json({ code: httpStatus.OK, message: 'Fetched all User with matching data', user});
  } catch (error) {
    return next(error)
  }
}