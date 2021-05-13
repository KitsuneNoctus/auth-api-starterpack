const Contact = require('../models/contact');
const { ensureAuth, ensureGuest } = require('../middleware/auth')

module.exports = (app) => {

    //Show
    app.get('/contacts/new', (req, res) => {
        res.render('contacts-new.handlebars');
    });

    //CREATE
    app.post("/contacts/new", (req, res) => {
        // res.render('contacts-new.handlebars');
        var contact = new Contact(req.body);
        contact
        .save()
        .then(post => {
            return res.redirect(`/`);
        })
        .catch(err => {
            console.log(err.message);
        });
        console.log(req.body);
    });
}