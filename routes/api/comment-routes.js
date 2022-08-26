//import the methods from the comment controller file
const router = require("express").Router();
const {
  addComment,
  removeComment,
  addReply,
  removeReply,
} = require("../../controllers/comment-controller");
//set up route called /api/comments/:pizzaId and use the addComment() method as a post callback
//then set up another route for /api/comments/:pizzaId/:commentId and use the removeComment method as a delete callback

//api/comments/<pizzaId>
router.route("/:pizzaId").post(addComment);

// /api/comments/<pizzaId>/<commentId>
router.route("/:pizzaId/:commentId").put(addReply).delete(removeComment);
//create a DELETE route to handle removeReply
router.rout("/:PizzaId/:commentId/:replyId").delete(removeReply);
module.exports = router;
