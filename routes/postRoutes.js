const express = require('express');
const router = express.Router();
const controllerPost = require('../controllers/controllerPost');

router.post('/posts', controllerPost.creaPost);

router.get('/posts', controllerPost.obtenPosts);

router.put('/posts/like/:id', controllerPost.actualizaPost);

router.delete('/posts/:id', controllerPost.eliminaPost);

module.exports = router;