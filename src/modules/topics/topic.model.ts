import mongoose, { Document, Schema, Types } from "mongoose";

interface ITopic extends Document {
    name: string
    forGroup: Types.ObjectId
}

const TopicSchema = new Schema<ITopic>({
    name: {
        type: String,
        required: true
    },
    forGroup: {
        type: Schema.Types.ObjectId,
        ref: "Group",
        required: true
    }
})

const Topic = mongoose.model<ITopic>("Topic", TopicSchema)

export default Topic