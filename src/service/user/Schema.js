import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    passenger_name:{
        type:String,
        required:true
    },
    From:{
        type:String,
        required:true
    },
    To:{
        type:String,
        required:true,
    },
    journey_date:{
        type:String,
        required:true,
    },
    coach_type:{
        type:String,
        required:true,
    }
})

const user = mongoose.model('User',userSchema);

export default user;