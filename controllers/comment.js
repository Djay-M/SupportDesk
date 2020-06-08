const httpStatus = require('http-status');
const models = require('../models');

const {
  Comment,
} = models;
/**
 * List Active Comment
 * @public
 */
exports.listComment = async (req, res, next) => {
  try {
    const comment = await Comment.findAll();
    return res.json({ code: httpStatus.OK, message: 'All the active Comment fetched succssfully', comment });
  } catch (error) {
    return next(error);
  }
};

/**
 * Create Comment
 * @public
 */
exports.createComment = async (req, res, next) => {
  try {
    const comment = await Comment.create({
      content: req.body.content,
      ticketID: req.body.ticketID,
      createdby: req.body.createdby,
    });
    return res.json({ code: httpStatus.OK, message: 'Comment Created succssfully', comment });
  } catch (error) {
    return next(error);
  }
};

/**
 * Update Comment
 * @public
 */
exports.updateComment = async (req, res, next) => {
  try {
    const comment = await Comment.update({
      content: req.body.content,
    }, {
      where: { id: req.query.id },
    });
    if (comment > 0) return res.json({ code: httpStatus.OK, message: 'Comment details Updated succssfully' });
    return res.json({ code: httpStatus.OK, message: 'No Comment found with this ID' });
  } catch (error) {
    return next(error);
  }
};

/**
 * Archive User
 * @public
 */
exports.deleteComment = async (req, res, next) => {
  try {
    const comment = await Comment.update({
      archived: true,
    }, {
      where: { id: req.query.id },
    });
    if (comment > 0) return res.json({ code: httpStatus.OK, message: 'Comment Deleted succssfully' });

    return res.json({ code: httpStatus.OK, message: 'No Comment found with this ID' });
  } catch (error) {
    return next(error);
  }
};
