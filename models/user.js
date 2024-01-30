'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: DataTypes.STRING,
    user_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image_url: DataTypes.STRING,
    task_id: DataTypes.INTEGER,
    time_id: DataTypes.INTEGER,
    update_id: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'User',
    modelName: 'User',
  });
  return User;
};