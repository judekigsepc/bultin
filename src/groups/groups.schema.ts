import { Schema } from "mongoose";

export const GroupSchema = new Schema({
    name :{
        type: String,
        required: true
    }, 
    description : {
        type: String,
        required: true
    }
}, {timestamps: true}) 