const Contact = require('../models/contact');

module.exports = (app) => {
  
    //READ
    app.get('/', (req, res) => {
        var currentUser = req.user;
        console.log(currentUser)
        Contact.find({}).lean()
        .then(contacts => {
            res.render('landing', { contacts });
        }).catch(err => {
            console.log(err.message);
        })
      })
}