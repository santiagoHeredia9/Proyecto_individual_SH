require("dotenv").config();
const { Sequelize } = require("sequelize");

const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_DEPLOY } = process.env;



const sequelize = new Sequelize(
  DB_DEPLOY,
  {
    logging: false,
    native: false,
  }
);

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Country, Activity } = sequelize.models;

// Aca vendrian las relaciones
Country.belongsToMany(Activity, { through: "CountryActivity" });
Activity.belongsToMany(Country, { through: "CountryActivity" });

module.exports = {
  ...sequelize.models,
  Country,
  Activity,
  conn: sequelize,
};
