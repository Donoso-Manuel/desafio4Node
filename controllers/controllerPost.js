const post = require('../models/post');

const creaPost = async (req, res)=>{
    const {titulo, url, descripcion} = req.body
    try{
        const nuevoPost =  await post.crearPost(titulo, url, descripcion)
        res.status(201).json(nuevoPost);
    }catch(err){
        res.status(500).json({error: err.message})
    }
};

const obtenPosts = async (req, res)=>{
    try{
        const posts = await post.obtenerPosts();
        res.status(201).json(posts)
    }catch(err){
        res.status(500).json({error: err.message})
    }
}

module.exports = {creaPost, obtenPosts};