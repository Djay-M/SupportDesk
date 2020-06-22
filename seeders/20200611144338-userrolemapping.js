'use strict';
const uuidv4 = require('uuid/v4');


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserRoleMapping', [{
      id: "601d4cec-bca0-4e2d-8b85-8c980326aebb",
      user: "bf711924-8dc7-4e31-a779-1f93edb2f780",
      role: "b2c38d8c-b721-402e-9d9c-e3960dd119fa",
      updatedAt: new Date(),
      createdAt: new Date(),
  }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserRoleMapping', null, {});
  }
};
