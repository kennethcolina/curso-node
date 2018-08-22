// import http from 'http';
const http = require('http');

const server = http.createServer((req, res) => {
    
    const categoria = req.url;

    console.log(categoria);

    if(categoria === '/tecnologia') {

        res.end('<html><body>Notícias de tecnologia</body></html>');
            
    } else if(categoria === '/moda') {

        res.end('<html><body>Notícias de moda</body></html>');
    } else if(categoria === '/beleza') {

        res.end('<html><body>Notícias de beleza</body></html>');

    } else {

        res.end('<html><body>Portal de Notícias</body></html>')

    }
    
});

server.listen(3000, () => console.log('Listening on port 3000...'));

// ()
// =
// s
// f
// {}
// *