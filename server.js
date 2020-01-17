const express = require('express');
//declara una variable "app" que es el producto de la función express()
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS Engine
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Dennis adrian guzman betancur'
    })
});
app.get('/about', (req, res) => {
    res.render('about')
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});