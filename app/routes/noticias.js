const noticias = application => {
    
    application.get('/noticias', (req, res) => {

        const connection = application.config.dbConnection();
        const noticiasModel = new application.app.models.noticiasDAO(connection);

        noticiasModel.getNoticias((error, result) => {

            if(error) console.error(error);

            res.render('./noticias/noticias', { noticias: result });

        });

    });

}

module.exports = noticias; 