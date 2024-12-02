const express = require('express');
const router = express.Router();
const controllerPost = require('../controllers/controllerPost');

router.post('/posts', controllerPost.creaPost);

router.get('/posts', controllerPost.obtenPosts);

module.exports = router;