import mongoose, { Document, Schema, Types } from "mongoose";

interface IGroup extends Document {
  name: string
  owner: Types.ObjectId
  members: Types.ObjectId []
}

const GroupSchema = new Schema<IGroup>({
      name: {
        type: String,
        required: true
      },
      owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      members: {
        type: [Schema.Types.ObjectId],
        ref: "User"
      }
})

const Group = mongoose.model<IGroup>("Group",GroupSchema)

export default Group