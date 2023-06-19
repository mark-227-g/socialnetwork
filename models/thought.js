const {Schema, model} = require('mongoose');
const Reaction = require('./reaction');
const thoughtSchema = new mongoose.Schema ({
    thoughtText: {
        type:String, 
        required:true, 
        trim:true,
        maxLength:[280,'Too many characters']
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
    username: {
        type:String, 
        require:true},
    reactions: [Reactions],
},
{
    toJSON: {
        virtuals:true,
    },
    id:false,
}
);

thoughtSchema
    .virtual('reactionCount')
    .get(function (){return this.reactions.length;})

const Thought = model('user',thoughtSchema);

module.exports = Thought;