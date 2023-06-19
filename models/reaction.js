const {Schema, Types} = require('mongoose');

const reactionSchema = new mongoose.Schema ({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => Types.ObjectId(),
    },
    reactionBody: {
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
    }

{
    toJSON: {
        getters:true,
    },
    id:false,
}
);

module.exports = reactionSchema;