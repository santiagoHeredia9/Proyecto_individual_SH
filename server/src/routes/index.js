const { Router } = require("express");
const getCountries = require("../controllers/getCountries");
const getById = require("../controllers/getById");
const getByName = require("../controllers/getByName");
const postActivities = require("../controllers/postActivities");
const getActivities = require("../controllers/getActivities");
const deleteActivity = require("../controllers/deleteActivity");

const router = Router();

router.get("/countries/limited", getCountries);
router.get("/countries/name", getByName);
router.get("/countries/:id", getById);
router.post("/activities", postActivities);
router.get("/activities", getActivities);
router.delete("/activities/:id", deleteActivity);

module.exports = router;
