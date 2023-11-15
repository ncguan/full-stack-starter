import { Model, Op } from 'sequelize';

export default function (sequelize, DataTypes) {
  class Rescue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Rescue.init({
    Name: DataTypes.STRING,
    Address: DataTypes.STRING,
    Website: DataTypes.STRING,
    Email: DataTypes.STRING,
    Phone: DataTypes.STRING,
    Services: DataTypes.STRING,
    Fee: DataTypes.STRING,
    Logo: DataTypes.STRING,
    Animals: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rescue',
  });

  Rescue.afterSave(async (record, options) => {
    record.handleAssetFile('Attachments', options);
  })

  return Rescue;
};