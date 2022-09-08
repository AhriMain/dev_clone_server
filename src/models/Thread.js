const { Schema, model, Types } = require("mongoose");

const threadSchema = new Schema(
  {
    user: {
      type: Types.ObjectId,
      ref: "User",
    },
    topic: String,
    tags: {
      type: [String],
    },
    title: String,
    desc: String,
    likes: {
      type: Number,
      default: 0,
    },
    comments: [{ type: Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

module.exports = model("Thread", threadSchema);
