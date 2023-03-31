'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.Starting pgAdmin 4...
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    /**
     * function for encrypt password
     * @param {password} password 
     * @returns 
     */
    static #encrypt = (password) => bcrypt.hashSync(password, 8);

    /**
     * function to registration
     * @param {fullname, email, password} param0 
     * @returns 
     */
    static registration = ({ fullname, email, password}) => {
      const passwordHash = this.#encrypt(password)
      return this.create({
        fullname, email, password : passwordHash
      })
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    fullname: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};