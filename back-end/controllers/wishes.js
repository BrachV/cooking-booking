const db = require("../models/");
const Wishes = db.wishes;
const Ateliers = db.ateliers;

const allWishes = async (req, res) => {
  try {
    let wishes = await Wishes.findAll({
      include: [Ateliers],
    });
    res.status(200).send(wishes);
  } catch (error) {
    console.error("Error fetching wishes ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


module.exports = {
  allWishes
};
