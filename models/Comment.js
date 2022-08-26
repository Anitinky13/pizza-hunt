const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const CommentSchema = new Schema(
  {
    writtenBy: {
      type: String,
    },
    commentBody: {
      type: String,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    //use ReplySchema to validate data for a reply
    replies: [ReplySchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);
const ReplySchema = new Schema(
  {
    //set custome id to avoid confusiong with paarent comment _id
    replyId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    replyBody: {
      type: String,
    },
    writtenBy: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Comment = model("Comment", CommentSchema);

module.exports = Comment;
