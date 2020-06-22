'use strict';
const uuidv4 = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User', [{
      id: "bf711924-8dc7-4e31-a779-1f93edb2f780",
      archived: false,
      firstname: "Testing1",
      lastname: "Testing1",
      mongoID: "5a37162de57e9ac43a0392d0",
      phone: "7411856661",
      updatedAt: new Date(),
      createdAt: new Date(),
      createdby: null,
      archivedBy: null
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User', null, {});
  }
};
