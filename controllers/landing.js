const Contact = require('../models/contact');

module.exports = (app) => {
  
    //READ
    app.get('/', (req, res) => {
        var currentUser = req.user;
        Contact.find({}).lean()
        .then(contacts => {
            res.render('landing', { contacts, currentUser });
        }).catch(err => {
            console.log(err.message);
        })
      })
}