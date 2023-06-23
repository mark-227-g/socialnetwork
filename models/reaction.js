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
        
            type: Schema.Types.ObjectId,
            ref: 'user',
          
    }
},
    {
        toJSON: {
            virtuals:false,
        },
        id:false,
    },
);
reactionSchema

const Reaction = model('reaction',reactionSchema);
module.exports = Reaction;