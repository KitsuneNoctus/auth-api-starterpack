const Contact = require('../models/contact');
const { ensureAuth, ensureGuest } = require('../middleware/auth')

module.exports = (app) => {

    //CREATE
    app.get('/contacts/new', (req, res) => {
        res.render('contacts-new.handlebars');
    });

    app.post("/contacts/new", (req, res) => {
        // res.render('contacts-new.handlebars');
        console.log(req.body);
    });
}