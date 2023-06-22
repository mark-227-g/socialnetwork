const { Friend, User } = require('../models');


module.exports = {
async addFriend(req,res) {
    try {
        console.log(req.params.friendId)
        const user = await User.findOne({ _id: req.params.friendId })
          .select('-__v');
  
        if (!user) {
          return res.status(404).json({ message: 'No user with that ID' });
        }
  
        res.json(user);
    }
 catch (err) {
    console.log("Err addFriend: "+err);
    res.status(500).json(err);
  }
  
},
async removeFriend(req,res) {
    try {
        console.log(req.params.friendId)
        const user = await User.findOne({ _id: req.params.friendId })
          .select('-__v');
  
        if (!user) {
          return res.status(404).json({ message: 'No user with that ID' });
        }
  
        res.json(user);
    }
 catch (err) {
    console.log("Err addFriend: "+err);
    res.status(500).json(err);
  }
}


}