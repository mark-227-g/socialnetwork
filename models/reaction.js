const {Schema, model} = require('mongoose');

const reactionSchema = new Schema (
    {
    reactionBody: {
        type:String, 
        required:true,  
        trim:true,
        maxLength:[280,'Too many characters'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type:String, 
        require:true},
    },
    {
        toJSON: {
            virtuals:true,
        },
        id:false,
    }
);
reactionSchema
.virtual('getsomething')
// Getter
.get(function () {
  return `abc`;
});

const Reaction = model('reaction',reactionSchema);
module.exports = Reaction;