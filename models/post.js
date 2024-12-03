const pool = require('../config/db');

const crearPost = async (titulo, img, descripcion)=>{
    try{
        const consulta = 'INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, $4) RETURNING *';
        const valores = [titulo, img, descripcion, 0];
        const result =  await pool.query(consulta, valores)
        return result.rows;

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
        throw new Error('Problemas con base de datos: '+ err.message)
    }
}

const actualizaPost = async(id)=>{
    try{
        const consulta = 'UPDATE posts SET likes = likes + 1 WHERE id = $1';
        const values = [id];
        const result = await pool.query(consulta, values)
    }catch(err){
        throw new Error('Problam para actualizar post ' + err.message)
    }
}

const eliminaPost = async(id)=>{
    try{
        const consulta = 'DELETE FROM posts WHERE id = $1';
        const values = [id];
        const result = pool.query(consulta, values)
    }catch(err){
        throw new Error('Problema para eliminar Post ' + err.message)
    }
}
module.exports = {crearPost, obtenerPosts, actualizaPost, eliminaPost};