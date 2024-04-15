'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('form', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mobilenumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      occasiondate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      donatingForFamilyFriends: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      recipientName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      recipientMobile: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      recipientEmail: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('form');
  },
};
