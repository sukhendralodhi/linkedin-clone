const express = require('express');

const { getPosts, createPost } = require('../controllers/postControllers');

const router = express.Router();

router.route('/').get(getPosts);
router.route('/').post(createPost);

module.exports = router;