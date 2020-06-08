const httpStatus = require('http-status');
const models = require('../models');

const {
  User,
  Role,
  UserRoleMapping,
} = models;
/**
 * List Active UserRoleMapping
 * @public
 */
exports.listAllUserRoleMapping = async (req, res, next) => {
  try {
    const data = await UserRoleMapping.findAll({
      include: [{
        model: User,
      }, {
        model: Role,
      }],
    });
    return res.json({ code: httpStatus.OK, message: 'All the active UserRoleMapping fetched succssfully', data });
  } catch (error) {
    return next(error);
  }
};

/**
 * Create UserRoleMapping
 * @public
 */
exports.createUserRoleMapping = async (req, res, next) => {
  try {
    const data = await UserRoleMapping.create({
      user: req.body.user,
      role: req.body.role,
    });
    return res.json({ code: httpStatus.OK, message: 'UserRoleMapping Created succssfully', data });
  } catch (error) {
    return next(error);
  }
};

/**
 * Update UserRoleMapping
 * @public
 */
exports.updateUserRoleMapping = async (req, res, next) => {
  try {
    const data = await UserRoleMapping.update({
      user: req.body.user,
      role: req.body.role,
    }, {
      where: { id: req.query.id },
    });
    if (data > 0) return res.json({ code: httpStatus.OK, message: req.body.inDepartment === '' ? 'UserRoleMapping details Updated succssfully' : 'UserRoleMapping details Updated and moved succssfully' });
    return res.json({ code: httpStatus.OK, message: 'No UserRoleMapping found with this ID' });
  } catch (error) {
    return next(error);
  }
};

/**
 * Archive UserRoleMapping
 * @public
 */
exports.deleteUserRoleMapping = async (req, res, next) => {
  try {
    const data = await UserRoleMapping.update({
      archived: true,
    }, {
      where: { id: req.query.id },
    });
    if (data > 0) return res.json({ code: httpStatus.OK, message: 'UserRoleMapping Deleted succssfully' });

    return res.json({ code: httpStatus.OK, message: 'No UserRoleMapping found with this ID' });
  } catch (error) {
    return next(error);
  }
};

/**
 * list UserRoleMapping for a user
 * @public
 */
exports.listUserRoleMapping = async (req, res, next) => {
  try {
    const data = await UserRoleMapping.findAll({
      where: { user: req.query.user },
      include: [{
        model: Role,
      }],
    });
    return res.json({ code: httpStatus.OK, message: 'All the active UserRoleMapping fetched succssfully', data });
  } catch (error) {
    return next(error);
  }
};
