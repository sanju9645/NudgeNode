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

const insertMessageTest = async () => {
  const conversations = [
    {
      senderId: '65e025737f2cba5d81029c3c',
      recipientId: '65e0257b7f2cba5d81029c40',
      messageType: 'text',
      body: 'How was your weekend?'
    },
    {
        senderId: '65e0257b7f2cba5d81029c40',
        recipientId: '65e025737f2cba5d81029c3c',
        messageType: 'text',
        body: 'It was great! I went hiking. What about you?'
    },
    {
      senderId: '65e0257b7f2cba5d81029c40',
      recipientId: '65e025737f2cba5d81029c3c',
      messageType: 'text',
      body: 'Not yet, but I heard it\'s really good.'
    },
    {
      senderId: '65e025737f2cba5d81029c3c',
      recipientId: '65e0257b7f2cba5d81029c40',
      messageType: 'text',
      body: 'You should watch it. It\'s worth it.'
    },
    {
      senderId: '65e025737f2cba5d81029c3c',
      recipientId: '65e0257b7f2cba5d81029c40',
      messageType: 'text',
      body: 'Did you catch the latest episode of that show?'
    },
    {
      senderId: '65e0257b7f2cba5d81029c40',
      recipientId: '65e025737f2cba5d81029c3c',
      messageType: 'text',
      body: 'Yes, it was so intense! I can\'t wait for the next one.'
    },
    {
      senderId: '65e0257b7f2cba5d81029c40',
      recipientId: '65e025737f2cba5d81029c3c',
      messageType: 'text',
      body: 'I\'m going to visit my family. How about you?'
    },
    {
      senderId: '65e025737f2cba5d81029c3c',
      recipientId: '65e0257b7f2cba5d81029c40',
      messageType: 'text',
      body: 'I\'m planning a trip to the beach.'
    },
    {
      senderId: '65e0257b7f2cba5d81029c40',
      recipientId: '65e025737f2cba5d81029c3c',
      messageType: 'text',
      body: 'Just relaxing at home. How about you?'
    },
    {
      senderId: '65e025737f2cba5d81029c3c',
      recipientId: '65e0257b7f2cba5d81029c40',
      messageType: 'text',
      body: 'Same here. It\'s nice to unwind.'
    },
    {
      senderId: '65e0257b7f2cba5d81029c40',
      recipientId: '65e025737f2cba5d81029c3c',
      messageType: 'text',
      body: 'What do you have in mind?'
    },
    {
      senderId: '65e025737f2cba5d81029c3c',
      recipientId: '65e0257b7f2cba5d81029c40',
      messageType: 'text',
      body: 'Maybe we could go for a hike.'
    },
    {
      senderId: '65e025737f2cba5d81029c3c',
      recipientId: '65e0257b7f2cba5d81029c40',
      messageType: 'text',
      body: 'That sounds fun. Let\'s do it.'
    },
    {
      senderId: '65e0257b7f2cba5d81029c40',
      recipientId: '65e025737f2cba5d81029c3c',
      messageType: 'text',
      body: 'Great! I\'ll bring some snacks.'
    },
    {
      senderId: '65e025737f2cba5d81029c3c',
      recipientId: '65e0257b7f2cba5d81029c40',
      messageType: 'text',
      body: 'I heard there\'s a new exhibition at the museum.'
    },
    {
      senderId: '65e0257b7f2cba5d81029c40',
      recipientId: '65e025737f2cba5d81029c3c',
      messageType: 'text',
      body: 'Yes, I saw the flyer. Let\'s go check it out.'
    },
    {
      senderId: '65e025737f2cba5d81029c3c',
      recipientId: '65e0257b7f2cba5d81029c40',
      messageType: 'text',
      body: 'Add the body of the message here'
    }, 


    {
      senderId: '65e025737f2cba5d81029c3c',
      recipientId: '65e0258f7f2cba5d81029c46',
      messageType: 'text',
      body: "I'm thinking of buying a MacBook. What do you think?"
    },
    {
        senderId: '65e0258f7f2cba5d81029c46',
        recipientId: '65e025737f2cba5d81029c3c',
        messageType: 'text',
        body: 'MacBooks are great! Theyre reliable and have a sleek design.'
    },
    {
      senderId: '65e0258f7f2cba5d81029c46',
      recipientId: '65e025737f2cba5d81029c3c',
      messageType: 'text',
      body: "I've been using a MacBook for years, and I love it."
    },
    {
        senderId: '65e025737f2cba5d81029c3c',
        recipientId: '65e0258f7f2cba5d81029c46',
        messageType: 'text',
        body: "That's good to hear. Which model would you recommend?"
    },
    {
      senderId: '65e025737f2cba5d81029c3c',
      recipientId: '65e0258f7f2cba5d81029c46',
      messageType: 'text',
      body: "I'm torn between the MacBook Air and the MacBook Pro."
    },
    {
      senderId: '65e0258f7f2cba5d81029c46',
      recipientId: '65e025737f2cba5d81029c3c',
      messageType: 'text',
      body: "Both are great choices. It depends on your needs and budget."
    },
    {
      senderId: '65e0258f7f2cba5d81029c46',
      recipientId: '65e025737f2cba5d81029c3c',
      messageType: 'text',
      body: "If you need more power for tasks like video editing, go for the MacBook Pro."
    },
    {
      senderId: '65e025737f2cba5d81029c3c',
      recipientId: '65e0258f7f2cba5d81029c46',
      messageType: 'text',
      body: "That makes sense. I'll consider that."
    },
    {
      senderId: '65e025737f2cba5d81029c3c',
      recipientId: '65e0258f7f2cba5d81029c46',
      messageType: 'text',
      body: "I've heard the new M1 chip in the latest MacBook models is impressive."
    }
  ];

  // try {
  //   const result = await MessageModel.insertMany(conversations);
  //   console.log(`${result.length} conversations inserted successfully.`);
  // } catch (err) {
  //   console.error(`Error inserting conversations: ${err}`);
  // }
  try {
    for (let i = 0; i < conversations.length; i++) {
      const result = await MessageModel.create(conversations[i]);
      console.log(`Conversation ${i + 1} inserted successfully.`);
      // Add a 1-second delay before inserting the next conversation
      await delay(1000);
    }
  } catch (err) {
    console.error(`Error inserting conversations: ${err}`);
  }

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
}

module.exports = {
  insertTest,
  insertMessageTest
}
