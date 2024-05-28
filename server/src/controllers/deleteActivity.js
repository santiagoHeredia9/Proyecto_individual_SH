const { Activity } = require("../db");

const deleteActivity = async (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(404).json({ message: "Activity not found" });
  }

  try {
    const deletedActivity = await Activity.destroy({ where: { id } });
    if (deletedActivity) {
      return res
        .status(200)
        .json({ message: "Activity deleted successfully", id });
    } else {
      return res.status(404).json({ message: "Activity not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = deleteActivity;
