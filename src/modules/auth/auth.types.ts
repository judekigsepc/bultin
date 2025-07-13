import { Document } from "mongoose"

export interface IUSER extends Document {
    fullName: string
    email: string
    password: string
}