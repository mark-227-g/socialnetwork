const {Schema, model} = require('mongoose');
const Thought = require('./thought')

const userSchema = new mongoose.Schema ({
    name: {
        type:String, 
        required:true, 
        unique:true, 
        trim:true
    },
    email: {
        type:String, 
        required:true, 
        unique:true,
        match: [/.+\@.+\..+/,'Invalid email'],
    },
    thoughts:[Thought],
    friends: [User],
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