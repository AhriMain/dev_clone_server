const asyncHandler = require("express-async-handler");
const Comments = require("../models/Comments");

// create a comment
const createComment = asyncHandler(async (req, res) => {
  const { comment, thread } = req.body;
  const commentDB = await Comments.create({
    user: req.user._id,
    comment,
    thread,
  });
  res.status(200).json({ msg: "comment saved", commentDB });
});

// get all comments for particular thread
const getAllComments = asyncHandler(async (req, res) => {
  const { thread } = req.body;
  const commentDB = await Comments.find({ thread }).populate(
    "user",
    "username"
  );
  console.log(commentDB);
  res.json({ msg: "success", commentDB });
});

module.exports = { createComment, getAllComments };
