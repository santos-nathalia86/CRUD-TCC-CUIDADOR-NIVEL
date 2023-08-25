'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_nivei extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_nivei.init({
    tb_nivel_desc: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tb_nivei',
  });
  return tb_nivei;
};