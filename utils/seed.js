const connection = require('../config/connection');
const { User,Thought,Reaction } = require('../models');
const { genRandomName, genRandomSentence,genRandomIndex} = require('./data');

/* Start the seeding runtime timer */
console.time('seeding');

/* open connection and start seeding */
connection.once('open', async () => {
  await Reaction.deleteMany();
  await Thought.deleteMany({});
  await User.deleteMany({});

const users = [];
const thoughts = [];
const reactions = [];


/* create users */
  for(let i = 0; i < 20; i++) {
    const name = genRandomName();
    users.push({
      name,
      email:name.replace(' ','.')+'@abcxyz.edu',
    });
  }

  await User.collection.insertMany(users);
  const newUsers = await User.find();

/* add thoughts to users */

  await newUsers.forEach((user)=>{
    try {
    const newThought = new Thought({
      thoughtText:genRandomSentence(10),
      username:user,
    });
    thoughts.push(newThought);
    user.thoughts.push(newThought);
    user.save();
  
  }
 catch (err) {
  console.log("get foreach "+err);
  res.status(500).json(err);
}}
  ) 
  await Thought.collection.insertMany(thoughts);


  /* add reactions to thoughts and to users */
  const reactionWords = [
    'Doc',
    'Grumpy',
    'Happy',
    'Sleepy',
    'Bashful',
    'Sneezy',
    'Dopey',
  ];

    const reactionThoughts=await Thought.find();

    await reactionThoughts.forEach((thought)=>{
      try {
        const newReaction = new Reaction({
          reactionBody: reactionWords[genRandomIndex(reactionWords)],
          username: newUsers[genRandomIndex(newUsers)],
        });
        reactions.push(newReaction);
        thought.reactions.push(newReaction);
        thought.save();
      }
      catch (err) {
        console.log("get foreach "+err);
        res.status(500).json(err);
      }
    })
    await Reaction.collection.insertMany(reactions);
    
  /* done seeding */
  console.table(users);
  console.table(thoughts);
  console.table(reactions);
  
  console.timeEnd('seeding');
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
