const connection = require('../config/connection');
const { User,Thought,Reaction } = require('../models');
const { genRandomName, genRandomSentence,genRandomIndex} = require('./data');

// Start the seeding runtime timer
console.time('seeding');

connection.once('open', async () => {
  await Reaction.deleteMany();
  await Thought.deleteMany({});
  await User.deleteMany({});

  const users = [];
  const thoughts = [];
  const reactions = [];

  for (let i = 0; i < 20; i++) {
    const name = genRandomName();
    users.push({
      name,
      email:name.replace(' ','.')+'@abcxyz.edu',
    });
  }

  await User.collection.insertMany(users);

  const makeThought = () => {
    thoughts.push({
      thoughtText:genRandomSentence(10),
      username:users[genRandomIndex(users)],
      reactions: [reactions[genRandomIndex(reactions)]._id],
    });
  };


  const reactionWords = [
    'Doc',
    'Grumpy',
    'Happy',
    'Sleepy',
    'Bashful',
    'Sneezy',
    'Dopey',
  ];
  
  for (let i = 0; i < reactionWords.length; i++) {
    reactions.push({
      reactionBody: reactionWords[genRandomIndex(reactionWords)],
      username: users[genRandomIndex(users)],
    });
  }

  await Reaction.collection.insertMany(reactions);

  reactions.forEach(()=> makeThought());

  await Thought.collection.insertMany(thoughts);

  console.table(users);
  console.table(thoughts);
  console.table(reactions)
  console.timeEnd('seeding');
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
