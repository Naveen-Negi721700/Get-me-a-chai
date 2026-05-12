

import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const UserSchema = new Schema({
     email: {type:String, required:true},
    name: {type:String},
    Username: {type:String, required:true},
    profilePic :{type:String},
    coverPic :{type:String},
    createdAt: {type:Date, default:Date.now},
    updatedAt: {type:Date, default:Date.now}
});

export default models.User || model("User", UserSchema);