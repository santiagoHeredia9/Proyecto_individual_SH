const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el model

  sequelize.define("Country", {
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false,
      validate: {
        len: [3, 3],
      },
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    flag: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
