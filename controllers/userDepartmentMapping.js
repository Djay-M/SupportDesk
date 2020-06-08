const httpStatus = require('http-status');
const models = require('../models');

const {
  User,
  Department,
  UserDepartmentMapping,
} = models;
/**
 * List Active UserDepartmentMapping
 * @public
 */
exports.listUserDepartmentMapping = async (req, res, next) => {
  try {
    const data = await UserDepartmentMapping.findAll({
      include: [{
        model: User,
      }, {
        model: Department,
      }],

    });
    return res.json({ code: httpStatus.OK, message: 'All the active UserDepartmentMapping fetched succssfully', data });
  } catch (error) {
    return next(error);
  }
};

/**
 * Create UserDepartmentMapping
 * @public
 */
exports.createUserDepartmentMapping = async (req, res, next) => {
  try {
    const data = await UserDepartmentMapping.create({
      user: req.body.user,
      department: req.body.department,
    });
    return res.json({ code: httpStatus.OK, message: 'UserDepartmentMapping Created succssfully', data });
  } catch (error) {
    return next(error);
  }
};

/**
 * Update UserDepartmentMapping
 * @public
 */
exports.updateUserDepartmentMapping = async (req, res, next) => {
  try {
    const data = await UserDepartmentMapping.update({
      user: req.body.user,
      department: req.body.department,
    }, {
      where: { id: req.query.id },
    });
    if (data > 0) return res.json({ code: httpStatus.OK, message: req.body.inDepartment === '' ? 'UserDepartmentMapping details Updated succssfully' : 'UserDepartmentMapping details Updated and moved succssfully' });
    return res.json({ code: httpStatus.OK, message: 'No UserDepartmentMapping found with this ID' });
  } catch (error) {
    return next(error);
  }
};

/**
 * Archive UserDepartmentMapping
 * @public
 */
exports.deleteUserDepartmentMapping = async (req, res, next) => {
  try {
    const data = await UserDepartmentMapping.update({
      archived: true,
    }, {
      where: { id: req.query.id },
    });
    if (data > 0) return res.json({ code: httpStatus.OK, message: 'UserDepartmentMapping Deleted succssfully' });

    return res.json({ code: httpStatus.OK, message: 'No UserDepartmentMapping found with this ID' });
  } catch (error) {
    return next(error);
  }
};

/**
 * List all users in a Department
 */
exports.listusersInDepartment = async (req, res, next) => {
  try {
    const userData = await UserDepartmentMapping.findAll({
      where: {
        department: req.query.id,
      },
      include: [{
        model: User,
        where: { archived: false },
      }, {
        model: Department,
        where: { archived: false },
      }],
    });
    return res.json({ code: httpStatus.OK, message: 'All the active Department fetched succssfully', userData });
  } catch (error) {
    return next(error);
  }
};

/**
 * List all Departments for a USER
 */
exports.listAllDepartemtForUser = async (req, res, next) => {
  try {
    const userData = await UserDepartmentMapping.findAll({
      where: {
        user: req.query.id,
      },
      include: [{
        model: User,
      }, {
        model: Department,
        where: { archived: false },
      }],
    });
    return res.json({ code: httpStatus.OK, message: 'All the active Department fetched succssfully', userData });
  } catch (error) {
    return next(error);
  }
};
