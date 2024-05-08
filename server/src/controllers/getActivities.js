const { Activity } = require("../db");

const getActivities = async (req, res) => {
  try {
    const activities = await Activity.findAll();

    if (activities.length === 0) {
      return res.status(404).json({ message: "There is not activities yet" });
    }
    res.status(200).json({ activities });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getActivities
