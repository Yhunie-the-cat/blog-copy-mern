import PostMessage from "../models/postMessage.js";

// Get all post
export const getPosts = async (req, res) => {
   try {
      const postMessages = await PostMessage.find();
      res.status(200).json(postMessages);
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};

// Create post
export const createPost = async (req, res) => {
   const post = req.body;
   const newPost = new PostMessage(post);
   try {
      await newPost.save();
      res.status(201).json(newPost);
   } catch (error) {
      res.status(409).json({ message: error.message });
   }
};

// Find specific post by ID
export const getPostByID = async (req, res) => {
   try {
      const postMessage = await PostMessage.findById(req.params.postID);
      res.status(200).json(postMessage);
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};

// Delete specific post
export const deletePostByID = async (req, res) => {
   try {
      const deleteMessage = await PostMessage.deleteOne({
         _id: req.params.postID,
      });
      res.status(200).json(deleteMessage);
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};

// Update post
export const updatePostByID = async (req, res) => {
   try {
      const updateMessage = await PostMessage.updateOne(
         {
            _id: req.params.postID,
         },
         {
            $set: {
               title: req.body.title,
               message: req.body.message,
               author: req.body.author,
            },
         }
      );
      res.status(200).json(updateMessage);
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};
