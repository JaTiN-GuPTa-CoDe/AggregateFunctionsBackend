const Data = require('../model/dataModel');

// Add new data to the database
exports.addData = async (req, res) => {
  try {
    const newData = new Data(req.body);
    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get aggregated data
exports.getAggregatedData = async (req, res) => {
  try {
    const groupedData = await Data.aggregate([
      { $group: { _id: "$group", count: { $sum: 1 } } }
    ]);

    const averageAge = await Data.aggregate([
      { $group: { _id: null, avgAge: { $avg: "$age" } } }
    ]);

    const sortedData = await Data.find().sort({ age: 1 });

    res.status(200).json({
      groupedData,
      averageAge: averageAge[0]?.avgAge,
      sortedData
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
