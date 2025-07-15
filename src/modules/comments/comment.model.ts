import mongoose, { Document,Types,Schema } from "mongoose";

interface IComment extends Document {
    content: string
    forAnswer: Types.ObjectId
    byUser: Types.ObjectId
    reason: "reply" | "disagree"
}

const CommentSchema = new Schema<IComment>({
    content: {
        type: String,
        required: true,
    },
    forAnswer: {
        type: Schema.Types.ObjectId,
        ref: "Answer",
        required: true
    },
    byUser : {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    reason: {
        type: String,
        enum: ["reply","disagree"],
        required: true
    }
})

const Comment = mongoose.model<IComment>("Comment",CommentSchema)

export default Comment