const pool = require('../config/db');

const crearPost = async (titulo, url, descripcion)=>{
    try{
        const consulta = 'INSERT INTO posts VALUES (DEFAULT, $1, $2, $3)';
        const valores = [titulo, url, descripcion];
        console.log("Post guardado con URL de imagen:", url);
        const result =  await pool.query(consulta, valores)
        console.log('Post Creado')
    }catch(err){
        throw new Error('Error al guardar el post: '+ err.message)
    }
};

const obtenerPosts = async()=>{
    try{
        const consulta = 'SELECT * FROM posts';
        const result = await pool.query(consulta);
        return result.rows;

    }catch(err){
        throw new Error('Problemas con base de datios: '+ err.message)
    }
}

module.exports = {crearPost, obtenerPosts};