const app = require('./config/server');

const rotaHome = require('./app/routes/home')(app);
const rotaFormulario_inclusao_noticia = require('./app/routes/formulario_inclusao_noticia')(app);
const rotaNoticia = require('./app/routes/noticia')(app);

app.listen(3000, () => console.log('Servidor ON'));