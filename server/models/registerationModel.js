const sequelize = require('../database/db');
const { DataTypes } = require('sequelize');
const speakeasy = require('speakeasy');


const registerationModel = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstname: {
    type: DataTypes.STRING,
    unique: true,
  },
  lastname: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },
  contactNumber: {
    type: DataTypes.INTEGER,
  },
  businessName: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: 'user',
  },
  secretKey: {
    type: DataTypes.STRING,
    unique: true,
  },
});

// Function to generate and set a new 2FA secret key for a user
registerationModel.generateSecretKey = async function () {
  const secret = speakeasy.generateSecret({ length: 20 });
  console.log("secret........",secret);
  return secret.base32;
};

module.exports = registerationModel;
