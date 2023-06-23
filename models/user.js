const {Schema, model} = require('mongoose');
const Thought = require('../models');

const userSchema = new Schema ({
    name: {
        type:String, 
        required:true, 
        unique:true, 
        trim:true,
    },
    email: {
        type:String, 
        required:true, 
        unique:true,
        match: [/.+\@.+\..+/,'Invalid email'],
    },
    thoughts:[            {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      },],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'user',
      },],
},
{
    toJSON: {
        virtuals:true,
    },
    id:false,
}
);
userSchema
    .virtual('thoughtCount')
    .get(function (){return this.thoughts.length;})
userSchema
    .virtual('friendCount')
    .get(function (){return this.friends.length;})

const User = model('user',userSchema);

module.exports = User;