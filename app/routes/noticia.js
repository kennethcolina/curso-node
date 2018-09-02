const noticia = application => {

    application.get('/noticia', (req, res) => {

        const connection = application.config.dbConnection();
        const noticiasModel = new application.app.models.noticiasDAO(connection);

        noticiasModel.getNoticia((error, result) => {

            if(error) console.error(error);

            res.render('noticias/noticia', { noticia: result })

        })
        
    })

}

module.exports = noticia;