
const server = require("./src/server.js");
const { conn } = require("./src/db.js");
const firstFetch = require("./src/controllers/firstFetch.js");
const PORT = 3001;

conn
  .sync({ alter: true })
  .then(async () => {
    await firstFetch();
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
