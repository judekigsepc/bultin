import mongoose from "mongoose";
import { IUser } from "./user.schema";

const userSchema = new mongoose.Schema<IUser>({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["teacher","student"],
        required: true
    },
})

const User = mongoose.model<IUser>("User", userSchema)

export default User