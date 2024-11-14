
const Router = require('express');

const router = new Router();

//import axios from 'axios';

const postController = require('../controller/post.controller.js');

router.post('/post', postController.createPost);
router.get('/post', postController.getPostByUser);

module.exports = router;