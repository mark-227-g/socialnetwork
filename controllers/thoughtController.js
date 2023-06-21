const { Reaction, Thought } = require('../models');
module.exports = {
    // Get all thoughts
    async getAllThoughts(req, res) {
      try {
        const thoughts = await Thought.find();
        res.json(thoughts);
      } catch (err) {
        console.log("Err getAllThoughts: "+err);
        res.status(500).json(err);
      }
    },
    // Get a single thought
    async getThoughtById(req, res) {
      try {
        const thought = await Thought.findOne({ _id: req.params.thoughtId })
          .select('-__v');
  console.log(req.params.thoughtId)
  console.log("thought" + thought)
        if (!thought) {
          return res.status(404).json({ message: 'No thought with that ID' });
        }
  
        res.json(thought);
      } catch (err) {
        console.log("Err getThoughtById: "+err);
        res.status(500).json(err);
      }
    },
          // create a new thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      console.log("Err createThought: "+err);
      res.status(500).json(err);
    }
  },
    // Updates and application using the findOneAndUpdate method. Uses the ID, and the $set operator in mongodb to inject the request body. Enforces validation.
    async updateThought(req, res) {
      try {
        const thought = await Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $set: req.body },
          { runValidators: true, new: true }
        );
  
        if (!thought) {
          return res.status(404).json({ message: 'No thought with this id!' });
        }
  
        res.json(thought);
      } catch (err) {
        console.log("err updateThought: "+err);
        res.status(500).json(err);
      }
    },
    async deleteThought(req, res) {
      try {
        const thought = await Thought.findOneAndRemove({ _id: req.params.thoughtId });
  
        if (!thought) {
          return res.status(404).json({ message: 'No thought with this id!' });
        }
        res.json({ message: 'thought successfully deleted!' });
      } catch (err) {
        console.log("Err deleteThought: "+err);
        res.status(500).json(err);
      }
    },
    /*
    async addReaction(req, res) {
      try {
        const thought = await Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $addToSet: { reactions: req.body } },
          { runValidators: true, new: true }
        );
  
        if (!thought) {
          return res.status(404).json({ message: 'No thought with this id!' });
        }
  
        res.json(thought);
      } catch (err) {
        console.log("Err: "+err);
        res.status(500).json(err);
      }
    },
    // Remove application tag. This method finds the application based on ID. It then updates the tags array associated with the app in question by removing it's tagId from the tags array.
    async removeReaction(req, res) {
      try {
        const thought = await Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $pull: { reactions: { reactionId: req.params.reactionId } } },
          { runValidators: true, new: true }
        );
  
        if (!thought) {
          return res.status(404).json({ message: 'No thought with this id!' });
        }
  
        res.json(thought);
      } catch (err) {
        console.log("Err: "+err);
        res.status(500).json(err);
      }
    }, */
  };
  