/* eslint-disable no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addConstraint('Notes', {
      type: 'foreign key',
      fields: ['categoryId'],
      name: 'Notes_Categories_categoryId_fkey',
      references: {
        // Required field
        table: 'Categories',
        field: 'id',
      },
    }),

  down: (queryInterface, Sequelize) =>
    queryInterface.removeConstraint('Notes', 'Notes_Categories_categoryId_fkey'),
};
