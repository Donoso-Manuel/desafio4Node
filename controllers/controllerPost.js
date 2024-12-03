const post = require('../models/post');

const creaPost = async (req, res)=>{
    const {titulo, img, descripcion} = req.body
    try{
        const newPost = await post.crearPost(titulo, img, descripcion)
        console.log(newPost)
        res.status(201).json(newPost);
    }catch(err){
        res.status(500).send("error en datos recibido");
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

const actualizaPost = async (req, res)=>{
    try{
        const {id} = req.params;
        const like = post.actualizaPost(id);
        res.status(201).send('Like actualizado')
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

const eliminaPost = async(req , res)=>{
    try{
        const {id} = req.params
        const eliminado = await post.eliminaPost(id)
        res.status(201).send('Post eliminado')
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

module.exports = {creaPost, obtenPosts, actualizaPost, eliminaPost};