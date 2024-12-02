const express = require('express');
const cors = require('cors');
const postRoutes = require('./routes/postRoutes');
const app = express();

app.use(express.json());
app.use(cors());


app.listen(3000, ()=>{
    console.log('Servidor Esperando')
})

app.use('/', postRoutes)