const { Schema, model, Types } = require("mongoose");

const commentSchema = new Schema(
  {
    user: {
      type: Types.ObjectId,
      ref: "User",
    },
    thread: { type: Types.ObjectId, required: true },
    comment: String,
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = model("Comment", commentSchema);
