const httpStatus = require('http-status');
const models = require('../models');

const {
  Role,
} = models;
/**
 * List Active Role
 * @public
 */
exports.listRole = async (req, res, next) => {
  try {
    const role = await Role.findAll({
      where: { archived: false },
    });
    return res.json({ code: httpStatus.OK, message: 'All the active Role fetched succssfully', role });
  } catch (error) {
    return next(error);
  }
};

/**
 * Create Role
 * @public
 */
exports.createRole = async (req, res, next) => {
  try {
    const role = await Role.create({
      name: req.body.name,
      description: req.body.description,
    });
    return res.json({ code: httpStatus.OK, message: 'Role Created succssfully', role });
  } catch (error) {
    return next(error);
  }
};

/**
 * Update Role
 * @public
 */
exports.updateRole = async (req, res, next) => {
  try {
    const role = await Role.update({
      name: req.body.name,
      description: req.body.description,
    }, {
      where: { id: req.query.id },
    });
    if (role > 0) return res.json({ code: httpStatus.OK, message: 'Role details Updated and moved succssfully' });
    return res.json({ code: httpStatus.OK, message: 'No Role found with this ID' });
  } catch (error) {
    return next(error);
  }
};

/**
 * Archive Role
 * @public
 */
exports.deleteRole = async (req, res, next) => {
  try {
    const role = await Role.update({
      archived: true,
    }, {
      where: { id: req.query.id },
    });
    if (role > 0) return res.json({ code: httpStatus.OK, message: 'Role Deleted succssfully' });

    return res.json({ code: httpStatus.OK, message: 'No Role found with this ID' });
  } catch (error) {
    return next(error);
  }
};
