const connection = require('../config/connection');
const { User,Thought,Reaction } = require('../models');
//const Thought = require('../models/thought');
//const Reaction = require('../models/reaction');
const { getRandomName, getRandomThoughts, getRandomReactions} = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  //await Reactions.deleteMany({});
  //await Thought.deleteMany({});
  //await User.deleteMany({});

  const users = [];
  const thoughts = getRandomThoughts(10);
  const reactions = getRandomReactions(2);

  for (let i = 0; i < 20; i++) {
    const name = getRandomName();
    users.push({
      name,
      email:name.replace(' ','.')+'@abcxyz.edu',
    });
  }

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);
  //await Reaction.collection.insertMany(reactions);
  //await Reaction.collection.insertMany(reactions);
  //await User.insertMany(users);
  //await Thought.insertMany(thoughts);
  //await Reactions.insertMany(reactions);

  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  console.table(users);
  console.table(thoughts);
  console.table(reactions)
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
