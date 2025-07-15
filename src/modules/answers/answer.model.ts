import mongoose, { Types,Schema } from "mongoose"

interface IAnswer extends Document {
    content: string
    forQuestion: Types.ObjectId
    byUser: Types.ObjectId
    comments: Types.ObjectId []
    ags: number
    disags: number
}

const AnswerSchema = new Schema<IAnswer>({
   content : {
    type: String,
    required: true
   },
   forQuestion: {
    type: Schema.Types.ObjectId,
    ref: "Question",
    required: true
   },
   byUser: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true  
   },
   comments: {
    type: [Schema.Types.ObjectId],
    ref: "Comment"
   },
   ags: {
    type: Number,
    default:0
   },
   disags: {
    type: Number,
    default: 0
   }

})

const Answer = mongoose.model<IAnswer>("Answer",AnswerSchema)

export default Answer