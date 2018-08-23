const connection =  require('./../../config/dbConnection')();

const noticia = app => {
    
    app.get('/noticia', (req, res) => {
        
        connection.query('select * from noticias', (error, result) => {

            if(error) console.error(error);

            res.render('./noticias/noticia', { noticias: result });

        });

    });

}

module.exports = noticia; 