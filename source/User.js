import mongoose,{Schema} from "mongoose";

const UserSchema = mongoose.Schema({
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    }
})

const User = mongoose.model("User",UserSchema);
export {User};