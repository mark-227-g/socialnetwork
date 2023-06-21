const { Reaction, Thought } = require('../models');

module.exports = {
  async getReactions(req, res) {
    try {
      const reactions = await Reaction.find()
        .select('-__v');
      res.json(reactions);
    } catch (err) {
      console.log("Err getReactions: "+err);
      res.status(500).json(err);
    }
  },
  async getSingleReaction(req, res) {
    try {
      const reaction = await Reaction.findOne({ _id: req.params.reactionId })
        .select('-__v');

      if (!reaction) {
        return res.status(404).json({ message: 'No reaction with that ID' });
      }

      res.json(reaction);
    } catch (err) {
      console.log("Err getSingleReaction: "+err);
      res.status(500).json(err);
    }
  },
  // create a new reaction
  async addReaction(req, res) {
    try {
      const reaction = await Reaction.create(req);
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: reaction._id } },
        { new: true }
      );

      if (!thought) {
        return res
          .status(404)
          .json({ message: 'Reaction created, but found no thought with that ID' });
      }

      res.json('Created the reaction 🎉');
    } catch (err) {
      console.log("err createReaction: "+err);
      res.status(500).json(err);
    }
  },
  // create a new reaction
  async removeReaction(req, res) {
    try {
      const reaction = await Reaction.create(req);
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: reaction._id } },
        { new: true }
      );

      if (!thought) {
        return res
          .status(404)
          .json({ message: 'Reaction created, but found no thought with that ID' });
      }

      res.json('Created the reaction 🎉');
    } catch (err) {
      console.log("err createReaction: "+err);
      res.status(500).json(err);
    }
  }
};