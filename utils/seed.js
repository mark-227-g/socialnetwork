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



  for(let i = 0; i < 5; i++) {
    const name = genRandomName();
    users.push({
      name,
      email:name.replace(' ','.')+'@abcxyz.edu',
    });
  }

  await User.collection.insertMany(users);
  const newUsers = await User.find();
 // console.log("table")
//  console.table(newUsers);

  await newUsers.forEach((user)=>{
    console.log("userid "+ user._id)
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
    
  /*
  await newUsers.forEach((user)=>{
    try {
    const newReaction = new Reaction({
      reactionBody: reactionWords[genRandomIndex(reactionWords)],
      username: user,
    });
    reactions.push(newReaction);
    console.log("thought for reaction "+reactionThoughts[2]._id)
    reactionThoughts[2].reactions.push(newReaction._id);
    reactionThoughts[2].save;
    */
  //  thoughts.push(newReaction);
  //  user.thoughts.push(newThought);
  //  user.save();
/*    
  }
 catch (err) {
  console.log("get foreach "+err);
  res.status(500).json(err);
}}
  )
  await Reaction.collection.insertMany(reactions);*/
  /*
  for (let i = 0; i < reactionWords.length; i++) {
    reactions.push({
      reactionBody: reactionWords[genRandomIndex(reactionWords)],
      username: users[genRandomIndex(users)],
    });
  }

  await Reaction.collection.insertMany(reactions);

  for (let index = 0; index < 5; index++) {
    
  reactions.forEach(()=> makeThought());
  }
  await Thought.collection.insertMany(thoughts);
*/
  console.table(users);
  console.table(thoughts);
  console.table(reactions);
  
  console.timeEnd('seeding');
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
