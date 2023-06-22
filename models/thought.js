const {Schema, model} = require('mongoose');
//const Reaction = require('./reaction');
const User = require('./user');
const thoughtSchema = new Schema (
{
    thoughtText: {
        type:String, 
        required:true, 
        trim:true,
        maxLength:[280,'Too many characters'],
    },
    createdAt: 
    {
        type: Date,
        default: Date.now,
    },
    username:  {
        type: Schema.Types.ObjectId,
        ref: 'reaction',
      },
        reactions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'reaction',
              },
       ],
    },
    {
        toJSON: {
            virtuals:true,
        },
        id:false,
    },
);
// virtual functions
thoughtSchema
    .virtual('reactionCount')
    .get(function (){return this.reactions.length;})

const Thought = model('thought',thoughtSchema);

module.exports = Thought;