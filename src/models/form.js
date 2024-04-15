const { DataTypes, UUIDV4 } = require('sequelize');
const { sequelize } = require('../utils/db');

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
  },
  {
    tableName: 'form',
  },
);

module.exports = formModel;
