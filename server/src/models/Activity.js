const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Activity", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.ENUM,
      values: ["1", "2", "3", "4", "5"],
      allowNull: false,
    },
    season: {
      type: DataTypes.ENUM,
      values: ["summer", "autumn", "winter", "spring"],
      allowNull: false,
    },
  });
};
