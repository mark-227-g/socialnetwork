const { Friend, User } = require('../models');


module.exports = {
/* ********* addFriend ****** */
async addFriend(req,res) {
    try {
        console.log("userid "+req.params.userId)
        const user = await User.findOne({ _id: req.params.userId });
         
  
        if (!user) {
          console.log("did not find friend "+user)
          return res.status(404).json({ message: 'No user with that ID' });
        }
        user.friends.push(req.body.friendId);
        await user.save();
        res.json(user);
    }
 catch (err) {
    console.log("Err addFriend: "+err);
    res.status(500).json(err);
  }
  
},
/* ******** remove Friend ********* */
async removeFriend(req,res) {
    try {
      
      const user = await User.updateOne(
        { _id: req.params.userId },
        { $pull: { friends: req.body.friendId  } },
       // { new: true }
      );
        if (!user) {
         return res.status(404).json({ message: 'No user with that ID' });
       } 
      
  
        res.json('friend successfully deleted!');
    }
 catch (err) {
    console.log("Err removeFriend: "+err);
    res.status(500).json(err);
  }
}


}