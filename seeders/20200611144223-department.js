'use strict';
const uuidv4 = require('uuid/v4');


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Department', [{
      id: "1a73b15c-2c25-4643-93b2-2fb186347e47",
      archived: false,
      name: "tech-support",
      description: "Testing Department",
      updatedAt: new Date(),
      createdAt: new Date(),
      createdby: null,
      archivedBy: null
  }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Department', null, {});
  }
};
