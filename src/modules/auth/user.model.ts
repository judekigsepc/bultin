import mongoose from "mongoose";
import { IUSER } from "./auth.types";

const userSchema = new mongoose.Schema<IUSER>({
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
    }
})

const User = mongoose.model<IUSER>("User", userSchema)

export default User