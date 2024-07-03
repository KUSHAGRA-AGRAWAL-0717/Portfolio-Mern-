import mongoose from "mongoose";
const senderSchema=new mongoose.Schema({
    fullname: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    desc:{
        type:String
    },

},
{ timestamps: true })

export default mongoose.model('Sender',senderSchema)