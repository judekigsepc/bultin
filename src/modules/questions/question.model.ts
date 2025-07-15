import mongoose, { Document,Types,Schema } from "mongoose";

interface IQuestion extends Document {
    name: string
    forTopic: Types.ObjectId
}

const QuestionSchema = new Schema<IQuestion>({
    name: {
        type: String,
        required: true
    },
    forTopic: {
        type: Schema.Types.ObjectId,
        ref: "Topic",
        required: true
    }
})

const Question = mongoose.model<IQuestion>("Question", QuestionSchema)

export default Question