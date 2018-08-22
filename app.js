const express = require('express');
const app = express();
const msg = require('./mod_teste')();

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('home/index'));
app.get('/formulario_inclusao_noticia', (req, res) => res.render('admin/form_add_noticia'));
app.get('/noticia', (req, res) => res.render('noticias/noticia'));

app.listen(3000, () => console.log(msg));