const mongoose = require('mongoose');

const insertTest = async () => {
  const connections = [
    {
      romeo: new mongoose.Types.ObjectId('65e025737f2cba5d81029c3c'),
      juliet: new mongoose.Types.ObjectId('66087dceea807ae2606dff41'),
    },
    {
      romeo: new mongoose.Types.ObjectId('65e025737f2cba5d81029c3c'),
      juliet: new mongoose.Types.ObjectId('65e0257b7f2cba5d81029c40'),
    },
    {
      romeo: new mongoose.Types.ObjectId('66087db2ea807ae2606dff3c'),
      juliet: new mongoose.Types.ObjectId('65e025737f2cba5d81029c3c'),
    },
    {
      romeo: new mongoose.Types.ObjectId('66087d9eea807ae2606dff37'),
      juliet: new mongoose.Types.ObjectId('65e025737f2cba5d81029c3c'),
    },
    {
      romeo: new mongoose.Types.ObjectId('66087d67ea807ae2606dff32'),
      juliet: new mongoose.Types.ObjectId('65e025737f2cba5d81029c3c'),
    },
    {
      romeo: new mongoose.Types.ObjectId('66087d4dea807ae2606dff2d'),
      juliet: new mongoose.Types.ObjectId('65e025737f2cba5d81029c3c'),
    },
    {
      romeo: new mongoose.Types.ObjectId('65e025737f2cba5d81029c3c'),
      juliet: new mongoose.Types.ObjectId('65e0257b7f2cba5d81029c40'),
    },
    {
      romeo: new mongoose.Types.ObjectId('65e025737f2cba5d81029c3c'),
      juliet: new mongoose.Types.ObjectId('65e0258f7f2cba5d81029c46'),
    },
    {
      romeo: new mongoose.Types.ObjectId('65e025737f2cba5d81029c3c'),
      juliet: new mongoose.Types.ObjectId('66087b7c74952b50bdd41413'),
    },
    {
      romeo: new mongoose.Types.ObjectId('66087bb674952b50bdd4141b'),
      juliet: new mongoose.Types.ObjectId('65e025737f2cba5d81029c3c'),
    },
    {
      romeo: new mongoose.Types.ObjectId('65e025737f2cba5d81029c3c'),
      juliet: new mongoose.Types.ObjectId('66087c31ea807ae2606dff05'),
    },
    {
      romeo: new mongoose.Types.ObjectId('65e025737f2cba5d81029c3c'),
      juliet: new mongoose.Types.ObjectId('66087c68ea807ae2606dff0a'),
    },
    {
      romeo: new mongoose.Types.ObjectId('65e025737f2cba5d81029c3c'),
      juliet: new mongoose.Types.ObjectId('66087c80ea807ae2606dff0f'),
    },
    {
      romeo: new mongoose.Types.ObjectId('65e025737f2cba5d81029c3c'),
      juliet: new mongoose.Types.ObjectId('66087c93ea807ae2606dff14'),
    },
    {
      romeo: new mongoose.Types.ObjectId('65e025737f2cba5d81029c3c'),
      juliet: new mongoose.Types.ObjectId('66087cabea807ae2606dff19'),
    },
    {
      romeo: new mongoose.Types.ObjectId('65e025737f2cba5d81029c3c'),
      juliet: new mongoose.Types.ObjectId('66087cc9ea807ae2606dff1e'),
    },
    {
      romeo: new mongoose.Types.ObjectId('65e025737f2cba5d81029c3c'),
      juliet: new mongoose.Types.ObjectId('66087cdfea807ae2606dff23'),
    },
    {
      romeo: new mongoose.Types.ObjectId('65e0257b7f2cba5d81029c40'),
      juliet: new mongoose.Types.ObjectId('66087c31ea807ae2606dff05'),
    },
    {
      romeo: new mongoose.Types.ObjectId('65e0257b7f2cba5d81029c40'),
      juliet: new mongoose.Types.ObjectId('66087c80ea807ae2606dff0f'),
    },
    {
      romeo: new mongoose.Types.ObjectId('65e0257b7f2cba5d81029c40'),
      juliet: new mongoose.Types.ObjectId('66087cabea807ae2606dff19'),
    },
        {
      romeo: new mongoose.Types.ObjectId('65e0257b7f2cba5d81029c40'),
      juliet: new mongoose.Types.ObjectId('66087cc9ea807ae2606dff1e'),
    },
    {
      romeo: new mongoose.Types.ObjectId('65e0257b7f2cba5d81029c40'),
      juliet: new mongoose.Types.ObjectId('66087cdfea807ae2606dff23'),
    },


    {
      romeo: new mongoose.Types.ObjectId('65e025737f2cba5d81029c3c'),
      juliet: new mongoose.Types.ObjectId('66087df4ea807ae2606dff4b'),
    },
    {
      romeo: new mongoose.Types.ObjectId('65e025737f2cba5d81029c3c'),
      juliet: new mongoose.Types.ObjectId('66087de3ea807ae2606dff46'),
    }
  ];
  
  try {
    const result = await HeartbeatModel.insertMany(connections);
    console.log(`${result.length} conversations inserted successfully.`);
  } catch (err) {
    console.error(`Error inserting conversations: ${err}`);
  }
}

module.exports = {
  insertTest
}
