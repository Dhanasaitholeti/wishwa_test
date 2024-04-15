const { DataTypes, UUIDV4 } = require('sequelize');
const { sequelize } = require('../utils/db');
const { validate } = require('validator');

const formModel = sequelize.define(
  'form',
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Name is required',
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'Invalid email address',
        },
      },
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
  },
  {
    tableName: 'form',
  },
);

module.exports = formModel;
