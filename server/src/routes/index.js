const { Router } = require("express");
const getCountries = require("../controllers/getCountries");
const getById = require("../controllers/getById");
const getByName = require("../controllers/getByName");
const postActivities = require("../controllers/postActivities");
const getActivities = require("../controllers/getActivities");
const limitedCountries = require("../controllers/limitedCountries");

const router = Router();
router.get("/countries", getCountries);
router.get("/countries/limited", limitedCountries);
router.get("/countries/name", getByName);
router.get("/countries/:id", getById);
router.post("/activities", postActivities);
router.get("/activities", getActivities);

module.exports = router;
