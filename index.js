const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const hbs = require("hbs");

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;
const {data} = require("./managers/controlador_mensajes");

app.set('view engine', 'hbs');
app.use(express.static("public"));

// -------------------
// vista
// -------------------

app.get('/', (req, res) => {
    res.render('index');
});

app.get("/contacto/", (req, res) => {    
    res.render(`contacto`);
});

app.get("/login/", (req, res) => {
    const entrar = document.getElementById("entrar");
    entrar.addEventListener('click', {

    })
    
    res.render(`login`);
});

app.get("/mensajes", (req, res) => {    
    res.render(`mensaje`, {
        data: data.credenciales
    });
});

// -------------------
// post
// -------------------



// -------------------

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});


