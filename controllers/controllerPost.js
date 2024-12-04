const post = require('../models/post');

const creaPost = async (req, res)=>{
    const {titulo, img, descripcion} = req.body
    try{
        const newPost = await post.crearPost(titulo, img, descripcion)
        res.status(201).json(newPost[0]);
    }catch(err){
        console.error("Error al crear el post: ", err)
        res.status(500).json({error: err.message });
    }
};

const obtenPosts = async (req, res)=>{
    try{
        const posts = await post.obtenerPosts();
        res.status(200).json(posts)
    }catch(err){
        console.error("Error al obtener los post", err)
        res.status(500).json({error: err.message})
    }
}

const actualizaPost = async (req, res)=>{
    try{
        const {id} = req.params;
        await post.actualizaPost(id);
        res.status(200).send('Like actualizado')
    }catch(err){
        console.error("no se pudo dar like:", err)
        res.status(500).json({error: err.message});
    }
}

const eliminaPost = async(req , res)=>{
    try{
        const {id} = req.params
        await post.eliminaPost(id)
        res.status(200).send('Post eliminado')
    }catch(err){
        console.error("no se pudo eliminar el post", err)
        res.status(500).json({error: err.message});
    }
}

module.exports = {creaPost, obtenPosts, actualizaPost, eliminaPost};