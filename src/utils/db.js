const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'postgresql://testUser:testPasswd@localhost:5433/test',
);

const connectToDb = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = { connectToDb, sequelize };
