const express = require('express'),
    servidor = express(),
    dotenv = require('dotenv'),
    Colors = require('colors');

    dotenv.config();

    const port = process.env.port;

servidor.get('/', (req,  res) =>{
    res.send(`El puerto es: ${port}`)
}); 
servidor.listen(port, () => {
    console.log(`Estoy en el puerto: ${port}`.blue);
})