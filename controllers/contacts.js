const Contact = require('../models/contact');
var ObjectId = require('mongodb').ObjectID;
const { ensureAuth, ensureGuest } = require('../middleware/auth')

module.exports = (app) => {

    //Show New
    app.get('/contacts/new', (req, res) => {
        var currentUser = req.user;
        res.render('contacts-new.handlebars', {currentUser});
    });

    //CREATE
    app.post("/contacts/new", (req, res) => {
        // res.render('contacts-new.handlebars');
        var currentUser = req.user;
        var contact = new Contact(req.body);
        contact
        .save()
        .then(contact => {
            return res.redirect(`/`);
        })
        .catch(err => {
            console.log(err.message);
        });
        console.log(req.body);
    });

    // READ
    app.get('/contact/:id', (req, res) => {
        var currentUser = req.user;
        Contact.findById(req.params.id).lean()
        .then(contact => {
            res.render("contact-detail", { contact, currentUser });  
        })
        .catch(err => {
            console.log(err.message);
        });
    });

    //UPDATE
    app.get('/contacts-update/:id', (req, res) => {
        var currentUser = req.user;
        Contact.findById(req.params.id).lean()
        .then(contact => {
            res.render("contacts-update", { contact, currentUser });  
        })
        .catch(err => {
            console.log(err.message);
        });
    });

    app.post("/contacts-update/:id", (req, res) => {
        Contact.updateOne({ _id: req.params.id},{
            $set:{
                "name": req.body.name,
                "email": req.body.email,
                "phone": req.body.phone,
                "socialone": req.body.socialone,
                "socialtwo": req.body.socialtwo,
                "private": req.body.private
            }
        })
        .then(contact => {
            return res.redirect(`/`);
        })
        .catch(err => {
            console.log(err.message);
        });
        console.log(req.body);
    });

    //DELETE
    app.get("/delete/:id", (req, res) =>{
        Contact.deleteOne({"_id": req.params.id})
        .then(contact => {
            return res.redirect(`/`); 
        })
        .catch(err => {
            console.log(err.message);
        });
    });
}