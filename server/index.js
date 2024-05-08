const axios = require("axios");
const server = require("./src/server.js");
const { conn } = require("./src/db.js");
const firstFetch = require("./src/controllers/firstFetch.js");
const PORT = 3001;

conn
  .sync({ force: true })
  .then(async () => {
    const countriesInDataBase = await firstFetch();
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
