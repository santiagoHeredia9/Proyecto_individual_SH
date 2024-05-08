const { Router } = require("express");
const getCountries = require("../controllers/getCountries");
const getCountryById = require("../controllers/getCountryById");
const getCountryByName = require("../controllers/getCountryByName");
const postActivities = require("../controllers/postActivities");
const getActivities = require("../controllers/getActivities");

const router = Router();
router.get("/countries", getCountries);
router.get("/countries/:id", getCountryById);
router.get("/countries/name", getCountryByName);
router.post("/activities", postActivities);
router.get("/activities", getActivities);

module.exports = router;
