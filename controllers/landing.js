const Contact = require('../models/contact');

module.exports = (app) => {
    app.get('/', (req, res) => {
        Contact.find({}).lean()
        .then(contacts => {
            res.render('landing', { contacts });
        }).catch(err => {
            console.log(err.message);
        })
      })
}