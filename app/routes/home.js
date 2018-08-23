const home = app => app.get('/', (req, res) => res.render('./home/index'));

module.exports = home;