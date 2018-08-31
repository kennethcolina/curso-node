const noticias = app => {
    
    app.get('/noticias', (req, res) => {

        const connection = app.config.dbConnection();

        connection.query('select * from noticias', (error, result) => {

            if(error) console.error(error);

            res.render('./noticias/noticia', { noticias: result });

        });

    });

}

module.exports = noticias; 