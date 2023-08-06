const Contact = require('../models/postModels');

const getPosts = async (req, res) => {
    const posts = await Contact.find();
    res.status(200).json(posts);
}

const createPost = async (req, res) => {
    const { description } = req.body;
    if (!description) {
        res.status(400);
        throw new Error("Write something");
    }
    const post = await Contact.create({
        description
    });
    res.status(200).json(post)
}

module.exports = { getPosts, createPost };