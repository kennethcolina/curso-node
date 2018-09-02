const formulario_inclusao_noticia = application => {

    application.get('/formulario_inclusao_noticia', (req, res) => {
        
        res.render('./admin/form_add_noticia');

    })

    application.post('/noticias/salvar', (req, res) => {
        
        const connection = application.config.dbConnection();
        const noticiasModel = new application.app.models.noticiasDAO(connection);

        noticiasModel.salvarNoticia(req.body, (error, result) => {

            if(error) console.error(error);

            res.redirect('/noticias');

        });


    })

};

module.exports = formulario_inclusao_noticia;