'use strict';
const uuidv4 = require('uuid/v4');


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Role', [{
      id: "b2c38d8c-b721-402e-9d9c-e3960dd119fa",
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
    return queryInterface.bulkDelete('Role', null, {});
  }
};
