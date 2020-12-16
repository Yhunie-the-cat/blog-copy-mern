import express from "express";
import {
   getPosts,
   createPost,
   getPostByID,
   deletePostByID,
   updatePostByID,
} from "../controllers/posts.js";

const router = express.Router();

// http://localhost:5000/posts
router.get("/", getPosts);
router.post("/", createPost);
router.get("/:postID", getPostByID);
router.delete("/:postID", deletePostByID);
router.patch("/:postID", updatePostByID);

export default router;
