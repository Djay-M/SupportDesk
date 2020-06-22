'use strict';
const uuidv4 = require('uuid/v4');


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserDepartmentMapping', [{
      id: "7e714223-666a-4236-a55d-ec14b4fa368e",
      user: "bf711924-8dc7-4e31-a779-1f93edb2f780",
      department: "1a73b15c-2c25-4643-93b2-2fb186347e47",
      updatedAt: new Date(),
      createdAt: new Date(),
  }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserDepartmentMapping', null, {});
  }
};
