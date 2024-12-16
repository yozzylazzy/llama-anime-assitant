import { models, Schema, model } from "mongoose";

const ChatSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    chatId: { type: Schema.Types.ObjectId, ref: "Chat", required: true },
    name: { type: String, required: true },
    image: { type: String },
    password: { type: String },
    provider: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Chat = models?.Chat || model("Chat", ChatSchema);

export default Chat;