const httpStatus = require('http-status');
const models = require('../models');

const {
  Department,
} = models;
/**
 * List Active Department
 * @public
 */
exports.listDepartment = async (req, res, next) => {
  try {
    const department = await Department.findAll({ where: { archived: false } });
    return res.json({ code: httpStatus.OK, message: 'All the active Department fetched succssfully', department });
  } catch (error) {
    return next(error);
  }
};

/**
 * Create Department
 * @public
 */
exports.createDepartment = async (req, res, next) => {
  try {
    const department = await Department.create({
      name: req.body.name,
      description: req.body.description,
    });
    return res.json({ code: httpStatus.OK, message: 'Department Created succssfully', department });
  } catch (error) {
    return next(error);
  }
};

/**
 * Update Department
 * @public
 */
exports.updateDepartment = async (req, res, next) => {
  try {
    const department = await Department.update({
      name: req.body.name,
      description: req.body.description,
    }, {
      where: { id: req.query.id },
    });
    if (department > 0) return res.json({ code: httpStatus.OK, message: 'Department details Updated succssfully' });
    return res.json({ code: httpStatus.OK, message: 'No Department found with this ID' });
  } catch (error) {
    return next(error);
  }
};

/**
 * Archive User
 * @public
 */
exports.deleteDepartment = async (req, res, next) => {
  try {
    const department = await Department.update({
      archived: true,
    }, {
      where: { id: req.query.id },
    });
    if (department > 0) return res.json({ code: httpStatus.OK, message: 'Department Deleted succssfully' });

    return res.json({ code: httpStatus.OK, message: 'No Department found with this ID' });
  } catch (error) {
    return next(error);
  }
};
