import mongoose from 'mongoose'
const MessageSchema = new mongoose.Schema({
    channelName: {
        type:String,
        required:[true,'Are you lost?']
    },
    Message: {
        type: String,
        required: [true, 'Message field cannot be empty']
    },
    sentAt: {
        type: Date,
        default: Date.now
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    }
});

export default mongoose.model('Message', MessageSchema)