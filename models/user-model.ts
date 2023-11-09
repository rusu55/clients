import {Schema, model, models} from 'mongoose';

const UserSchema = new Schema({
    email:{
        type: String,
        unique: [true, 'Email already exist!'],
        require: [true, 'Email is required'],
    },
    name: {
        type: String,
        required: [true, 'Username is required!'],
        //match:  [/^[a-zA-Z ]{2,30}$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image: {
        type: String
    },
    password: {
        type: String
    }  
})

const User = models.User || model("User", UserSchema)

export default User;