const {Schema, model} = require('mongoose');
const Thought = require('./thought');

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
    thoughts:[],
    friends: [],
},
{
    toJSON: {
        virtuals:true,
    },
    id:false,
}
);

userSchema
    .virtual('friendCount')
    .get(function (){return this.friends.length;})

const User = model('user',userSchema);

module.exports = User;