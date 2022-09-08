const router = require("express").Router();
const joi = require("joi");
const validator = require("express-joi-validation").createValidator();

const commentController = require("../controllers/comment.controller");
const jwtVerify = require("../middlewares/jwtVerify");

const commentSchema = joi.object({
  comment: joi.string().min(3).max(200).required(),
  thread: joi.string().required(),
});

router.post(
  "/create",
  jwtVerify,
  validator.body(commentSchema),
  commentController.createComment
);

router.get("/get", commentController.getAllComments);

module.exports = router;
