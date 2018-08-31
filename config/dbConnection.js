const mysql = require('mysql');

const connMySql = () => mysql.createConnection({
                            host: '127.0.0.1',
                            user: "usernameall",
                            password: '1234',
                            database: 'portal_noticias'
                        });

module.exports = () => connMySql;